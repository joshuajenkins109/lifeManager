

class FridgeInventory extends React.Component {
    render() {
        return (
                    /* while not loaded: show loading */
                    <div id="inventoryTable">
                        <Button name="Add Item" className="addButton" handleClick={this.openAddItemFormModal()} />
                        <ExpireWarning
                    </div>
        )
    }
}