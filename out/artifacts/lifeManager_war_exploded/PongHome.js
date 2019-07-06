

class PongHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameActive: false,
            gameMode: null,


        }
        this.changeGameMode = this.changeGameMode.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    changeGameMode(evt){
        this.setState({gameMode: evt.target.innerText});
    }
    startGame(){
        this.setState({gameActive: true});
        console.log("Game started?");
    }

    render(){
        if(this.state.gameActive) {
            return (
                <PongGamePage gameMode={this.state.gameMode} />
            )

        }
        else {
            return (
                <PongSelectionPage
                    gameMode={this.state.gameMode}
                    changeGameMode={this.changeGameMode}
                    startGame={this.startGame}
                />
            )
        }

    }
}