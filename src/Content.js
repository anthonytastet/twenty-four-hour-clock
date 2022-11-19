import React from "react";
import Clock from "./Clock";

const Content = () => {
	// let time = {
	// 	myHours: new Date().getHours(),
	// 	myMinutes: new Date().getMinutes(),
	// 	mySeconds: new Date().getSeconds(),
	// };
	// const [currentTime, setCurrentTime] = useState({ time });

	// const updateTime = () => {
	// 	time = {
	// 		myHours: new Date().getHours(),
	// 		myMinutes: new Date().getMinutes(),
	// 		mySeconds: new Date().getSeconds(),
	// 	};
	// 	setCurrentTime(time);
	// };

	// setInterval(updateTime, 1000);
	return (
		<main>
			<p>{/* {time.myHours}:{time.myMinutes}:{time.mySeconds} */}</p>
			<Clock />
		</main>
	);
};

export default Content;
