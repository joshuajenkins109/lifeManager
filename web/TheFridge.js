

class TheFridge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feature: null,
            isHome: true,

        };
    }

    render(){
        if(this.state.feature === null){
            return (
                <React.Fragment>
                    <FridgeHeader />
                    <FridgeHome />
                </React.Fragment>
            )
        }
        else if(this.state.feature === "Fridge Inventory"){
            return (
                <React.Fragment>
                    <FridgeHeader />
                    /*<FridgeInventory/>*/ /*TODO*/
                </React.Fragment>
            )
        }
        /*TODO: else shopping list/ect. */
    }
}