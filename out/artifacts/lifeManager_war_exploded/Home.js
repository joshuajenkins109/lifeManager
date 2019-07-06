

class Home extends React.Component {

    render(){



        return (
            <React.Fragment>
                <Button handleClick={this.props.handlePageChange} name="The Fridge" />
                <button>BillysButton</button>
                <Button name="Pong" handleClick={this.props.handlePageChange} />
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