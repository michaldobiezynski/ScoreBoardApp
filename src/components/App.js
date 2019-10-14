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
                id: 1
            },
            {
                name:"Wika",
                id: 2
            },
            {
                name:"Harry",
                id: 3
            },
            {
                name:"Frodo",
                id: 4
            }
        ]
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
                    player =>
                        <Player
                            name={player.name}
                            id={player.id}
                            key={player.id.toString()}
                            removePlayer={this.handleRemovePlayer}
                        />
                )}


            </div>
        )
    }
}

export default App;

