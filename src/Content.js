import React from "react";
import { useState } from "react";

const Content = () => {
	const currentTime = new Date();

	return (
		<main>
			<p>
				il est {currentTime.getHours()}:{currentTime.getMinutes()}:
				{currentTime.getSeconds()} !
			</p>
			<div className="clockFrame">
				<div className="hand hour"></div>
				<div className="hand minute"></div>
				<div className="hand second"></div>
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
		</main>
	);
};

export default Content;
