

class TheFridge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feature: null,
            isHome: true,

        };
        this.calculateExpiredItems = this.calculateExpiredItems.bind(this);
    }

    handleFeatureChange(evt){
        if(evt.target.innerText !== "return") {
            this.setState({
                feature: evt.target.innerText,
                isHome: this.state.feature === null
            });
        }
        else{
            this.setState({
                feature: null,
                isHome: true,
                data: null,
            });
        }
    }
    calculateExpiredItems(){
        /* TODO: Parse Data to calculate */
    }

    render(){
        if(this.state.feature === null){
            return (
                <React.Fragment>
                    <FridgeHeader
                        isHome={this.state.isHome}
                        handlePageChange={this.props.handlePageChange}
                    />
                    <FridgeHome />
                </React.Fragment>
            )
        }
        else if(this.state.feature === "Fridge Inventory"){
            return (
                <React.Fragment>
                    <FridgeHeader />
                    {this.state.data === null ?
                        <LoadingData/> :
                        <FridgeInventory calculateExpiredItems={this.calculateExpiredItems}/>

                    }
                </React.Fragment>
            )
        }
        /*TODO: else shopping list/ect. */
    }
}