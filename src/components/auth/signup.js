import React, { Component, Fragment, createRef } from 'react';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.ref1 = createRef();
		this.ref2 = createRef();
	}

	componentDidMount() {
		console.log(this.ref2);
		this.ref2.current.placeholder = 'Howdy!';
		this.ref1.current.focus();
	}

	get dogBreed() {
		return {
			one: '12fdfderfsdfghj754',
			two: '12345678910',
			three: '123456789'
		};
	}

	changed() {
		console.log('CHANGED!!!');
	}

	render() {
		return (
			<Fragment>
				<h1>Sign Up Class</h1>
				<input
					ref={this.ref1}
					type="text"
					onChange={this.changed}
				/>
				<input
					ref={this.ref2}
					type="text"
					onChange={this.changed}
				/>
			</Fragment>
		);
	}
}

export default SignUp;
