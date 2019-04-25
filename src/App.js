import React from 'react'; // const React = require('react');
import Header from './Header';



export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.message = 'Kali is the cutest';
		this.state.counter = 0;
		this.state.secretMessage = 'Kali still has accidents';
	}

	handleCounterIncrement = () => {
		this.setState((previousState) => {
			return {
				counter: previousState.counter + 1,
			};
		});
	};

	handleCounterDecrement = () => {
		// Vinicio - setState is an async function
		this.setState((previousState) => {
			return {
				counter: previousState.counter - 1,
			};
		},() => {
			console.log('Diffing Complete');
		});
	};

	handleCounterChange = (event) => {
		const value = event.target.value;
		this.setState(() => {
			return {
				counter: value,
			};
		});
	};


	render() {
		const cats = ['Sir Gregor', 'The Hound', 'Khal Basil'];
		return(
			<main>
				<Header/>
				<p> I'm going to show you a random number {Math.random()}</p>
				<p> The message is: {this.state.message}</p>
				<p> The counter is: {this.state.counter}</p>
				<ul>
					{
						cats.map(cat => <li key={cat}>{cat}</li>)
					}
				</ul>
				<button onClick={this.handleCounterIncrement}> Increment Counter </button>
				<button onClick={this.handleCounterDecrement}> Decrement Counter </button>
				<input onChange={this.handleCounterChange} value={this.state.counter}/>
			</main>
		);
	};
}
