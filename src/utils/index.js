const formatNumberForDate = (num) => `${(num + "").padStart(2, "0")}`;

export const datetimeFormatter = (date = new Date()) =>
	`${formatNumberForDate(date.getDate())}/${formatNumberForDate(
		date.getMonth() + 1
	)}/${date.getFullYear()}`;

export const generateRandomId = () => Math.random().toString(36).slice(2);
