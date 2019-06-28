
const e = React.createElement;

class FridgeInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: null,
            selectedId: null,
            selectedName: null,
            selectedInDate: null,
            selectedExpireDate: null,
            selectedShelfLife: null,
            selectedInFridge: null,
            selectedOpened: null,
        }
    }

    loadData(){
        $.ajax({
            url: '/GETFridgeInventory',
            type: 'GET',
            success: function(response) {
                this.state.loaded = true;
                this.state.data = response;
            }
        })
    }
    buildInventoryTable(){
        inventoryTable = new Tabulator("#inventoryTable", {
            rowClick: function(e, row){

            }
        })
    }

    render() {
        return(
            <React.Fragment>
                <button
                    id="addButton"
                    onClick={openAddItemForm()}
                    value="Add"
                ></button>
                <InventoryTable data=this.data>

                </InventoryTable>

            </React.Fragment>

        )


    }
}

class AddItemForm extends React.Component {

    render() {
        return(

        )


    }
}

class EditItemForm extends React.Component {

    render() {
        return(

        )


    }
}

class EditForm extends React.Component {

    render() {
        return(

        )


    }
}

class ExpireWarning extends React.Component {

    render() {
        return(

        )


    }
}

class InventoryTable extends React.Component {

    render() {
        return(


        )


    }
}
