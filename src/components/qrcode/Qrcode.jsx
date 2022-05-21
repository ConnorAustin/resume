import React from 'react';
import './Qrcode.css';

const qrcodeurl = "connoraustin.xyz-qrcode.png";

export default class Qrcode extends React.Component {
	render() {
		return (
		<div className="qrcode-container">
			<div className="contact-container">
				<a href="connoraustin.xyz" ><img alt="connoraustin.xyz" className="qrcode" src={qrcodeurl}/></a>
			</div>
		</div>
		);
	}
}
