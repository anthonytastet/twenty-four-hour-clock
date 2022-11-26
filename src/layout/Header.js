import React from 'react';
import Selector from '../components/Selector';

const Header = ({ pickTheme }) => {
	return (
		<header className='header'>
			<h1>twenty four hour clock</h1>
			<Selector pickTheme={pickTheme} />
		</header>
	);
};

export default Header;
