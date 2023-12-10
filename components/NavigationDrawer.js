import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../screens/HomePage";
import BookmarksPage from "../screens/BookmarksPage";
import AboutPage from "../screens/AboutPage";
// Import other screens as needed

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="HomePage" component={HomePage} />
			<Drawer.Screen name="Bookmarks" component={BookmarksPage} />
			<Drawer.Screen name="About" component={AboutPage} />
			{/* Add other screens as needed */}
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
