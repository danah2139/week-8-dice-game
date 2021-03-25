import { Component } from 'react';
import './board.css';
import Player from '../Player/Player';
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
		const { playerTurn, players } = this.state;

		this.setState({
			dices: newDices,
			players: players.map((player, index) =>
				playerTurn === parseInt(index)
					? {
							currentScore: player.currentScore + newDices[0] + newDices[1],
							globalScore: player.globalScore,
					  }
					: player
			),
		});

		if (newDices[0] === newDices[1]) {
			this.onSameValue();
		}

		function getRndInteger(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}
	}

	onHold = () => {
		this.setState((prevState) => ({
			playerTurn: prevState.playerTurn === 0 ? 1 : 0,
			dices: [1, 1],
			players: prevState.players.map((player, index) => {
				return prevState.playerTurn === index
					? {
							globalScore: player.currentScore + player.globalScore,
							currentScore: 0,
					  }
					: player;
			}),
		}));
	};

	onNewGame() {
		this.setState({ ...initialState });
	}
	onFinalScoreChange(event) {
		this.setState({ finalScore: event.target.value });
	}

	onSameValue = (newDices) => {
		const { players, playerTurn, dices } = this.state;
		this.setState({
			players: players.map((player, index) =>
				playerTurn === parseInt(index)
					? { currentScore: 0, globalScore: player.globalScore }
					: player
			),
			playerTurn: playerTurn === 0 ? 1 : 0,
			dices: [1, 1],
		});
	};

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
					playerName="PLAYER 1"
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
					playerName="PLAYER 2"
				/>
			</div>
		);
	}
}
export default Board;
