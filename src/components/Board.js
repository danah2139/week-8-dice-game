const { Component } = require('react');

class Board extends Component {
	state = {
		pointsToWin: 100,
		dices: [null, null],
		playerTurn: 1,
		players: [
			{ currentScore: 0, globalScore: 0 },
			{ currentScore: 0, globalScore: 0 },
		],
	};
	render() {
		return <div></div>;
	}
}
export default Board;
