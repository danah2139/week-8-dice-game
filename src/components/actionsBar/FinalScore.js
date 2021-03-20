import React, { Component } from 'react';

class FinalScore extends Component {
	render() {
		return (
			<div>
				<input
					type="number"
					onChange={this.handleInputChange(this.props)}
					placeholder="FINAL SCORE"
				/>
			</div>
		);
	}
}

export default FinalScore;
