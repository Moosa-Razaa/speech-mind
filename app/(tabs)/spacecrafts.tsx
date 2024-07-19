import React from "react";
import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShipCard from "../../components/shipCard";
import { gql, useQuery } from "@apollo/client";

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

	if (loading)
		return (
			<SafeAreaView className="flex-1 justify-start items-center p-4">
				<Text>Loading ...</Text>
			</SafeAreaView>
		);

	if (error)
		return (
			<SafeAreaView className="flex-1 justify-start items-center p-4">
				<Text>Error: {error.message}</Text>
			</SafeAreaView>
		);

	return (
		<SafeAreaView className="flex-1 justify-start items-center p-4 bg-slate-200">
			<ScrollView>
				{data.ships.map((ship: Ship) => (
					<ShipCard
						key={ship.id}
						name={ship.name}
						image={ship.image}
						active={ship.active}
						type={ship.type}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

export default Spacecrafts;
