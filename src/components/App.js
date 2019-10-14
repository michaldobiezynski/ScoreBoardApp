import React, {Component} from "react";
import Header from "./Header";
import Player from "./Player";
import '../App.css';
import * as serviceWorker from './serviceWorker.js';
import AddPlayerFrom from './AddPlayerForm';

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

    //player id counter
    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
            return {
                score: prevState.players[index].score += delta
            }
        })

    };

    handleAddPlayer = (name) => {
        this.setState( prevState => {
            return {
            players: [
                ...prevState.players,
                {
                    name: name,
                    score: 0,
                    id: this.prevPlayerId += 1,
                }
            ]
        }
        });
    }

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
                    players ={this.state.players} />

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

            <AddPlayerFrom addPlayer={this.handleAddPlayer}/>
            </div>
        )
    }
}

export default App;

