import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { ApolloProvider } from "@apollo/client";
import { Stack } from "expo-router";
import React from "react";
import client from "../apollo/main";

// The RootLayout component is the root layout of the application.
// It contains the ApolloProvider component that provides the Apollo Client to the application.
// The Apollo Client is the client that communicates with the GraphQL server.
// Wrapped the Stack component with the ApolloProvider component so that it can be accessed by all the components in the application.
// The Stack component is the main navigation component of the application.

function RootLayout() {
	
	// If the app is in development mode, load the development messages and error messages.
	// The development messages are the messages that are displayed in the console for the developer.
	if (__DEV__) {
		loadDevMessages();
		loadErrorMessages();
	}

	return (
		<ApolloProvider client={client}>
			<Stack>
				<Stack.Screen 
					name="index" 
					options={{ 
						headerShown: false,
						title: "Home"
					}} 
				/>
				<Stack.Screen 
					name="(tabs)" 
					options={{ 
						headerShown: true,
						title: "SpaceX Explorer" 
					}} 
				/>
			</Stack>
		</ApolloProvider>
	);
}

export default RootLayout;
