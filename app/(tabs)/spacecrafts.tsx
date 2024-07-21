import React from "react";
import { Text, ScrollView, Modal, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShipCard from "../../components/shipCard";
import { gql, useQuery } from "@apollo/client";
import ModalContent from "../../components/modalContent";

// GraphQL query to fetch the array of ships from SpaceX api.
const getRockets = gql`
	query Ships {
		ships {
			active
			id
			image
			name
			type
		}
	}
`;

type Ship = {
	active: boolean;
	id: string;
	image: string;
	name: string;
	type: string;
};

function Spacecrafts() {
	const { loading, error, data } = useQuery(getRockets);
	const [isModalVisible, setModalVisible] = React.useState<boolean>(false);
	const [ship, setShip] = React.useState<Ship | null>(null);

	if (loading) {
		return (
			<SafeAreaView className="flex-1 justify-start items-center p-4">
				<Text>Loading ...</Text>
			</SafeAreaView>
		);
	}

	if (error) {
		return (
			<SafeAreaView className="flex-1 justify-start items-center p-4">
				<Text>Error: {error.message}</Text>
			</SafeAreaView>
		);
	}

	function CloseModal() {
		setModalVisible(false);
		setShip(null);
	}

	function MoreInfoOnClickHandler(currentShip: Ship) {
		setModalVisible(true);
		setShip(currentShip);
	}

	return (
		<SafeAreaView className="flex-1 justify-start items-center p-4 bg-slate-200">
			<Modal
				visible={isModalVisible}
				onRequestClose={() => setModalVisible(false)}
				animationType="slide"
				presentationStyle="pageSheet"
			>
				{ship && (
					<ModalContent
						id={ship.id}
						image={ship.image}
						name={ship.name}
						closeButtonOnPressHandler={CloseModal}
					/>
				)}
			</Modal>
			<ScrollView>
				{data.ships.map((ship: Ship) => (
					<ShipCard
						key={ship.id}
						name={ship.name}
						active={ship.active}
						type={ship.type}
						onPress={() => MoreInfoOnClickHandler(ship)}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

export default Spacecrafts;
