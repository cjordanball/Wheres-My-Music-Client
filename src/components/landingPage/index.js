import React, { Component } from 'react';


class LandingPage extends Component {
	state = {
		scoreOpen: true
	}

	render() {
		return  this.state.scoreOpen ? (
			<div>
				<h1>This is the landing Page</h1>
			</div>
		) : (
			<div>
				<h1>Not the landing Page</h1>
			</div>
		);
	}
}

export default LandingPage;
