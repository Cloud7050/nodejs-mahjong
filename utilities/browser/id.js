/* eslint-env browser */



/* [Imports] */
import { l } from "../logging.js";
import { KEY_ID } from "../constants.js";



/* [Main] */
function storeNewId() {
	let newId = crypto.randomUUID();

	localStorage.setItem(
		KEY_ID,
		newId
	);

	return newId;
}



/* [Exports] */
export function retrieveId() {
	return localStorage.getItem(KEY_ID);
}

export function ensureId() {
	let id = retrieveId();

	if (id !== null) {
		l(`ID exists: ${id}`);
		return;
	}

	id = storeNewId();
	l(`Created & stored new ID: ${id}`);
}
