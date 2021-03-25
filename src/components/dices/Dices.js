import React from 'react';
import Dice from '../dice/Dice';

const Dices = ({ dices }) => {
	return (
		<div className="dices">
			<Dice number={dices[0]} />
			<Dice number={dices[1]} />
		</div>
	);
};

export default Dices;
