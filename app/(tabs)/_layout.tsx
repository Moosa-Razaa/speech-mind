import { Tabs } from "expo-router";
import React from "react";

function TabsLayout() {
	return (
		<>
			<Tabs
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tabs.Screen options={{ headerShown: false }} name="spacecrafts" />
				<Tabs.Screen options={{ headerShown: false }} name="details" />
			</Tabs>
		</>
	);
}

export default TabsLayout;
