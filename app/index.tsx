import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() 
{
	function onPressHandler() {
		router.push("/spacecrafts");
	}

	return (
		<SafeAreaView className="flex-1 justify-center items-center bg-primaryWhite p-10px">
			<View className="flex-1 justify-center items-start h-[40%] w-[100%] px-10 border-solid border-1 border-black">
				<Text className="text-4xl font-bold text-left">
					SpeechMind Assignment!
				</Text>

				<View className="h-[1px] w-[100%] bg-black my-5" />

				<View className="h-auto w-[100%] mb-4 bg-inherit">
					<Text className="text-sm font-bold text-left text-gray-600">
					SpaceX is the first private company to develop a liquid-propellant rocket that has reached orbit; to launch, orbit, and recover a spacecraft; to send a spacecraft to the International Space Station; and to send astronauts to the International Space Station.
					</Text>
				</View>

				<Button
					title="View Spacecrafts"
					onPress={onPressHandler}
				/>
			</View>
		</SafeAreaView>
	);
}
