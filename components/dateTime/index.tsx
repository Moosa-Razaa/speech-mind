import React, { useState, useEffect } from "react";
import { Text } from "react-native";

function DateTime() {
	const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Text className="text-base font-mono">
				{`Time: `}
				<Text className="font-mono font-bold text-base text-primaryDarkOrange">
					{currentDateTime.toLocaleTimeString()}
				</Text>
			</Text>
			<Text className="text-base font-mono">
				{`Date: `}
				<Text className="font-mono font-bold text-base text-primaryDarkOrange">
					{currentDateTime.toLocaleDateString()}
				</Text>
			</Text>
		</>
	);
}

export default DateTime;
