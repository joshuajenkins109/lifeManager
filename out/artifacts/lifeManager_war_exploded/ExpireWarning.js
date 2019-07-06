

class ExpireWarning extends React.Component {

    createExpireWarning(){
        if(this.props.calculateExpiredItems == 1){
            return (
                <span>You have <span id="expiredItemsCount">1</span>expired item</span>
            )
        }
        else if(this.props.calculateExpiredItems > 1){
            return (
                <span>You have <span id="expiredItemsCount">{this.props.calculateExpiredItems}</span>expired items </span>
            )
        }
        else{
            return (
                <span>You have <span id="noExpiredItemsCount">0</span>expired items</span>
            )
        }
    }
    render() {
        return (
            <div id="expireWarning">
                {this.createExpireWarning()}
            </div>
        )
    }

}