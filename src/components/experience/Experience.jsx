import React from 'react';
import Section from '../section/Section.jsx';
import './Experience.css';

const experience = [
	{
		job: 'Raven Software',
		title: 'Senior Gameplay Engineer',
		date: 'September 2022 - Current',
		description:
			['Shipped Call of Duty: Modern Warfare and Call of Duty: Modern Warfare II',
			'Implemented gameplay features using a mix of C++ and script.',
			'Debugged and fixed crash dumps that were blocking artists and designers.',
			'Spearheaded creation of a new gamemode, working closely with artists and tracking overall production while implementing the gameplay.']
	},
	{
		job: 'Zenimax Online Studios',
		title: 'Gameplay Engineer',
		date: 'November 2018 - August 2022',
		description:
			['Shipped and supported several major expansions.', 
			'Delivered new gameplay features including card game AI, companion items, and hot-swappable player builds.', 
			'Worked closely with designers by providing scripting support and maintained the scripting system itself.',
			'Performance profiled features ensuring they were scalable to MMO proportions.',
			'Redesigned several legacy systems while maintaining backwards compatibility.',
			'Fixed high priority live bugs and crashes.',
			'Discovered and fixed several major exploits.']
	},
	{
		job: 'UBS',
		title: 'Software Developer',
		date: 'June 2018 - October 2018',
		description:
			['Implemented JMS (messaging service) for automating processes.', 
			'Wrote and debugged many PL/SQL procedures.']
	}
];

export default class Experience extends React.Component {
	render() {
		let experience_elements = experience.map((exp) => {

			let description = exp.description.map((d) => {
				return (
					<li key={d}>{'‣ ' +d}</li>
				);
			});

			return (
			<div key={exp.job} className="experience">
				<h2 className="sub-header">{exp.job}</h2>
				<div className="position">
					<div><b>{exp.title}</b></div>
					<span>|</span>
					<div className="date">{exp.date}</div>
				</div>

				<ul className="description">
					{description}
				</ul>
			</div>
			);
		});

		return (
		<span className={'experience-container'}>
			<Section text="Experience" />
			<div>
				{experience_elements}
			</div>
		</span>
		);
	}
}
