import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import { useState } from 'react';

function App() {
	// let theme = 'purple';

	let [theme, setTheme] = useState('var(--white)');
	let pickTheme = (event) => {
		// console.log(event);
		theme = event.target.style.backgroundColor;
		// console.log(theme);
		setTheme(theme);
	};

	return (
		<div className='App'>
			<Header className='Header' pickTheme={pickTheme} />
			<Content className='Content' theme={theme} />
			<Footer className='Footer' />
		</div>
	);
}

export default App;
