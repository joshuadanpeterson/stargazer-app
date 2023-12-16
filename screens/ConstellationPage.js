import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import fetchConstellationExtract from "../data/fetchConstellationExtract"; // Adjust the path as needed

const ConstellationPage = ({ route, navigation }) => {
	const [extract, setExtract] = useState("");
	const [image, setImage] = useState(null);

	// Safe access to constellationId with default value
	const constellationId = route.params?.constellationId || "defaultId";

	useEffect(() => {
		// Ensure constellationId is available
		if (!constellationId || constellationId === "defaultId") {
			// Handle the scenario where constellationId is not available
			console.error("Constellation ID is missing");
			navigation.goBack(); // Navigate back if constellationId is not available
			return;
		}

		const fetchData = async () => {
			const extractData = await fetchConstellationExtract(
				constellationId
			);
			if (extractData) {
				setExtract(extractData.formattedExtract); // Assuming extractData contains the formatted extract
			}
			// TODO: Fetch image from Astronomy API and update the image state
		};

		fetchData();
	}, [constellationId, navigation]);

	// Rendering only if constellationId is available and not default
	if (!constellationId || constellationId === "defaultId") {
		return <Text>Loading or invalid constellation...</Text>;
	}

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>
				{constellations[constellationId]?.name ||
					"Unknown Constellation"}
			</Text>
			{image && <Image source={{ uri: image }} style={styles.image} />}
			<Text style={styles.extract}>{extract}</Text>
		</ScrollView>
	);
};

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
	image: {
		width: "100%",
		height: 200, // Adjust accordingly
		resizeMode: "contain",
	},
	extract: {
		fontSize: 16,
		marginTop: 10,
	},
});

export default ConstellationPage;
