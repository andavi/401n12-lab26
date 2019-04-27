import React from 'react'; // const React = require('react');
import Header from './Header';
import sunTzu from 'sun-tzu-quotes';
// import { cowsay } from 'cowsay';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quote: 'Random Quote'
		};
		console.log(props);
	}

	handleNewQuote = () => {
		const newQuote = props.sunTzu();
		this.setState(previousState => {
			return previousState.quote = newQuote;
		});
		console.log(newQuote);
	};


	render() {
		return(
			<main>
				<Header/>
				<p> I'm going to give you a piece of wisdom from one of the great masters of warfare. Please use resposibly. </p>
				<p> The knowledge-bomb is: {this.state.quote} </p>
				<button onClick={this.handleNewQuote}> Get more wisdom of war </button>
			</main>
		);
	};
}
