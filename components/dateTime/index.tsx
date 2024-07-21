import React, { useState, useEffect } from "react";
import { Text } from "react-native";

// The DateTime component displays the current date and time.
// The component is displayed in the (tabs)/details.tsx screen of the application.
// Main purpose of making this a component is because of useEffect and setInterval. useEffect may cause memory leaks and infinite renders if not handled properly.
// So creating a separate component for this will help in managing the useEffect and setInterval properly.
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
