import React, { useState, useCallback, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

import constellations from "../data/constellations";

const SearchBar = ({ navigation }) => {
	const [selectedItem, setSelectedItem] = useState(null);
	const dropdownController = useRef(null);

	// Transform constellations into an array of objects for AutocompleteDropdown
	const transformedConstellations = Object.values(constellations).map(
		(constellation) => ({
			id: constellation.id,
			title: constellation.name,
		})
	);

	const handleSelectItem = useCallback((item) => {
		selectedItem(item); // Update the selected item
		console.log(item?.title);
		// Add navigation logic here if needed
	}, []);

	// Handle clear action
	const onClear = useCallback(() => {
		setSelectedItem(null);
	}, []);

	return (
		<View style={styles.container}>
			<AutocompleteDropdown
				dataSet={transformedConstellations}
				onItemSelect={handleSelectItem}
				searchKey="title"
				placeholder="Search for constellations..."
				placeholderTextColor="gray"
				listContainerStyle={{ backgroundColor: "white" }}
				listItemContainerStyle={{ padding: 10 }}
				listItemTextStyle={{ color: "black" }}
				inputContainerStyle={{
					borderWidth: 1,
					borderColor: "gray",
					borderRadius: 5,
				}}
				inputStyle={{ fontSize: 14, color: "black" }}
				listItemStyle={{ padding: 10 }}
				onClear={onClear}
				ref={dropdownController}
				useFilter={true}
				debounce={300} // Adjust debounce time as needed
			/>

			<TouchableOpacity
				style={styles.submitButton}
				onPress={() => {
					if (selectedItem) {
						console.log(
							"Selected Constellation:",
							selectedItem.title
						);
						navigation.navigate("ConstellationPage", {
							constellationId: selectedItem.id,
						});
					} else {
						console.log("No constellation selected");
						// Optionally, show an alert or notification to the user
					}
				}}
			>
				<Text style={styles.submitButtonText}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		width: "100%",
	},
	submitButton: {
		backgroundColor: "lightseagreen",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
		marginTop: 5,
		width: "100%",
	},
	submitButtonText: {
		color: "white",
		fontSize: 16,
	},
});

export default SearchBar;
