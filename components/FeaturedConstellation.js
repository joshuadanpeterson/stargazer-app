import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const FeaturedConstellation = ({ name, description, image }) => {
	return (
		<View>
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<Text style={styles.title}>{name}</Text>
				<Image source={{ image }} style={styles.image} />
				{/* <Text style={styles.description}>{description}</Text> */}
			</TouchableOpacity>
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
		alignItems: "center",
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
