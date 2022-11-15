import React from "react";

const Clock = () => {
	const currentTime = new Date();
	setInterval(setClock(), 1000);

	const hourHand = document.querySelector(".hour");
	const minuteHand = document.querySelector(".minute");
	const secondHand = document.querySelector(".second");

	const secondsRatio = currentTime.getSeconds() / 60;
	const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
	const hoursRatio = (minutesRatio + currentTime.getHours()) / 24;
	const secondsAngle = secondsRatio * 360;
	const minutesAngle = minutesRatio * 360;
	const hoursAngle = hoursRatio * 360;

	const setRotation = (element, rotationAngle) => {
		element.style.setProperty(
			"transform",
			`translateX(-50%) rotate(calc(var(${rotationAngle}) * 1deg)`,
		);
	};

	const setClock = () => {
		setRotation(secondHand, secondsAngle);
		setRotation(minuteHand, minutesAngle);
		setRotation(hourHand, hoursAngle);
	};
	setClock();

	return (
		<div className="clockFrame">
			<div
				className="hand hour"
				// style={{
				// 	transform: `translateX(-50%) rotate(calc(var(${hoursAngle}) * 1deg))`,
				// }}
			></div>
			<div
				className="hand minute"
				// style={{
				// 	transform: `translateX(-50%) rotate(calc(var(${minutesAngle}) * 1deg))`,
				// }}
			></div>
			<div
				className="hand second"
				// style={{
				// 	transform: `translateX(-50%) rotate(calc(var(${secondsAngle}) * 1deg))`,
				// }}
			></div>
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
