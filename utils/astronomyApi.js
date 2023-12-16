import { getLocation } from "./getLocation";
import { APPLICATION_ID, APPLICATION_SECRET } from "@env";
import { encode as btoa } from "base-64";
import { getCurrentDate } from "./utility"; // Adjust the path as needed

const authString = btoa(`${APPLICATION_ID}:${APPLICATION_SECRET}`);

export const sendAstronomyApiRequest = async (constellationId) => {
	const currentDate = getCurrentDate();
	const { latitude, longitude } = await getLocation();

	const data = JSON.stringify({
		style: "navy",
		observer: {
			latitude: latitude,
			longitude: longitude,
			date: currentDate,
		},
		view: {
			type: "constellation",
			parameters: {
				constellation: constellationId,
			},
		},
	});

	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
			console.log(this.responseText);
		}
	});

	xhr.open("POST", "https://api.astronomyapi.com/api/v2/studio/star-chart");
	xhr.setRequestHeader("Authorization", `Basic ${authString}`);
	xhr.send(data);
};

// Call this function with the selected constellation ID
sendAstronomyApiRequest("ori"); // Replace "ori" with the actual ID from SearchBar
