import { Component } from 'react';
import './board.css';
import Player from '../player/Player';
import ActionsBar from '../actionsBar/ActionsBar';
const initialState = {
	finalScore: 100,
	dices: [1, 1],
	playerTurn: 0,
	players: [
		{ currentScore: 0, globalScore: 0 },
		{ currentScore: 0, globalScore: 0 },
	],
};
class Board extends Component {
	state = { ...initialState };
	onRollDice() {
		const newDices = [getRndInteger(1, 7), getRndInteger(1, 7)];

		this.setState({
			dices: newDices,
		});

		if (newDices[0] === newDices[1]) {
			const onSameValue = this.onSameValue.bind(this);
			setTimeout(onSameValue, 600);
		}

		function getRndInteger(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}
	}

	onHold = () => {
		const { dices, players, playerTurn } = this.state;
		this.setState({
			players: players.map(
				(player, index) =>
					playerTurn === index && {
						globalScore:
							player.globalScore + player.currentlScore + dices[0] + dices[1],
						currentScore: 0,
					}
			),
			playerTurn: playerTurn === 0 ? 1 : 0,
			dices: [1, 1],
		});
	};

	onNewGame() {
		this.setState({ ...initialState });
	}
	onFinalScoreChange(event) {
		this.setState({ finalScore: event.target.value });
	}

	onSameValue(newDices) {
		const { players, playerTurn, dices } = this.state;
		this.setState({
			players: players.map(
				(player, index) =>
					playerTurn === index && { currentScore: 0, ...player }
			),
			playerTurn: playerTurn === 0 ? 1 : 0,
			dices: [1, 1],
		});
	}

	render() {
		const { players, finalScore } = this.state;
		const gameIsEnded =
			Math.max(players[0].globalScore, players[1].globalScore) >= finalScore;
		return (
			<div className="board">
				<Player
					playerTurn={this.state.playerTurn}
					globalScore={this.state.players[0].globalScore}
					currentScore={this.state.players[0].currentScore}
					dices={this.state.dices}
					hasWon={
						gameIsEnded
							? players[0].globalScore > players[1].globalScore
								? 'won'
								: 'loss'
							: 'in-game'
					}
				/>
				<br />
				<ActionsBar
					onRoll={() => this.onRollDice()}
					onHold={() => this.onHold()}
					onNewGame={() => this.onNewGame()}
					dices={this.state.dices}
					finalScore={this.state.finalScore}
					onFinalScoreChange={this.onFinalScoreChange}
				/>
				<br />
				<Player
					playerTurn={!this.state.playerTurn}
					globalScore={this.state.players[1].globalScore}
					currentScore={this.state.players[1].currentScore}
					dices={this.state.dices}
					hasWon={
						gameIsEnded
							? players[1].globalScore > players[0].globalScore
								? 'won'
								: 'loss'
							: 'in-game'
					}
				/>
			</div>
		);
	}
}
export default Board;
