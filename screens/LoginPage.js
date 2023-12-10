import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LoginPage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Login to StarGazer</Text>
			{/* Add form elements here */}
			<Button title="Login" onPress={() => navigation.navigate("Home")} />
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
		fontSize: 20,
		marginBottom: 20,
	},
});

export default LoginPage;
