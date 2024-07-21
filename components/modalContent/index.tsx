import { useState } from "react";
import { ModalContentProps, Ship } from "./props";
import { View, Text, Image, Button, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";

// Graphql query to get ship information with the given shipId. 
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

// The ModalContent component displays the detailed information of a ship.
// The component takes the following props:
// - id: The id of the ship.
// - name: The name of the ship. I passed ship name as a prop because the SpaceX API does not provide the ship name when fetching the ship from shipId. It might be an error.
// - image: The image url of the ship. For the following reasons, I added image uri as a prop.
// - closeButtonOnPressHandler: A function that is called when the close button is pressed.

function ModalContent({ id, name, image, closeButtonOnPressHandler }: ModalContentProps) {
	const labelClass = "text-base font-mono ml-2";
	const valueClass = "text-base font-mono font-bold";
    const notMentionedClass = "text-primaryLightGrey";

	const [showMore, setShowMore] = useState<boolean>(false);

	// The imageUri state is used to store the image uri of the ship. If the image uri is not provided, the default image uri is used. I have picked a random image from unsplash.
    const [imageUri, setImageUri] = useState<string>(image ? image : "https://images.unsplash.com/photo-1644640260506-4bbdca39a4c5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
	
	const { loading, error, data } = useQuery(getShipInformationQuery, {
		variables: { shipId: id },
	});

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error: {error.message}</Text>;
	const ship: Ship = data.ship as Ship;

	// The shipDetails array contains the ship details that are displayed in the modal.
	// Created an array of objects with label and value properties to display the ship details in a FlatList component.
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

	// For a better experience, this function will take the value of the property and return a string to display instead of displaying null.
	function DisplayData(value: string | boolean | number) 
    {
        if(value === true) return "True";
        if(value === false) return "False";

        if(value) return value;
        return "Not mentioned";
    }

	// If the image fails to load, the default image uri is used.
    function ImageOnError()
    {
        setImageUri("../../assets/placeHolder.jpeg");
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
						uri: imageUri,
					}}
					className="w-[100%] h-64"
					resizeMode="contain"
                    onError={ImageOnError}
				/>

				<View className="flex justify-center items-center h-auto w-[100%]">
					<Text className="text-2xl font-bold text-primaryDarkOrange">
						{name}
					</Text>
					<View className="h-[1px] w-[80%] m-1 bg-primaryDarkGrey" />
				</View>

				<FlatList
					className="flex-1 w-[100%] mt-3 mb-5 bg-primaryWhite border border-primaryWhite rounded-lg shadow-lg"
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
