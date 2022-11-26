import React from 'react';

const Selector = ({ pickTheme }) => {
	return (
		<div className='selector'>
			<div
				className='theme blue'
				style={{ backgroundColor: 'var(--blue)', color: `var(--blue--dark)` }}
				onClick={(event) => pickTheme(event)}
			>
				blue
			</div>
			<div
				className='theme red'
				style={{ backgroundColor: 'var(--red)', color: `var(--red--dark)` }}
				onClick={(event) => pickTheme(event)}
			>
				red
			</div>
			<div
				className='theme green'
				style={{ backgroundColor: 'var(--green)', color: `var(--green--dark)` }}
				onClick={(event) => pickTheme(event)}
			>
				green
			</div>
			<div
				className='theme yellow'
				style={{
					backgroundColor: 'var(--yellow)',
					color: `var(--yellow--dark)`,
				}}
				onClick={(event) => pickTheme(event)}
			>
				yellow
			</div>
			<div
				className='theme orange'
				style={{ backgroundColor: 'var(--orange)', color: `var(--red--dark)` }}
				onClick={(event) => pickTheme(event)}
			>
				orange
			</div>
			<div
				className='theme purple'
				style={{
					backgroundColor: 'var(--purple)',
					color: `var(--purple--dark)`,
				}}
				onClick={(event) => pickTheme(event)}
			>
				purple
			</div>
			<div
				className='theme white'
				style={{ backgroundColor: 'var(--white)', color: `var(--black)` }}
				onClick={(event) => pickTheme(event)}
			>
				white
			</div>
		</div>
	);
};

export default Selector;
