import { useState } from "react";
import { ModalContentProps, Ship } from "./props";
import { View, Text, Image, Button, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";

const getShipInformationQuery = gql`
	query Company($shipId: ID!) {
		ship(id: $shipId) {
			name
			id
			type
			year_built
			home_port
			class
			active
			abs
			imo
			mmsi
			status
			roles
		}
	}
`;

function ModalContent({ id, name, image, closeButtonOnPressHandler }: ModalContentProps) {
	const labelClass = "text-base font-mono ml-2";
	const valueClass = "text-base font-mono font-bold";
    const notMentionedClass = "text-primaryLightGrey";
	const [showMore, setShowMore] = useState<boolean>(false);
	const { loading, error, data } = useQuery(getShipInformationQuery, {
		variables: { shipId: id },
	});

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error: {error.message}</Text>;
	const ship: Ship = data.ship as Ship;

	const shipDetails = [
		{ label: "Id", value: id },
		{ label: "Type", value: ship.type },
		{ label: "Year Built", value: ship.year_built },
		{ label: "Home Port", value: ship.home_port },
		{ label: "Class", value: ship.class },
		{ label: "Active", value: ship.active ? "True" : "False" },
		{ label: "Abs", value: ship.abs },
		{ label: "IMO", value: ship.imo },
		{ label: "MMSI", value: ship.mmsi },
		{ label: "Status", value: ship.status },
	];

	function DisplayData(value: string | boolean | number) 
    {
        if(value === true) return "True";
        if(value === false) return "False";

        if(value) return value;
        return "Not mentioned";
    }

	if (showMore) {
		shipDetails.push(
			...ship.roles.map((role) => ({ label: "Role", value: role }))
		);
	}

	return (
		<View className="flex-1">
			<View className="flex-1 justify-start items-start h-[100%] w-[100%] p-4">
				<Image
					source={{
						uri: image,
					}}
					className="w-[100%] h-64"
					resizeMode="contain"
				/>

				<View className="flex justify-center items-center h-auto w-[100%]">
					<Text className="text-2xl font-bold text-primaryDarkOrange">
						{name}
					</Text>
					<View className="h-[1px] w-[80%] m-1 bg-primaryDarkGrey" />
				</View>

				<FlatList
					className="flex-1 w-[100%] mt-3 mb-5 bg-primaryWhite border border-primaryWhite rounded-lg shadow-md"
					data={shipDetails}
					renderItem={({ item }) => (
						<View className="flex justify-center items-start p-2">
							<Text className={labelClass}>
								{`${item.label}: `}
								<Text className={valueClass + ` ${item.value ? "" : notMentionedClass}`}>{DisplayData(item.value)}</Text>
							</Text>
						</View>
					)}
					keyExtractor={(item, index) => `${item.label}-${index}`}
					ListFooterComponent={
						!showMore ? (
							<Button
								title="Show Roles"
								onPress={() => setShowMore(true)}
							/>
						) : (
							<Button
								title="Hide Roles"
								onPress={() => setShowMore(false)}
							/>
						)
					}
				/>

				<View className="w-[100%] items-center mb-4">
					<Button title="Close" onPress={closeButtonOnPressHandler} />
				</View>
			</View>
		</View>
	);
}

export default ModalContent;