import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const FeaturedConstellation = ({ name, description, image }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{name}</Text>
			<Image source={{ uri: image }} style={styles.image} />
			<Text style={styles.description}>{description}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 10,
		marginVertical: 10,
	},
	description: {
		fontSize: 14,
	},
});

export default FeaturedConstellation;
