import React from 'react';

const Footer = () => {
	const today = new Date();
	return (
		<footer className='footer'>
			<div className='copyright'>
				Copyright &copy; anthonycode {today.getFullYear()}
			</div>
		</footer>
	);
};

export default Footer;
