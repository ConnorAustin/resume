import React from 'react';
import './Skills.css';
import Section from '../section/Section';

const skills = [
	{
		name: 'Languages',
		skills: [
			'C / C++',
			'C#',
			'Java',
			'Python',
			'Rust',
			'PHP',
			'SQL',
			'Oracle PL/SQL'
		]
	},
	{
		name: 'Frameworks',
		skills: [
			'Boost',
			'Unity',
			'Game Maker',
			'Android',
			'iOS',
			'Node JS',
			'Django',
			'Joomla',
		]
	},
	{
		name: 'Tools',
		skills: [
			'Git',
			'Perforce',
			'Azure',
			'AWS',
			'Docker',
			'Visual Studio',
			'Android Studio',
			'XCode'
		]
	},
	{
		name: 'General',
		skills: [
			'Profiling',
			'Communication skills with designers',
			'Networking knowledge',
			'Low level CPU knowledge',
			'Task scoping',
			'Basic game design knowledge',
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
