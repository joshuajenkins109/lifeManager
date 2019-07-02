

class FridgeHeader extends React.Component {
    render(){
        return (
            <div id="FridgeHeader">
                <Button
                    className="return"
                    name="return"
                    handleClick={this.props.isHome ? this.props.handlePageChange : this.props.handleFeatureChange}
                />
                <h1 className="FridgeHeaderContent">The Fridge</h1>
            </div>
        )
    }
}