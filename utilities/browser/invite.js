/* eslint-env browser */



/* [Imports] */
import { KEY_LAST_INVITE } from "../constants.js";



/* [Exports] */
export function storeLastInvite(lastInvite) {
	localStorage.setItem(
		KEY_LAST_INVITE,
		lastInvite
	);
}

export function retrieveLastInvite() {
	return localStorage.getItem(KEY_LAST_INVITE);
}
