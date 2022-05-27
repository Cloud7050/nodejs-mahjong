/* [Imports] */
import { MAX_NICKNAME_LENGTH } from "./constants.js";



/* [Exports] */
export function toValidNickname(nickname) {
	if (
		typeof nickname !== "string"
		|| nickname.length === 0
	) return null;

	return nickname.substring(0, MAX_NICKNAME_LENGTH);
}
