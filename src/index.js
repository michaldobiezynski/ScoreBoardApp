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
            totalPlayers={11} />

            {/* Players list */}
        <Player
        name="Michal"
        score={50}/>
            <Player
                name="Wika"
                score={90}/>
            <Player
                name="Steve"
                score={20}/>
            <Player
                name="Marco"
                score={30}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

