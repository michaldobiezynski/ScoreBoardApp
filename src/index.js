import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


serviceWorker.unregister();


function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}


const Player = (props) => {
    return (
      <div className="player">
          <span className="player-name">
              {props.name}
          </span>

          <Counter/>

      </div>
    );
}

class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            score: 0
        };
    }

    incrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            }
        })
    }

    decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score - 1
            }
        })
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"
                        onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment"
                        onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}



class App extends React.Component {

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
                            key={player.id.toString()}
                        />
                )}


            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

