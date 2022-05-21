import React from 'react';
import Section from '../section/Section.jsx';
import './Interests.css';

export default class Interests extends React.Component {
	render() {
		return (
			<div>
				<Section text="Interests"/>
				<div className="interests-container">
					Programming, Game design, Music, Board games, Video games, Beer brewing, Coffee, Latte art, Exercising, Vinyl records
				</div>
			</div>
		);
	}
}
