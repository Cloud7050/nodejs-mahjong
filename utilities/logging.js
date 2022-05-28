/* [Imports] */
import { isString } from "./miscellaneous.js";



/* [Exports] */
export function l(content, group = false) {
	let consoleFunction = (!group) ? console.log : console.group;
	consoleFunction(
		!isString(content) ? content : `>>> ${content}`
	);
}

export function w(content) {
	console.warn(
		!isString(content) ? content : `[!] ${content}`
	);
}

export function e(content) {
	console.error(
		!isString(content) ? content : `ERR ${content}`
	);
}

export function d(content) {
	console.debug(
		!isString(content) ? content : `*** ${content}`
	);
}
