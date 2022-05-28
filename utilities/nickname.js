/* [Imports] */
import { MAX_NICKNAME_LENGTH } from "./constants.js";
import { isString } from "./miscellaneous.js";



/* [Exports] */
export function toValidNickname(nickname) {
	if (nickname.length === 0) return null;

	return nickname.substring(0, MAX_NICKNAME_LENGTH);
}

export function isValidNickname(nickname) {
	if (nickname === null) return true;

	return (
		isString(nickname)
		&& nickname.length !== 0
		&& nickname.length <= MAX_NICKNAME_LENGTH
	);
}
