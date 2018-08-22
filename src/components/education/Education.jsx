import React from 'react';
import Section from '../section/Section.jsx';
import './Education.css';

export default class Education extends React.Component {
	render() {
		return (
			<div>
				<Section text="Education"/>
				<div class="education-container">
					<h2 className="sub-header">Lipscomb University</h2>
					<div className="education-stats"><b>Computer Science, Bachelors</b></div>
					<div className="education-stats">Aug 2014 - May 2018</div>
					<div className="education-stats">GPA: 3.8</div>
				</div>
			</div>
		);
	}
}
