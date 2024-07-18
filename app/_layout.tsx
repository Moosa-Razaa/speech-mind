import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
}

export default RootLayout;
