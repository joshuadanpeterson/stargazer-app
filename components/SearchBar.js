import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import constellations from "../data/constellations";
import { sendAstronomyApiRequest } from "../utils/astronomyApi";

const SearchBar = ({ navigation }) => {
	const [selectedItem, setSelectedItem] = useState(null);

	// Transform constellations into an array of objects for Dropdown
	const transformedConstellations = Object.values(constellations).map(
		(constellation) => ({
			value: constellation.id,
			label: constellation.name,
		})
	);

	const handleSelectItem = (item) => {
		setSelectedItem(item); // Update the selected item
		console.log(item?.label);
		sendAstronomyApiRequest(item.value); // Fetch data from Astronomy API using the selected constellation ID
		navigation.navigate("ConstellationPage", {
			constellationId: item.value, // Pass the constellation ID to the ConstellationPage
		});
	};

	return (
		<View style={styles.container}>
			<Dropdown
				data={transformedConstellations}
				labelField="label"
				valueField="value"
				placeholder="Search for constellations..."
				value={selectedItem?.value}
				onChange={(item) => handleSelectItem(item)}
				style={styles.dropdown}
			/>

			<TouchableOpacity
				style={styles.submitButton}
				onPress={() => {
					if (selectedItem) {
						console.log(
							"Selected Constellation:",
							selectedItem.label
						);
						navigation.navigate("ConstellationPage", {
							constellationId: selectedItem.value,
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
		alignItems: "center", // Aligns children of the container in the center horizontally
	},
	dropdown: {
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		padding: 10,
		width: "150%", // Adjust width as needed
		alignSelf: "center", // Centers the dropdown within the container
	},
	submitButton: {
		backgroundColor: "lightseagreen",
		padding: 10,
		borderRadius: 5,
		marginTop: 5,
		width: "150%", // Adjust width as needed
		alignSelf: "center", // Centers the button within the container
	},
	submitButtonText: {
		color: "white",
		fontSize: 16,
		textAlign: "center", // Aligns text in the center of the button
	},
});

export default SearchBar;
