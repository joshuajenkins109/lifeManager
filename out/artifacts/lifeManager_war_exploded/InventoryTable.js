

class InventoryTable extends React.Component {
    buildTable(){
        inventoryTable = new Tabulator("#inventoryTable"), {
            rowClick:function(e,row){
                var data = row.getData();

            }
        }
    }
    render(){
        return (

        )
    }
}