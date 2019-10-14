import React, {Component} from "react";
import Header from "./Header";
import Player from "./Player";
import '../App.css';
import * as serviceWorker from './serviceWorker.js';

serviceWorker.unregister();

class App extends Component {

    state = {
        players: [
            {
                name:"Michal",
                score: 0,
                id: 1
            },
            {
                name:"Wika",
                score: 0,
                id: 2
            },
            {
                name:"Harry",
                score: 0,
                id: 3
            },
            {
                name:"Frodo",
                score: 0,
                id: 4
            }
        ]
    };

    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
            return {
                score: prevState.players[index].score += delta
            }
        })

    };

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="My Scoreboard"
                    totalPlayers={this.state.players.length} />

                {/* Players list */}
                {this.state.players.map(
                    (player, index) =>
                        <Player
                            name={player.name}
                            score={player.score}
                            id={player.id}
                            key={player.id.toString()}
                            index={index}
                            changeScore={this.handleScoreChange}
                            removePlayer={this.handleRemovePlayer}
                        />
                )}


            </div>
        )
    }
}

export default App;

