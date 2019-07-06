
/* TODO: Check if React.Fragment needed */
class LoadingData extends React.Component {
    render(){
        return (
            <React.Fragment>
            <div id="loading" classname="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </React.Fragment>
        )
    }
}