

class PongHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameActive: false,
            gameMode: null,


        }
    }

    render(){
        if(this.state.gameMode === null) {
            return (
                <PongSelectionPage/>
            )
        }
        else if(this.state.gameMode === "Single-Player"){
            return (
                <PongGamePage />
            )
        }
        else if(this.state.gameMode === "Two-Player"){
            return (
                <PongGamePage />
            )
        }
    }
}