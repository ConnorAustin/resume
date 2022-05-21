import React from 'react';
import './Header.css';

export default class Header extends React.Component {
	render() {
		return (
		<div className="header-container">
			<h1>Connor Austin</h1>
			<span className="about">{"// Software Engineer"}</span>
		</div>
		);
	}
}
