/* eslint-env browser */



/* [Imports] */
import { l } from "../logging.js";
import { KEY_ID } from "../constants.js";



/* [Main] */
function createId() {
	return crypto.randomUUID();
}

function storeId(id) {
	localStorage.setItem(
		KEY_ID,
		id
	);
}

function retrieveId() {
	return localStorage.getItem(KEY_ID);
}



/* [Exports] */
export function getId() {
	let id = retrieveId();

	if (id === null) {
		id = createId();
		storeId(id);
		l(`Created & stored new ID: ${id}`);
	} else {
		l(`Retrieved existing ID: ${id}`);
	}

	return id;
}
