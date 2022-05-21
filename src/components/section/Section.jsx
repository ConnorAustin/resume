import React from 'react';
import './Section.css';

export default class Section extends React.Component {
	render() {
		return (
		<span className="section-container"><h1>{this.props.text}</h1></span>
		);
	}
}
