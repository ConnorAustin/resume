import React from 'react';
import './Qrcode.css';
import Section from '../section/Section.jsx';

const qrcodeurl = "connoraustin.xyz-qrcode.png";

export default class Qrcode extends React.Component {
	render() {
		return (
		<div class="qrcode-container">
			<div class="contact-container">
				<a href="connoraustin.xyz" ><img class="qrcode" src={qrcodeurl}/></a>
			</div>
		</div>
		);
	}
}
