import { Tabs } from "expo-router";
import React from "react";
import TabIcon from "../../components/tabIcon";

// The TabsLayout component is a custom component that displays the tabs in the application.
function TabsLayout() {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: "#DC5F00",
					tabBarInactiveTintColor: "#F5F7F8",
					tabBarShowLabel: false,
					tabBarStyle: {
						backgroundColor: "#373A40",
						borderTopWidth: 1,
						borderTopColor: "#686D76",
						height: 84,
					},
				}}
			>
				<Tabs.Screen
					options={{
						headerShown: true,
						title: "Spaceships",
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								name="Spaceships"
								icon={require("../../assets/Spaceship.png")}
								color={color}
								focused={focused}
							/>
						),
					}}
					name="spacecrafts"
				/>
				<Tabs.Screen
					options={{
						headerShown: true,
						title: "Details",
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								name="Details"
								icon={require("../../assets/Details.png")}
								color={color}
								focused={focused}
							/>
						),
					}}
					name="details"
				/>
			</Tabs>
		</>
	);
}

export default TabsLayout;
