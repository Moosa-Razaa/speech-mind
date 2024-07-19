import React from "react";
import { View, Text, Pressable } from "react-native";
import ShipsCardProps from "./props";

function ShipCard({ name, active, type, onPress }: ShipsCardProps) {
	return (
		<View className="w-[100%] h-[120px] p-4 mb-3 bg-primaryWhite rounded-lg flex flex-row">
			<View className="w-[45%] h-[100%] flex justify-center items-end pr-4">
				<Text className="text-lg font-bold text-primaryDarkOrange text-center text-ellipsis">
					{name}
				</Text>
			</View>
            <View className="h-[100%] w-[1px] bg-primaryLightGrey" />
			<View className="w-[45%] h-[100%] pl-4 flex justify-center items-start">
				<Text className="text-base font-mono">
					{`active:`} <Text className="text-base font-mono font-bold">{active ? "True" : " False"}</Text>
				</Text>
                <Text className="text-base font-mono">
					{`type:`} <Text className="text-base font-mono font-bold">{type}</Text>
				</Text>
				<Pressable>
					<Text onPress={onPress} className="text-base font-mono text-cyan-600">More Info</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default ShipCard;
