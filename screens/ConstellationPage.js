import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	Button,
} from "react-native";
import fetchConstellationExtract from "../data/fetchConstellationExtract"; // Adjust the path as needed

const ConstellationPage = ({ route }) => {
	const [extract, setExtract] = useState("");
	const [image, setImage] = useState(null);
	const { constellationId } = route.params; // Assuming you are passing the constellation ID through route

	useEffect(() => {
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
	}, [constellationId]);

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>
				{constellations[constellationId].name}
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
