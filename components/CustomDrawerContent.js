import React from "react";
import { View, StyleSheet } from "react-native";
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.drawerHeader}>
				{/* Add header content here, e.g., app logo, user info */}
			</View>
			<DrawerItemList {...props} />
			{/* You can add additional items or custom components here */}
			<DrawerItem
				label="Logout"
				onPress={() => console.log("Logout Pressed")} // Replace with actual logout logic
			/>
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	drawerHeader: {
		height: 150, // Customize as per your design
		// Add styles for your header
	},
	// Additional styles
});

export default CustomDrawerContent;
