


class Button extends React.Component {


    render() {
        const {  name, handleClick, className } = this.props;
        // const name = this.props.name
        // const handlePageChange = this.props.handlePageChange
        return (

            <button onClick={ handleClick } className={ className } >
                { name }
            </button>

        );
    }
}
