var editFormId;
var editFormName;
var editFormExpireDate;

var globTable;

var cntr;


function showEditForm(){
    document.getElementById("editFormModal").style.display = "flex";
}
function hideEditForm(){
    document.getElementById("editFormModal").style.display = "none";
}
function showOpenButton(){
    document.getElementById("openButton").style.display = "flex";
}
function hideOpenButton(){
    document.getElementById("openButton").style.display = "none";
}


function buildInventoryTable(response) {
    var json =  response;

    document.getElementById("loading").style.display = "none";
    document.getElementById("inventoryTable").style.display = "flex";

    cntr = 0;
    globTable = new Tabulator("#inventoryTablediv", {
        rowClick:function(e, row){
            var data = row.getData();
            $("#editFormHeaderItemName").text("Item: " + data.name);
            $("#editFormHeaderItemStatus").text(function(){

            });
            $("#editFormHeaderItemInDate").text("In Date: " + data.inDate);
            $("#editFormHeaderItemExpireDate").text("Expire Date: " + data.expireDate);
            $("#editFormHeaderItemShelfLife").text("Shelf Life: " + data.shelfLife + " day(s)");


            if(data.opened == false){
                showOpenButton();
            }
            else{
                hideOpenButton();
            }
            editFormId = data.id;
            editFormName = data.name;
            editFormExpireDate = data.expireDate;
            showEditForm();
        },
        rowFormatter:function(row){
            var data = row.getData();
            if(isExpired(data.expireDate)){
                row.getElement().style.backgroundColor = "#FF4136";
                cntr++;
            }
        },
        data:json,
        layout:"fitColumns", //fit columns to width of table (optional)
        columns:[ //Define Table Columns
            {title:"Id", field:"id", width: 20},
            {title:"Name", field:"name", width:150},
            {title:"In-Date", field:"inDate", align:"center", sorter:"date", sorterParams:{format:"MM/DD/YYYY"}, formatter:"datetime", formatterParams:{outputFormat:"MM/DD/YYYY"}},
            {title:"Expire-Date", field:"expireDate", align:"center", sorter:"date", sorterParams:{format:"DD/MM/YY"}},
            {title:"Shelf Life (days)", field:"shelfLife",  align:"center", sorter:"number"},
            {title:"In Fridge", field:"inFridge",  align:"center", sorter:"boolean"},
            {title:"Opened", field:"opened",  align:"center", sorter:"boolean"},
        ],

    });
    setExpireWarning();

}

function isExpired(expireDate){
    var expires = new Date(expireDate);
    var current = new Date();
    if(expires.getTime() < current.getTime()) return true;
    else return false;


}

function setExpireWarning(){
    if(cntr == 1){
        document.getElementById("expireWarning").innerHTML = "You have " + "<w2>"+cntr +"</w2>"+ " expired item in your fridge";
    }
    else if (cntr > 1){
        document.getElementById("expireWarning").innerHTML = "You have " + "<w2>"+cntr +"</w2>"+ " expired items in your fridge";
    }
    else{
        document.getElementById("expireWarning").innerHTML = "You have " + "<w3>"+cntr +"</w3>"+ " expired items in your fridge";
    }
}

function onInventoryClick() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("loading").style.display = "flex";
    var d3 = document.getElementById("inventoryTable");
    $.ajax({
        url: '/GETFridgeInventory',
        type: 'GET',
        success: buildInventoryTable
    });



}



window.addEventListener("click", function(event){
    if (event.target == document.getElementById("editFormModal")){
        document.getElementById("editFormModal").style.display = "none";
    }
    else if(event.target == document.getElementById("addFormModal")){
        document.getElementById("addFormModal").style.display = "none";
    }
});

function resetAddFormFields(){
    $(':input','#addFormModalContent')
        .not(':button, :submit, :reset, :hidden, #addFormShelfLifeHelper')
        .val('')
}

function addItemToInventory() {
    if (document.getElementById("addFormName").value != "" && (document.getElementById("addFormExpireDate").value != "" ||
            document.getElementById("addFormShelfLife").value != "")) {

        var postObject = {
            name: document.getElementById("addFormName").value,
            expireDate: document.getElementById("addFormExpireDate").value,
            shelfLife: document.getElementById("addFormShelfLife").value,
            shelfLifeHelper: document.getElementById("addFormShelfLifeHelper").value,
            opened: $("input[type='radio'][name='opened']:checked").val(),
            inFridge: $("input[type='radio'][name='inFridge']:checked").val()


        };
        $.ajax({
            url: '/AddItemToFridge',
            type: 'POST',
            data: postObject,
            success: function (response) {
                closeAddItemForm();
                resetAddFormFields();
                addItemToTable(response);
            },
            error: function(xhr, status, error) {
                console.log("resp: " +xhr.responseText);
                console.log("status: " + status);
                console.log("error: "+error);
            }
        });
    }
    else{
        showFormError();
    }
}

function addItemToTable(postObject){
    if(postObject.expireDate)
    globTable.addRow(postObject);
}

function showFormError(){
    if(document.getElementById("addFormName").value == ""){
        //show name required
        document.getElementById("addFormName").style.backgroundColor = "#F2DEDE";
        document.getElementById("NameErrorMessage").style.display = "flex";
    }
    else{
        document.getElementById("addFormName").style.backgroundColor = "white";
        document.getElementById("NameErrorMessage").style.display = "none"
    }
    if(!(document.getElementById("addFormExpireDate").value != "" || document.getElementById("addFormShelfLife").value != "")){
        $("#ItemErrorMessage").style.display = "flex";

    }
}







function returnButton(){
    if(document.getElementById("inventoryTable").style.display == "flex"){
        document.getElementById("inventoryTable").style.display = "none";
        document.getElementById("buttons").style.display = "flex";
    }
    else if(document.getElementById("buttons").style.display != "none"){
        document.location.href = "index.html";

    }

}

function openAddItemForm(){
    document.getElementById("addFormModal").style.display = "flex";

}
function closeAddItemForm(){
    document.getElementById("addFormModal").style.display = "none";
}

function openItemConfirmation(){
    swal({
        title: "Are you sure?",
        text: "Will open item and start it's shelf life",
        icon: "warning",
        buttons: true,
        dangerMode: false,
    })
        .then((willOpen) => {
        if( willOpen){
            openItem();
            swal("", {
                text: editFormName + " opened!",
                icon: "success",
            });
        }
    })
}

function openItem(){
    console.log("openItem called");
    var json = {"id":editFormId};

    $.ajax({
        url: '/OpenItem',
        type: 'POST',
        data: json,
        success: function(response){
            console.log("respppper");
            console.log(response);
            var item = [response];
            globTable.updateData(item);
            hideOpenButton();
        },
        error: function(xhr, status, error){
            console.log(xhr);
            console.log(status);
            console.log(error);
        }
    });

}


function removeItemConfirmation(){

    swal({
        title: "Are you sure?",
        text: "Will remove "+ editFormName+ " from Inventory",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
        if (willDelete) {
            removeItem();
            hideEditForm();
            swal("", {
                text: editFormName + " removed!",
                icon: "success",
            });
        } 
});

    console.log("well did it work?");
}
function removeItem(){
    var json = {"id":editFormId};
    $.ajax({
        url: '/RemoveItem',
        type: 'POST',
        data: json,
        success: function() {


            cntr = 0;
            globTable.deleteRow(editFormId);
            setExpireWarning();

        },
        error: function(xhr, status, error) {
           console.log("resp: " +xhr.responseText);
           console.log("status: " + status);
           console.log("error: "+error);
        }

    });
}



