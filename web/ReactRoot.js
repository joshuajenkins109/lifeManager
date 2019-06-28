


/*const Button = require("./Button.js")*/

class ReactRoot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            appPage: null,
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    handlePageChange(page){
        this.setState({appPage: page});
    }

    render(){
        let page;
        if(this.state.appPage === null){
            page = <Home handlePageChange={this.handlePageChange}/>;
        }
        else if( this.state.appPage == "The Fridge"){
            page = <h1>HELLLLOOOOOOOOOOO</h1>;

        }
        else {
            page = <h1> well.. </h1>;

        }

        return (
            <React.Fragment>
                {page}
            </React.Fragment>
        )

    }
}



const domContainer = document.querySelector('#ReactRoot');
ReactDOM.render(React.createElement(ReactRoot), domContainer);
