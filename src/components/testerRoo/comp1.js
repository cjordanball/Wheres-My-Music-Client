import React, { Component, Fragment } from 'react';
import CompTwo from './comp2';
import TestContext from '../../context/testContext';

class CompOne extends Component {
	static contextType = TestContext;

	constructor(props) {
		super(props);
		this.state = {
			name: 'Jordan',
			age: 50
		};
	}

	componentDidMount() {
		console.log('test0: ', this.context);
	}

	updateAge = () => {
		console.log('update!');
		this.setState((prevState) => {
			return {
				age: prevState.age + 1
			};
		});
	};



	render() {
		const { age } = this.state;
		this.context = age;
		return (
			<Fragment>
				<h1>This is the top level</h1>
				{this.context}
				<CompTwo message="This is level two." />
				<button type="button" onClick={this.updateAge}>Update</button>
			</Fragment>
		);
	}
}

export default CompOne;
