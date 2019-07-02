

class TheFridge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feature: null,
            isHome: true,

        };
    }

    handleFeatureChange(evt){
        if(evt.target.innerText != "return") {
            this.setState({
                feature: evt.target.innerText,
                isHome: this.state.feature == null
            });
        }
        else{
            this.setState({
                feature: null,
                isHome: true,
            });
        }
    }

    render(){
        if(this.state.feature === null){
            return (
                <React.Fragment>
                    <FridgeHeader isHome={this.state.isHome} handlePageChange={this.props.handlePageChange}/>
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