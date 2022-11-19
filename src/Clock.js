import React, { useState } from "react";

const Clock = () => {
	let time = {
		myHours: new Date().getHours(),
		myMinutes: new Date().getMinutes(),
		mySeconds: new Date().getSeconds(),
	};

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

	setInterval(updateAngle, 1000);

	const hourStyle = {
		transform: `translateX(-50%) rotate(calc(${angle.hoursAngle} * 1deg))`,
	};
	const minuteStyle = {
		transform: `translateX(-50%) rotate(calc(${angle.minutesAngle} * 1deg))`,
	};
	const secondStyle = {
		transform: `translateX(-50%) rotate(calc(${angle.secondsAngle} * 1deg))`,
	};

	return (
		<div className="clockFrame">
			<div className="hand hour" style={hourStyle}></div>
			<div className="hand minute" style={minuteStyle}></div>
			<div className="hand second" style={secondStyle}></div>

			<div className="clockDigit clockDigit1">1</div>
			<div className="clockDigit clockDigit2">2</div>
			<div className="clockDigit clockDigit3">3</div>
			<div className="clockDigit clockDigit4">4</div>
			<div className="clockDigit clockDigit5">5</div>
			<div className="clockDigit clockDigit6">6</div>
			<div className="clockDigit clockDigit7">7</div>
			<div className="clockDigit clockDigit8">8</div>
			<div className="clockDigit clockDigit9">9</div>
			<div className="clockDigit clockDigit10">10</div>
			<div className="clockDigit clockDigit11">11</div>
			<div className="clockDigit clockDigit12">12</div>
			<div className="clockDigit clockDigit13">13</div>
			<div className="clockDigit clockDigit14">14</div>
			<div className="clockDigit clockDigit15">15</div>
			<div className="clockDigit clockDigit16">16</div>
			<div className="clockDigit clockDigit17">17</div>
			<div className="clockDigit clockDigit18">18</div>
			<div className="clockDigit clockDigit19">19</div>
			<div className="clockDigit clockDigit20">20</div>
			<div className="clockDigit clockDigit21">21</div>
			<div className="clockDigit clockDigit22">22</div>
			<div className="clockDigit clockDigit23">23</div>
			<div className="clockDigit clockDigit24">24</div>
		</div>
	);
};

export default Clock;
