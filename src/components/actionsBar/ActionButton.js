import { Component } from 'react';

class ActionButton extends Component {
	render() {
		return (
			<div>
				<button className="btn" onClick={this.props.onButtonClick}>
					<div className="btn-icon">{this.props.btnName}</div>
				</button>
			</div>
		);
	}
}

export default ActionButton;
