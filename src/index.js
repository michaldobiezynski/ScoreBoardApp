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

const players = [
    {
        name:"Michal",
        score:50,
        id: 1
    },
    {
        name:"Wika",
        score:90,
        id: 2
    },
    {
        name:"Harry",
        score:70,
        id: 3
    },
    {
        name:"Frodo",
        score:66,
        id: 4
    }
];

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
        this.setState({
            score: this.state.score + 1
        });
    }

    decrementScore = () => {
        this.setState( {
            score: this.state.score - 1
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



const App = (props) => {
    return (
        <div className="scoreboard">
        <Header
            title="My Scoreboard"
            totalPlayers={props.initialPlayers.length} />

            {/* Players list */}
            {props.initialPlayers.map(
                player =>
                    <Player
                name={player.name}
                    key={player.id.toString()}
                    />
            )}


        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);

