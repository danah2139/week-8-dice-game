import React from 'react';

const CurrentScore = ({ dices, playerTurn }) => {
	return (
		<div className="current-box">
			CurrentScore: {playerTurn ? dices[0] + dices[1] : 0}
		</div>
	);
};

export default CurrentScore;
