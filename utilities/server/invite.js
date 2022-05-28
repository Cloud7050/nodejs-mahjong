/* [Imports] */

import { database } from "../../data/database.js";
import { INVITE_CHARACTERS, INVITE_CODE_LENGTH } from "../constants.js";



/* [Main] */
function generateInvite() {
	let inviteCode = "";
	while (inviteCode.length < INVITE_CODE_LENGTH) {
		let randomCharacter = INVITE_CHARACTERS.charAt(
			Math.floor(
				Math.random() * INVITE_CHARACTERS.length
			)
		);
		inviteCode += randomCharacter;
	}
	return inviteCode;
}



/* [Exports] */
export async function generateUniqueInvite() {
	let inviteCode = null;
	while (inviteCode === null) {
		let potentiallyUnique = generateInvite();

		// eslint-disable-next-line no-await-in-loop
		let potentialGame = await database.getGameByInvite(potentiallyUnique);
		if (potentialGame === null) inviteCode = potentiallyUnique;
	}
	return inviteCode;
}
