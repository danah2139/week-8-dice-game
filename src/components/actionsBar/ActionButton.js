import { Component } from 'react';

class ActionButton extends Component {
	render() {
		return (
			<div>
				<button className="btn" onClick={this.props.action}>
					<div className="btn-icon">{this.props.children}</div>
					{this.props.btnName}
				</button>
			</div>
		);
	}
}

export default ActionButton;
