import React from 'react';
import Section from '../section/Section.jsx';
import './Experience.css';

const experience = [
	{
		job: 'React Native App',
		title: 'Contractor',
		date: 'Jan 2018 - Current',
		description:
			['Built the iOS portion and assited debugging Android side for a react-native app alongside third-party software development team.',
			'The app can poll for calls and answer them with video chat or text and show the map location of users among other features.']
	},
	{
		job: 'Revenue Platforms',
		title: 'Software Intern',
		date: 'May 2017 - Aug 2017',
		description:
			['Co-led research project under supervision of CEO on predicting medical claim payment amounts using a deep nerual network.',
			'The research project was successful and beat the previous Excel based model by 10%.']
	},
	{
		job: 'American Music Channel',
		title: 'Software Intern',
		date: 'June 2016 - Aug 2016',
		description:
			['Configured and managed the staging server used in testing code before it hit production.',
			'Built search function for artists, albums and songs. The search function would pull from multiple databases to get pictures and descriptions as well as embed music videos.']
	}
];

export default class Experience extends React.Component {
	render() {
		let experience_elements = experience.map((exp) => {

			let description = exp.description.map((d) => {
				return (
					<li key={d}>{'> ' + d}</li>
				);
			});

			return (
			<div key={exp.job} class="experience">
				<h2 className="sub-header">{exp.job}</h2>
				<div class="position">
					<div>{exp.title}</div>
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
