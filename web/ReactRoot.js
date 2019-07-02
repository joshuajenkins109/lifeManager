


/*const Button = require("./Button.js")*/

class ReactRoot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            appPage: null
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(evt){
        console.log(evt.target.innerText);
        console.log('this', evt.target);
        if(evt.target.innerText != "return"){
            this.setState({appPage: evt.target.innerText});
        }
        else{
            this.setState({appPage: null})
        }

    }

    render(){
        let page;
        if(this.state.appPage === null){
            page = <Home handlePageChange={this.handlePageChange}/>;
        }
        else if( this.state.appPage == "The Fridge"){
            page = <TheFridge handlePageChange={this.handlePageChange}/>

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
