import React, { useState } from 'react';
import { format } from 'date-fns';

const Clock = () => {
	//current date
	let date = {
		myDayWord: format(new Date(), 'EEE') + ' .',
		myDayNumber: format(new Date(), 'dd'),
		myMonthWord: format(new Date(), 'LLL') + ' .',
	};
	console.log(date);

	//current time
	let time = {
		myHours: new Date().getHours(),
		myMinutes: new Date().getMinutes(),
		mySeconds: new Date().getSeconds(),
	};

	//angle calculation from numeric time values
	let secondsRatio = time.mySeconds / 60;
	let minutesRatio = (secondsRatio + time.myMinutes) / 60;
	let hoursRatio = (minutesRatio + time.myHours) / 24;
	let angle = {
		secondsAngle: secondsRatio * 360,
		minutesAngle: minutesRatio * 360,
		hoursAngle: hoursRatio * 360,
	};

	const [rotation, setRotation] = useState({ angle });
	const updateAngle = () => {
		angle = {
			secondsAngle: secondsRatio * 360,
			minutesAngle: minutesRatio * 360,
			hoursAngle: hoursRatio * 360,
		};
		setRotation(angle);
	};
	setTimeout(updateAngle, 1000);

	return (
		<div className='clock__container'>
			<svg className='clock__circle__frame'>
				<circle
					className='clock__circle'
					viewBox='0 0 100 100'
					preserveAspectRatio='xMaxYMid meet'
					cx='50%'
					cy='50%'
					r='49.4%'
					pathLength={360}
					strokeDasharray={1000}
					strokeDashoffset={-angle.hoursAngle}
				></circle>
			</svg>
			<div className='clock__text__container'>
				<div className='clock__time__container'>
					<div className='clock__time'>
						<span className='hours'>
							{time.myHours < 10 ? '0' + time.myHours : time.myHours}
						</span>
						<span className='minutes'>
							:{time.myMinutes < 10 ? '0' + time.myMinutes : time.myMinutes}
						</span>
						<span className='seconds'>
							:{time.mySeconds < 10 ? '0' + time.mySeconds : time.mySeconds}
						</span>
					</div>
				</div>
				<a
					href='https://calendar.google.com/calendar/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='clock__date__container'>
						<span className='day--word'>{date.myDayWord}</span>
						<span className='day--number'>{date.myDayNumber}</span>
						<span className='month--word'>{date.myMonthWord}</span>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Clock;
