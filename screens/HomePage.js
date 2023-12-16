import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	Text,
} from "react-native";
import SearchBar from "../components/SearchBar";
import FeaturedConstellation from "../components/FeaturedConstellation";
import constellations from "../data/constellations"; // Import constellations data
import { sendAstronomyApiRequest } from "../utils/astronomyApi";

const HomePage = ({ navigation }) => {
	const [featuredConstellation, setFeaturedConstellation] = useState(null);

	useEffect(() => {
		const fetchFeaturedConstellation = async () => {
			// Select a random constellation
			const randomConstellationId =
				Object.keys(constellations)[
					Math.floor(
						Math.random() * Object.keys(constellations).length
					)
				];
			const constellationName =
				constellations[randomConstellationId].name;

			try {
				// Fetch image from Astronomy API
				const imageUrl = await sendAstronomyApiRequest(
					randomConstellationId
				); // This function should return the image URL
				setFeaturedConstellation({
					name: constellationName,
					image: imageUrl,
				});
			} catch (error) {
				console.error("Error fetching constellation image:", error);
			}
		};

		fetchFeaturedConstellation();
	}, []);

	if (!featuredConstellation) return <Text>Loading...</Text>;

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
		>
			<FeaturedConstellation
				name={featuredConstellation.name}
				image={featuredConstellation.image}
			/>
			<View style={styles.searchContainer}>
				<SearchBar navigation={navigation} />
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	searchContainer: {
		flex: 1,
		width: "50%",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 20,
		paddingBottom: 270,
	},
});

export default HomePage;
