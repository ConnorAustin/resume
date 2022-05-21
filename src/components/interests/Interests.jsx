import React from 'react';
import Section from '../section/Section.jsx';
import './Interests.css';

export default class Interests extends React.Component {
	render() {
		return (
			<div>
				<Section text="Interests"/>
				<div class="interests-container">
					Programming, Game design, Music, Board games, Video games, Beer brewing, Coffee, Latte art, Working out, Vinyl records
				</div>
			</div>
		);
	}
}
