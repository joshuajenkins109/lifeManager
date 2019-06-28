

class Home extends React.Component {

    render(){



        return(
            <React.Fragment>
                <Button handlePageChange={this.props.handlePageChange} name="The Fridge" />
                <button>BillysButton</button>
                <button>Third</button>
            </React.Fragment>
        )
    }
}