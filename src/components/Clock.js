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

	//set rotation based on angle
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
		<div className='clock'>
			<svg className='clock__container'>
				<circle
					className='clock__disk'
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
			<div className='clock__text'>
				<div className='clock__text--time'>
					<span className='hours'>{time.hours}</span>
					<span className='minutes'>:{time.minutes}</span>
					<span className='seconds'>:{time.seconds}</span>
				</div>
				<a
					className='clock__text--date'
					href='https://calendar.google.com/calendar/'
					target='_blank'
				>
					<span className='weekday'>{date.weekDay}</span>
					<span className='monthday'>{date.monthDay}</span>
					<span className='month'>{date.month}</span>
				</a>
			</div>
		</div>
	);
};

export default Clock;
