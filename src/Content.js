import React from "react";
import Clock from "./Clock";

// import { useState } from "react";

const Content = () => {
	const currentTime = new Date();

	return (
		<main>
			<p>secondes {currentTime.getSeconds()}</p>
			<Clock />
		</main>
	);
};

export default Content;
