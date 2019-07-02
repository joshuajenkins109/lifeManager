

class Home extends React.Component {

    render(){



        return(
            <React.Fragment>
                <Button handleClick={this.props.handlePageChange} name="The Fridge" />
                <button>BillysButton</button>
                <button>Third</button>
            </React.Fragment>
        )
    }
}

/*
if(this.state.boolean){
    return (
        <Button>
    )
}
else {
    return <Button2>
}

this.state.condition ? <Button> : <Button2>

this.state.thing && <button>
 */