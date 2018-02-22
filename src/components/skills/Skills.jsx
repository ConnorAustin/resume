import React from 'react';
import './Skills.css';
import Section from '../section/Section';

const skills = [
	{
		name: 'Languages',
		skills: [
			'Java',
			'C#',
			'Javascript',
			'Python',
			'C / C++',
			'PHP',
			'HTML',
			'CSS / SASS',
			'SQL'
		]
	},
	{
		name: 'Frameworks',
		skills: [
			'React',
			'Node JS',
			'Django',
			'Joomla',
			'Android',
			'iOS',
			'Processing',
			'Unity',
			'Game Maker'
		]
	},
	{
		name: 'Tools',
		skills: [
			'Linux',
			'Azure',
			'AWS',
			'Git',
			'Docker',
			'PostgreSQL',
			'Azure ML',
			'Android Studio',
			'XCode'
		]
	},

];
export default class Skills extends React.Component {
	render() {
		let skill_elements = skills.map((s) => {
			return (
			<div className="skills-section" key={s.name}>
				<h2 className="sub-header">{s.name}</h2>
				<span>{s.skills.join(', ')}</span>
			</div>
			);
		});

		return (
		<span className="skills-container">
			<Section text="Skills" />
			<div>
				{skill_elements}
			</div>
		</span>
		);
	}
}
