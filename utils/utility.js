// utility.js
export const getCurrentDate = () => {
	const date = new Date();
	return date.toISOString().split("T")[0]; // Format: "YYYY-MM-DD"
};
