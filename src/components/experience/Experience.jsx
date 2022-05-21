import React from 'react';
import Section from '../section/Section.jsx';
import './Experience.css';

const experience = [
	{
		job: 'Zenimax Online Studios',
		title: 'Gameplay Engineer',
		date: 'November 2018 - Current',
		description:
			['Scoped, documented, architected and implemented many gameplay features from database to client.', 
			'Worked closely with designers to provide scripting support for our in-house visual scripting system and also maintained the system itself.',
			'Profiled and improved costly in-game systems.',
			'Fixed high priority 1%-repro bugs on live.',
			'Discovered and fixed in-game exploits in various systems.']
	},
	{
		job: 'UBS',
		title: 'Software Developer',
		date: 'June 2018 - October 2018',
		description:
			['Implemented JMS (messaging service) for automating processes.', 
			'Wrote and debugged many PL/SQL procedures.']
	},
	{
		job: 'Intrinsic Value',
		title: 'Contractor',
		date: 'Jan 2018 - May 2018',
		description:
			['Built the iOS app and assisted in debugging the Android app for a react-native app while communicating with a third-party software development team.']
	},
	{
		job: 'Revenue Platforms',
		title: 'Software Intern',
		date: 'May 2017 - Aug 2017',
		description: ['Co-led research project under supervision of CEO on predicting medical claim payment amounts using a deep neural network.',
		'The research project was successful and was 10% more accurate on average than the previous model.']
	},
	{
		job: 'American Music Channel',
		title: 'Software Intern',
		date: 'June 2016 - Aug 2016',
		description: ['Configured and managed the staging server.',
		'Built search functionality for artists, albums and songs. The search function would aggregate data from multiple databases for information well as embed music videos if available.']
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
			<div key={exp.job} class="experience">
				<h2 className="sub-header">{exp.job}</h2>
				<div class="position">
					<div><b>{exp.title}</b></div>
					<span>|</span>
					<div class="date">{exp.date}</div>
				</div>

				<ul class="description">
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
