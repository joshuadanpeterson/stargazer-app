import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>StarGazer App</Text>
			{/* Add any additional splash screen elements here */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
	},
	logo: {
		width: 100,
		height: 100,
		marginBottom: 20,
	},
});

export default SplashScreen;
