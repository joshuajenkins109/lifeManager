
'use strict'; /* why */

const e = React.createElement;

class MainButton extends React.Component {


    render() {

        return (
            <React.Fragment>
                <a href="Fridge.html">
                    <button className="BigButton">
                        The Fridge
                    </button>
                </a>
                <button className="BigButton">
                    BillysButton
                </button>
                <button className="BigButton">
                    ThirdButton
                </button>
            </React.Fragment>


        );
    }
}



const domContainer = document.querySelector('#MainButtonContainer');
ReactDOM.render(e(MainButton), domContainer);
