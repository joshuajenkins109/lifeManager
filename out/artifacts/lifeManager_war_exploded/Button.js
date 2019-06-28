


class Button extends React.Component {


    render() {
        const Value = this.props.name;
        return (

            <button onClick={() => {this.props.handlePageChange(Value)}} value={Value}>
                {Value}
            </button>

        );
    }
}