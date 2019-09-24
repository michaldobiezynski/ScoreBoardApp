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
        score:50
    },
    {
        name:"Wika",
        score:90
    },
    {
        name:"Harry",
        score:70
    },
    {
        name:"Frodo",
        score:66
    }
];

const Player = (props) => {
    return (
      <div className="player">
          <span className="player-name">
              {props.name}
          </span>

          <Counter score={props.score}/>

      </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
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
                score={player.score} />
            )}


        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);

