import React from 'react';
import CurrentScore from './CurrentScore';
import GlobalScore from './GlobalScore';

import './player.css';

const Player = ({ score, dices, playerTurn, hasWon, playerName }) => {
	if (hasWon === 'in-game') {
		return (
			<div className={`player ${playerTurn ? 'my-turn' : ''}`}>
				<div style={{ textAlign: 'center' }}>
					<span className="title">{playerName}</span>
					<GlobalScore score={score} />
				</div>
				<CurrentScore dices={dices} playerTurn={playerTurn} />
			</div>
		);
	} else if (hasWon === 'won') {
		return <div className="player win-loss">{'LOSS :('}</div>;
	} else {
		return <div className="player win-loss">{'WIN :)'}</div>;
	}
};

export default Player;
