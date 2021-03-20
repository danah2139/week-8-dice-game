import React from 'react';

const Dice = ({ number }) => {
	return <img className="die" src={`./img/dice-${number}.png`} alt={number} />;
};

export default Dice;
