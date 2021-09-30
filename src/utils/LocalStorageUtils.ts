export const getObj = <T extends unknown>(key: string): T | null => JSON.parse(localStorage.getItem(key));

export const setObj = <T extends unknown>(key: string, obj: T): void => {
	localStorage.setItem(key, JSON.stringify(obj));
};
