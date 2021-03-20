import { Component } from 'react';
import Player from './Player/Player';
import ActionsBar from './actionsBar/ActionsBar';
class Board extends Component {
	state = {
		finalScore: 100,
		dices: [null, null],
		playerTurn: 1,
		players: [
			{ currentScore: 0, globalScore: 0 },
			{ currentScore: 0, globalScore: 0 },
		],
	};
	render() {
		return (
			<div className="board">
				<Player
					globalScore={this.state.players[0].globalScore}
					currentScore={this.state.players[0].currentScore}
					dices={this.state.dices}
				/>
				<br />
				<ActionsBar
					dices={this.state.dices}
					finalScore={this.state.finalScore}
				/>
				<br />
				<Player
					globalScore={this.state.players[1].globalScore}
					currentScore={this.state.players[1].currentScore}
					dices={this.state.dices}
				/>
			</div>
		);
	}
}
export default Board;
