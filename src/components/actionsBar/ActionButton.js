import { Component } from 'react';

class ActionButton extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.onButtonClick}>{this.props.btnName}</button>
			</div>
		);
	}
}

export default ActionButton;
