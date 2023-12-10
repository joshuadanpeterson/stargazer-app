import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import DrawerNavigator from "./navigation/DrawerNavigator";
import SplashScreen from "./screens/SplashScreen";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate a loading delay or wait for specific conditions to be met
		setTimeout(() => {
			setIsLoading(false);
		}, 3000); // 3000 milliseconds = 3 seconds
	}, []);

	if (isLoading) {
		return <SplashScreen />;
	}

	return (
		<ReduxProvider store={store}>
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		</ReduxProvider>
	);
};

export default App;
