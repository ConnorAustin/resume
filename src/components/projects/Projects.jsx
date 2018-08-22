import React from 'react';
import Section from '../section/Section.jsx';
import './Projects.css';

const projects = [[
	{
		title: 'MIPS Simulator',
		link: 'https://goo.gl/gjk9Rp',
		desc: 'Created a visual simulation of a MIPS CPU in C++.'
	},
	{
		title: 'SNES Controller',
		link: 'https://goo.gl/NH54TN',
		desc: 'Soldered Arduino to SNES controller board and used C to communicate with it.'
	},
	{
		title: 'Compiler',
		link: 'https://goo.gl/WR9Ngj',
		desc: 'Made a compiler in C, Bison and Flex to compile a homegrown language.'
	}],
	[{
		title: 'Rust Ray Tracer',
		link: 'https://goo.gl/iP5Fgw',
		desc: 'Wrote a graphical ray tracer to render an animated scene in Rust.'
	},
	{
		title: 'Mountain Man',
		link: 'https://goo.gl/VLZMmq',
		desc: 'Built an Android game in a week using Unity, C#.'
	},
	{
		title: 'Physics Website',
		link: 'https://goo.gl/h9cnUq',
		desc: 'Made a website to compile personal notes for physics.'
	}]
];

export default class Projects extends React.Component {
	render() {
		let project_rows = projects.map(pr => {
			let proj = pr.map(p => {
				return (<div key={p.title} class="project">
					<h2 className="sub-header">{p.title}</h2>
					<a href={p.link}>{p.link}</a>
					<div class="project-desc">{p.desc}</div>
				</div>
			);
			});

			return (
				<div class="projects-row">
					{proj}
				</div>
			);
		});

		return (
		<span className="projects-container">
			<Section text="Projects" />
			<div>
				{project_rows}
			</div>
		</span>
		);
	}
}
