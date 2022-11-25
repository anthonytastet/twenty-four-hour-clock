import React, { useState } from 'react';
import { format } from 'date-fns';

const Clock = () => {
	//current date
	let date = {
		weekDay: format(new Date(), 'EEE') + '.',
		monthDay: format(new Date(), 'd'),
		month: format(new Date(), 'LLL') + '.',
	};

	//current time
	let time = {
		hours: format(new Date(), 'HH'),
		minutes: format(new Date(), 'mm'),
		seconds: format(new Date(), 'ss'),
	};

	//angle calculation from numeric time values
	let secondsRatio = parseInt(time.seconds) / 60;
	let minutesRatio = (secondsRatio + parseInt(time.minutes)) / 60;
	let hoursRatio = (minutesRatio + parseInt(time.hours)) / 24;
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
						<span className='hours'>{time.hours}</span>
						<span className='minutes'>:{time.minutes}</span>
						<span className='seconds'>:{time.seconds}</span>
					</div>
				</div>
				<a
					href='https://calendar.google.com/calendar/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='clock__date__container'>
						<span className='day--word'>{date.weekDay}</span>
						<span className='day--number'>{date.monthDay}</span>
						<span className='month--word'>{date.month}</span>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Clock;
