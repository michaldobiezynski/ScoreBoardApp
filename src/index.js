import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


serviceWorker.unregister();

const players = [
    {
      name: "Michal",
      score: 50
    },
    {
        name: "Marco",
        score: 70
    },
    {
        name: "Wika",
        score: 30
    },
    {
        name: "Frodo",
        score: 95
    }
];


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

const App = () => {
    return (
        <div className="scoreboard">
        <Header
            title="My Scoreboard"
            totalPlayers={3} />

            {/* Players list */}
            <Player
                name="Michal"
                score={50}/>
            <Player
                name="Steven"
                score={100}/>
            <Player
                name="Keith"
                score={70}/>
        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);

