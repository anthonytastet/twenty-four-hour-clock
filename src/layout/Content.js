import React from 'react';
import Clock from '../components/Clock';

const Content = ({ theme }) => {
	return (
		<main className='main'>
			<Clock theme={theme} />
		</main>
	);
};

export default Content;
