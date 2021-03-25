import React from 'react';
import CurrentScore from '../currentScore/CurrentScore';
import GlobalScore from '../globalScore/GlobalScore';

import './player.css';

const Player = ({
	globalScore,
	dices,
	playerTurn,
	hasWon,
	playerName,
	currentScore,
}) => {
	if (hasWon === 'in-game') {
		//		console.log(globalScore, currentScore);
		return (
			<div className={`player ${playerTurn ? 'my-turn' : ''}`}>
				<div style={{ textAlign: 'center' }}>
					<span className="title">{playerName}</span>
					<GlobalScore score={globalScore} />
				</div>
				<CurrentScore current={currentScore} playerTurn={playerTurn} />
			</div>
		);
	} else if (hasWon === 'won') {
		return <div className="player win-loss">{'LOSS :('}</div>;
	} else {
		return <div className="player win-loss">{'WIN :)'}</div>;
	}
};

export default Player;
