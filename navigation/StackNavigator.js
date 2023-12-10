import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/HomePage"; // Renamed HomePage to HomeScreen for clarity
import ConstellationPage from "../screens/ConstellationPage";
import BookmarksPage from "../screens/BookmarksPage";
import AboutPage from "../screens/AboutPage";
import SplashScreen from "../screens/SplashScreen";
// Import other screens as needed

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator>
			{/* Renamed "HomePage" to "HomeScreen" for clarity */}
			{/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
			<Stack.Screen
				name="ConstellationPage"
				component={ConstellationPage}
			/>
			{/* Add other screens here */}
			<Stack.Screen name="BookmarksPage" component={BookmarksPage} />
			<Stack.Screen name="AboutPage" component={AboutPage} />
			<Stack.Screen name="SplashScreen" component={SplashScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
