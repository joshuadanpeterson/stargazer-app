import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { baseApiUrl } from "../data/baseApiUrl"; // Adjust the import path

const ConstellationCard = ({ name, shortURL }) => {
	const [extract, setExtract] = useState("");

	useEffect(() => {
		// Fetch the extract from Wikipedia
		const url = `${baseApiUrl}${shortURL}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const page_id = Object.keys(data.query.pages)[0];
				setExtract(data.query.pages[page_id].extract);
			});
	}, [shortURL]);

	return (
		<View style={styles.card}>
			{/* Image and Title */}
			<Text style={styles.extract}>{extract}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		borderRadius: 8,
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 },
		elevation: 3,
		marginVertical: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 120,
	},
	title: {
		padding: 10,
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default ConstellationCard;
