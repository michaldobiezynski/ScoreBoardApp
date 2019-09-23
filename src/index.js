import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


serviceWorker.unregister();


function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Player = () => {
    return (
      <div className="player">
          <span className="player-name">
              Michal
          </span>

          <Counter />

      </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
        <Header titile="Scoreboard" totalPlayers={1} />
            {/* Players list */}
        <Player />
        </div>
    )
}

ReactDOM.render(
    <App />,

    document.getElementById('root')
);

