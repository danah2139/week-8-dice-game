import React from 'react';
import CurrentScore from './CurrentScore/CurrentScore';
import GlobalScore from './GlocalScore/GlocalScore';

import './Player.css';

const Player = ({ globalScore, CurrentScore, dices }) => {
	return (
		<div className="player">
			<GlobalScore score={globalScore} />
			<CurrentScore dices={dices} />
		</div>
	);
};

export default Player;
