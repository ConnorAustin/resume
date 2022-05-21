import React from 'react';
import Section from '../section/Section.jsx';
import './Education.css';

export default class Education extends React.Component {
	render() {
		return (
			<div>
				<Section text="Education"/>
				<div class="education-container">
					<h2 className="sub-header">Computer Science, BS</h2>
					<div className="education-stats">Lipscomb University, 2018</div>
				</div>
			</div>
		);
	}
}
