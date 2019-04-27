import React from 'react'; // const React = require('react');
import Header from './Header';
import sunTzu from 'sun-tzu-quotes';
import cowsay from 'cowsay-browser';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quote: 'Random Quote'
		};
		console.log(props);
	}

	handleNewQuote = () => {
		const newQuote = sunTzu();
		this.setState(previousState => {
			return previousState.quote = cowsay.say({
				text: newQuote,
				e: "Oo",
				T: 'U'
			});
		});
		console.log(newQuote);
	};


	render() {
		return(
			<main>
				<Header/>
				<p> I'm going to give you a piece of wisdom from one of the great masters of warfare. Please use resposibly. </p>
				<p>Sun Tzu says: </p>
				<pre> {this.state.quote} </pre>
				<button onClick={this.handleNewQuote}> Get more wisdom of war </button>
			</main>
		);
	};
}
