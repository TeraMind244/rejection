export const getObj = <T extends object>(key: string): T | null =>
	JSON.parse(localStorage.getItem(key));

export const setObj = <T extends object>(key: string, obj: T): void => {
	localStorage.setItem(key, JSON.stringify(obj));
};
