import React from 'react';
import './Contact.css';

const contacts = [
	{
		icon: 'fas fa-envelope',
		val: 'cjaustin42@gmail.com'
	},
	{
		icon: 'fas fa-phone',
		val: '615-806-4822'
	},
	{
		icon: 'fas fa-home',
		val: 'connoraustin.github.io'
	},
	{
		icon: 'fab fa-github',
		val: 'github.com/connoraustin'
	},
];

export default class Contact extends React.Component {
	render() {
		let contactList = contacts.map(c => {
			return (
				<span key={c.val} class="contact"><i className={c.icon}></i><span>{c.val}</span></span>
			);
		});

		return (
		<div class="contact-container">
			<div>{contactList}</div>
		</div>
		);
	}
}
