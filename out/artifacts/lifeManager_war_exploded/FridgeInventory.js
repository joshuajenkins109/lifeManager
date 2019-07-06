

class FridgeInventory extends React.Component {



    render() {
        return (
                    /* while not loaded: show loading */
                    <div id="inventoryFeatureContainer">
                        <Button name="Add Item" className="addButton" handleClick={this.openAddItemFormModal()} />
                        <ExpireWarning calculateExpiredItems={this.props.calculateExpiredItems} />
                        <InventoryTable />
                    </div>
        )
    }
}