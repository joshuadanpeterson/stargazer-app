import Geolocation from "react-native-geolocation-service";
import { PermissionsAndroid, Platform, Linking } from "react-native";
import {
	check,
	PERMISSIONS,
	RESULTS,
	openSettings,
} from "react-native-permissions";

async function requestLocationPermission() {
	if (Platform.OS === "android") {
		try {
			const result = await check(
				PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
			);

			switch (result) {
				case RESULTS.UNAVAILABLE:
					console.log(
						"This feature is not available (on this device / in this context)"
					);
					break;
				case RESULTS.DENIED:
					const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
						{
							title: "Location Access Required",
							message: "This app needs to access your location",
						}
					);
					if (granted === PermissionsAndroid.RESULTS.GRANTED) {
						console.log("Location permission granted");
					} else {
						console.log("Location permission denied");
						Linking.openSettings(); // This will open app's settings
					}
					break;
				case RESULTS.GRANTED:
					console.log("The permission is granted");
					break;
				case RESULTS.BLOCKED:
					console.log(
						"The permission is denied and not requestable anymore"
					);
					Linking.openSettings(); // This will open app's settings
					break;
			}
		} catch (error) {
			console.warn(error);
		}
	}
}

export const getLocation = async () => {
	const hasPermission = await requestLocationPermission();
	if (!hasPermission) {
		return;
	}

	Geolocation.getCurrentPosition(
		(position) => {
			console.log(
				"Latitude:",
				position.coords.latitude,
				"Longitude:",
				position.coords.longitude
			);
		},
		(error) => {
			console.error("Location Error:", error.code, error.message);
		},
		{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
	);
};
