import { gql, useQuery } from "@apollo/client";
import React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTime from "../../components/dateTime";

const graphqlQuery = gql`
	query Company {
		company {
			ceo
			coo
			employees
			founded
			founder
			headquarters {
				city
			}
			summary
			name
			links {
				twitter
				website
			}
			vehicles
		}
	}
`;

type Company = {
	ceo: string;
	coo: string;
	employees: number;
	founded: number;
	founder: string;
	headquarters: {
		city: string;
	};
	summary: string;
	name: string;
	links: {
		twitter: string;
		website: string;
	};
	vehicles: number;
};

function Details() {
	const { loading, error, data } = useQuery(graphqlQuery);
	const textClasses = "text-base font-mono mb-1";
	const actualTestClassesOrange =
		"font-mono font-bold text-base text-primaryDarkOrange";
	const actualTestClassesDarkGrey =
		"font-mono font-bold text-base text-primaryuDarkGrey";
	const actualTestClassesLink =
		"font-mono font-bold text-base text-blue-500 underline";

	function Renderer() {
		if (loading) {
			return (
				<ActivityIndicator
					animating={loading}
					size="small"
					color="#DC5F00"
				/>
			);
		} else if (error) {
			return (
				<Text className="text-base font-mono text-red-600">
					{error.message}
				</Text>
			);
		} else {
			const queryData = data as { company: Company };
			return (
				<>
					<Text className={textClasses}>
						{`CEO: `}
						<Text className={actualTestClassesOrange}>
							{queryData.company.ceo}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`COO: `}
						<Text className={actualTestClassesOrange}>
							{queryData.company.coo}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`Employees: `}
						<Text className={actualTestClassesDarkGrey}>
							{queryData.company.employees}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`Founded: `}
						<Text className={actualTestClassesDarkGrey}>
							{queryData.company.founded}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`Founder: `}
						<Text className={actualTestClassesDarkGrey}>
							{queryData.company.founder}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`Headquarters: `}
						<Text className={actualTestClassesDarkGrey}>
							{queryData.company.headquarters.city}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`Summary: `}
						<Text className={actualTestClassesDarkGrey}>
							{queryData.company.summary}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`Name: `}
						<Text className={actualTestClassesDarkGrey}>
							{queryData.company.name}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`Twitter: `}
						<Text className={actualTestClassesLink}>
							{queryData.company.links.twitter}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`Website: `}
						<Text className={actualTestClassesLink}>
							{queryData.company.links.website}
						</Text>
					</Text>
					<Text className={textClasses}>
						{`Vehicles: `}
						<Text className={actualTestClassesDarkGrey}>
							{queryData.company.vehicles}
						</Text>
					</Text>
				</>
			);
		}
	}

	return (
		<SafeAreaView className="flex-1 justify-start items-start p-10">
			<Text className="text-4xl font-bold">Details</Text>
			<View className="h-[1px] w-[100%] bg-primaryLightGrey my-4" />

			<DateTime />

			<View
				className={`flex-1 h-[100px] w-[100%] bg-primaryWhite mt-5 p-4 rounded-xl shadow-md ${
					loading
						? " justify-center items-center"
						: "justify-start items-start"
				}`}
			>
				<ScrollView>{Renderer()}</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default Details;
