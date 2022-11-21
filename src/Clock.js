import React, { useState } from "react";

const Clock = () => {
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
		// secondsAngle: secondsRatio * 360,
		// minutesAngle: minutesRatio * 360,
		hoursAngle: hoursRatio * 360,
	};

	const [rotation, setRotation] = useState({ angle });
	const updateAngle = () => {
		angle = {
			// secondsAngle: secondsRatio * 360,
			// minutesAngle: minutesRatio * 360,
			hoursAngle: hoursRatio * 360,
		};
		setRotation(angle);
	};
	// setInterval(updateAngle, 1000);

	return (
		<div className="clock__container">
			<svg className="clock__circle__frame">
				<circle
					className="clock__circle"
					cx="50%"
					cy="50%"
					r="40%"
					pathLength={360}
					strokeDasharray={angle.hoursAngle}
				></circle>
			</svg>
			<div className="clock__time__container">
				<div className="clock__time">
					<span className="hours">
						{time.myHours < 10 ? "0" + time.myHours : time.myHours}
					</span>
					<span>:</span>
					<span className="minutes">
						{time.myMinutes < 10 ? "0" + time.myMinutes : time.myMinutes}
					</span>
					<span>:</span>
					<span className="seconds">
						{time.mySeconds < 10 ? "0" + time.mySeconds : time.mySeconds}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Clock;
