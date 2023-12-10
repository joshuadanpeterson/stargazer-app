import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BookmarksPage = () => {
	return (
		<View style={styles.container}>
			<Text>Bookmarks Page</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default BookmarksPage;
