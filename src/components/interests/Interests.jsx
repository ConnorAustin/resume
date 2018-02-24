import React from 'react';
import Section from '../section/Section.jsx';
import './Interests.css';

export default class Interests extends React.Component {
	render() {
		return (
			<div>
				<Section text="Interests"/>
				<div class="interests-container">
					Game Design, Guitar, Music, Programming, Board Games, Video Games, Art, Competition Programming
				</div>
			</div>
		);
	}
}
