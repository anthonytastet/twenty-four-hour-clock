import React from "react";

const Content = () => {
	const handleNameChange = () => {
		const names = ["LeBon", "LaBrute", "LeTruand"];
		const randInt = Math.floor(Math.random() * 3);
		return names[randInt];
	};

	const currentHour = new Date();

	return (
		<main>
			<p>hello {handleNameChange()} !</p>
			<p>
				il est {currentHour.getHours()}:{currentHour.getMinutes()}:
				{currentHour.getSeconds()} !
			</p>
		</main>
	);
};

export default Content;
