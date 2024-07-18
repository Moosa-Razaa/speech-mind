import { Tabs } from "expo-router";
import React from "react";
import TabIcon from "../../components/TabIcon";

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
						headerShown: false,
						title: "Spaceships",
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								name="Spaceships"
								icon={require("../../assets/Spaceship.png")}
								color={color}
								focused={focused}
                                size={6}
							/>
						),
					}}
					name="spacecrafts"
				/>
				<Tabs.Screen
					options={{
						headerShown: false,
						title: "Details",
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								name="Details"
								icon={require("../../assets/Details.png")}
								color={color}
								focused={focused}
                                size={5}
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
