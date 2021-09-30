import { Variant } from "../types/Rejection";

const formattor = new Intl.DateTimeFormat("en-GB");

export const datetimeFormatter = (date = new Date()): string => formattor.format(date);

export const generateRandomId = (): string => Math.random().toString(36).slice(2);

export const getStyleStr = (styleObj: Record<string, unknown>): string =>
	Object.keys(styleObj)
		.map(property => `${property}: ${styleObj[property]};`)
		.join("\n");

export const getStyleObj = (variant = Variant.NORMAL): Record<string, unknown> => {
	switch (variant) {
		case Variant.PRIMARY:
			return {
				"background-color": "#009a00",
			};
		case Variant.DANGER:
			return {
				"background-color": "#fc0003",
			};
		default:
			return {
				"background-color": "#efefef",
			};
	}
};
