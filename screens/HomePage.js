import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import SearchBar from "../components/SearchBar";

const HomePage = ({ navigation }) => {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
		>
			<View style={styles.searchContainer}>
				<SearchBar navigation={navigation} />
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center", // Adjust this to control vertical alignment
		alignItems: "center", // Adjust this to control horizontal alignment
	},
	searchContainer: {
		flex: 1,
		width: "50%",
		justifyContent: "flex-start", // Adjust this to control the layout
		alignItems: "center",
		paddingTop: 20,
		paddingBottom: 270, // Adjust padding as needed
	},
});

export default HomePage;
