import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { ApolloProvider } from "@apollo/client";
import { Stack } from "expo-router";
import React from "react";
import client from "../apollo/main";

function RootLayout() {
	
	if (__DEV__) {
		loadDevMessages();
		loadErrorMessages();
	}

	return (
		<ApolloProvider client={client}>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</ApolloProvider>
	);
}

export default RootLayout;
