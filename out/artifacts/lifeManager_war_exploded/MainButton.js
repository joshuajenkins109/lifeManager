
'use strict'; /* why */

const e = React.createElement;

class MainButton extends React.Component {


    render() {

        return (
            <React.Fragment>
                <a href="Fridge.html">
                    <button class="BigButton">
                        The Fridge
                    </button>
                </a>
                <button class="BigButton">
                    BillysButton
                </button>
                <button class="BigButton">
                    ThirdButton
                </button>
            </React.Fragment>


        );
    }
}



const domContainer = document.querySelector('#MainButtonContainer');
ReactDOM.render(e(MainButton), domContainer);
