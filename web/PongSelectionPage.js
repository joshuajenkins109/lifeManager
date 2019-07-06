

class PongSelectionPage extends React.Component {


    const nullMessage = "Select a game mode to continue";
    const SinglePlayerMessage = "Single-Player selected. Press Start to begin."
    const TwoPlayerMessage = "Two-Player selected. Press Start to begin"
    render(){

        if(this.props.gameMode === null){
            return (
                <div id="PongSelectionContainer">
                    <Button name="Single-Player" handleClick={ this.props.changeGameMode } className="PongButton" />
                    <span id="PongMessage">  { this.nullMessage }  </span>
                    <Button name="Two-Player" handleClick={ this.props.changeGameMode } className="PongButton" />
                    <Button name="Start Game" handleClick={ this.props.startGame } className="PongButton disabled" />
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
                    <span id="PongMessage">  { this.SinglePlayerMessage }  </span>
                    <Button name="Two-Player" handleClick={ this.props.changeGameMode } className="PongButton Selected" />
                    <Button name="Start Game" handleClick={ this.props.startGame } className="PongButton" />
                </div>
            )
        }
    }
}