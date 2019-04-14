var editFormId;




function showEditForm(){
    document.getElementById("editForm").style.display = "block";
    document.getElementById("addButton").style.display = "none";
    document.getElementById("expireWarning").style.display = "none";
}
function hideEditForm(){
    document.getElementById("editForm").style.display = "none";
    document.getElementById("addButton").style.display = "block";
    document.getElementById("expireWarning").style.display = "block";
}
function showOpenButton(){
    document.getElementById("openButton").style.display = "block";
}
function hideOpenButton(){
    document.getElementById("openButton").style.display = "none";
}


function onResponse(response) {
    var json =  response;
    console.log(json);

    var d2 = document.getElementById("loading");
    var d3 = document.getElementById("inventoryTable");

    d2.style.display = "none";
    d3.style.display = "block";
    console.log(json , "here");
    console.trace();
    var cntr = 0;
    var table = new Tabulator("#inventoryTablediv", {
        rowClick:function(e, row){
            console.log("row Click!");
            var data = row.getData();
            document.getElementById("editFormHeader").innerHTML = "Item: " + data.name;
            if(data.opened == false){
                showOpenButton();
            }
            else{
                hideOpenButton();
            }
            editFormId = data.id;
            showEditForm();
        },
        rowFormatter:function(row){
            var data = row.getData();
            if(data.shelfLife > 200){
                row.getElement().style.backgroundColor = "#ff0000";
                cntr++;
            }
        },
        data:json,
        layout:"fitColumns", //fit columns to width of table (optional)
        columns:[ //Define Table Columns
            {title:"Name", field:"name", width:150},
            {title:"In-Date", field:"inDate", align:"center", sorter:"date", sorterParams:{outputFormat:"MM/DD/YYYY"}},
            {title:"Expire-Date", field:"expireDate", align:"center", sorter:"date", sorterParams:{outputFormat:"MM/DD/YYYY"}},
            {title:"Shelf Life", field:"shelfLife",  align:"center", sorter:"number"},
            {title:"In Fridge", field:"inFridge",  align:"center", sorter:"boolean"},
            {title:"Opened", field:"opened",  align:"center", sorter:"boolean"},
        ],

    });
    if(cntr == 1){
        document.getElementById("expireWarning").innerHTML = "You have " + "<w2>"+cntr +"</w2>"+ " expired item in your fridge";
    }
    else if(cntr > 1){
        document.getElementById("expireWarning").innerHTML = "You have " + "<w2>"+cntr +"</w2>"+ " expired items in your fridge";
    }

}

function onInventoryClick() {
    var d1 = document.getElementById("buttons");
    d1.style.display = "none";
    var d2 = document.getElementById("loading");
    d2.style.display = "block";
    var d3 = document.getElementById("inventoryTable");
    console.log(d2);
    $.ajax({
        url: '/world',
        type: 'GET',
        success: onResponse
    });



}

$('#addFormElement').submit(function(e){
    console.log("stuff");
    e.preventDefault();

    $.ajax({
        url:'/world',
        type:'POST',
        success:function(){
        }
    });
});






function returnButton(){
    if(document.getElementById("inventoryTable").style.display == "block"){
        document.getElementById("inventoryTable").style.display = "none";
        document.getElementById("buttons").style.display = "flex";
        document.getElementById("buttons").class
    }
    else if(document.getElementById("buttons").style.display != "none"){
        document.location.href = "index.html";

    }

}



var resp = "";

function getRello(){
    const xmlhttp = new XMLHttpRequest();
    var url="world";

    xmlhttp.open('GET', url, true);
    xmlhttp.send(null);
    xmlhttp.onreadystatechange = function () {

        console.log(xmlhttp.responseText);


    }
}

function addItem(){
    var v1 = document.getElementById("addButton");
    v1.style.display = "none";
    var v2 = document.getElementById("addForm");
    v2.style.display = "block";

}

function openItem(){
    var json = {"id":editFormId};

    $.ajax({
        url: '/itemUpdate',
        type: 'POST',
        data: json,
        dataType: 'json',
        success: function(){

        }
    });


}

