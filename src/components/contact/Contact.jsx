import React from 'react';
import './Contact.css';

const contacts = [
	{
		icon: 'fas fa-envelope',
		val: 'cjaustin42@gmail.com',
		link: 'mailto:cjaustin42@gmail.com'
	},
	{
		icon: 'fas fa-phone',
		val: '(615) 806-4822',
		link: 'tel:615-806-4822'
	},
	{
		icon: 'fas fa-home',
		val: 'connoraustin.xyz',
		link: 'https://connoraustin.xyz'
	},
	{
		icon: 'fab fa-github',
		val: 'github.com/connoraustin',
		link: 'https://github.com/connoraustin'
	},
	{
		icon: 'fab fa-linkedin',
		val: 'linkedin.com/in/cjaustin42',
		link: 'https://www.linkedin.com/in/cjaustin42'
	}
];

export default class Contact extends React.Component {
	render() {
		let contactList = contacts.map(c => {
			return (
				<span key={c.val} class="contact"><i className={c.icon}></i><a href={c.link}>{c.val}</a></span>
			);
		});

		return (
		<div class="contact-container">
			<div>{contactList}</div>
		</div>
		);
	}
}
