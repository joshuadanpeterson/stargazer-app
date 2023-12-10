// Assuming constellations.js is in the same directory
import constellations from "./constellations";
import { baseApiUrl } from "./baseApiUrl"; // Make sure the path is correct

const fetchConstellationExtract = async (constellationId) => {
	const shortURL = constellations[constellationId].shortURL;
	const url = `${baseApiUrl}${shortURL}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		const pageId = Object.keys(data.query.pages)[0];
		const extract = data.query.pages[pageId].extract;

		// Splitting paragraphs and adding two newlines as separator
		const paragraphs = extract.split("\n");
		const formattedExtract = paragraphs
			.filter((p) => p.trim())
			.join("\n\n");

		console.log(`Name: ${constellations[constellationId].name}`);
		console.log(`Extract: ${formattedExtract}`);
	} catch (error) {
		console.error("Error fetching constellation data:", error);
	}
};

export default fetchConstellationExtract;
