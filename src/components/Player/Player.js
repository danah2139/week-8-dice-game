import React from 'react';
import CurrentScore from './CurrentScore';
import GlobalScore from './GlobalScore';
import './player.css';

const Player = ({ globalScore, CurrentScore, dices, playerTurn, hasWon }) => {
	if (hasWon === 'in-game') {
		return (
			<div className={`player ${playerTurn ? 'my-turn' : ''}`}>
				<GlobalScore score={globalScore} />
				<CurrentScore dices={dices} playerTurn={playerTurn} />
			</div>
		);
	} else if (hasWon === 'won') {
		return <div className="player">{'won :)'}</div>;
	} else {
		return <div className="player">{'loss :('}</div>;
	}
};

export default Player;
