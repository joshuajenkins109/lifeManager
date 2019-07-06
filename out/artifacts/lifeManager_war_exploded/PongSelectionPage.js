

class PongSelectionPage extends React.Component {

    /*
        TODO: Improve message selection
        TODO: class PongButton, Disabled, Selected
     */

    render(){
        const nullMessage = "Select a game mode to continue";
        const SinglePlayerMessage = "Single-Player selected. Press Start to begin.";
        const TwoPlayerMessage = "Two-Player selected. Press Start to begin";

        if(this.props.gameMode === null){
            return (
                <div id="PongSelectionContainer">
                    <Button name="Single-Player" handleClick={ this.props.changeGameMode } className="PongButton" />
                    <span id="PongMessage">  { this.nullMessage }  </span>
                    <Button name="Two-Player" handleClick={ this.props.changeGameMode } className="PongButton" />
                    <Button name="Start Game" handleClick={ this.props.startGame } className="PongButton Disabled" />
                </div>
            )
        }
        else if(this.props.gameMode === "Single-Player"){
            return (
                <div id="PongSelectionContainer">
                    <Button name="Single-Player" handleClick={ this.props.changeGameMode } className="PongButton Selected" />
                    <span id="PongMessage">  { this.SinglePlayerMessage }  </span>
                    <Button name="Two-Player" handleClick={ this.props.changeGameMode } className="PongButton" />
                    <Button name="Start Game" handleClick={ this.props.startGame } className="PongButton" />
                </div>
            )
        }
        else if(this.props.gameMode === "Two-Player"){
            return (
                <div id="PongSelectionContainer">
                    <Button name="Single-Player" handleClick={ this.props.changeGameMode } className="PongButton" />
                    <span id="PongMessage">  { this.TwoPlayerMessage }  </span>
                    <Button name="Two-Player" handleClick={ this.props.changeGameMode } className="PongButton Selected" />
                    <Button name="Start Game" handleClick={ this.props.startGame } className="PongButton" />
                </div>
            )
        }
        else {
            return (
                <h1> well something aint right</h1>
            )
        }
    }
}