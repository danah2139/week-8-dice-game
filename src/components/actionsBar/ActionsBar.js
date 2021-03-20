import React, { Component } from 'react';
import Dices from '../dices/Dices';
import ActionButton from './ActionButton';
import FinalScore from './FinalScore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus,
	faSync,
	faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
class ActionsBar extends Component {
	state = {};
	handleInputChange = () => {};
	render() {
		return (
			<div className="container">
				<ActionButton btnName="NEW GAME" action={this.props.onNewGame}>
					<FontAwesomeIcon icon={faPlus} />
				</ActionButton>

				<Dices dices={this.props.dices} />
				<ActionButton btnName="ROLL DICE" action={this.props.onRoll}>
					<FontAwesomeIcon icon={faSync} />
				</ActionButton>

				<ActionButton btnName="HOLD" action={this.props.onHold}>
					<FontAwesomeIcon icon={faAngleDoubleDown} />
				</ActionButton>
				<FinalScore
					value={this.props.finalScore}
					handleInputChange={this.handleInputChange}
				/>
			</div>
		);
	}
}

export default ActionsBar;
