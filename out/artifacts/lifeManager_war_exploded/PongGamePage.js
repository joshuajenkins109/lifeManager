

class PongGamePage extends React.Component {

    /*
        TODO: game mode to binary?
        TODO: PongBall, PongScoreBoard, PongPaddle
        TODO: id: PongGameContainer
     */
    render() {
        if(this.props.gameMode === "Single-Player"){
            return (
                <div id="PongGameContainer">
                    <PongPaddle />
                    <PongBall />
                    <PongPaddle />
                    <PongScoreBoard />
                </div>

            )
        }
        else if(this.props.gameMode === "Two-Player"){

        }
    }
}