import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import BookmarksPage from "../screens/BookmarksPage";
import AboutPage from "../screens/AboutPage";
import CustomDrawerContent from "../components/CustomDrawerContent";
// Import other necessary screens

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen name="HomePage" component={StackNavigator} />
			<Drawer.Screen name="Bookmarks" component={BookmarksPage} />
			<Drawer.Screen name="About" component={AboutPage} />
			{/* Add other screens as needed */}
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
