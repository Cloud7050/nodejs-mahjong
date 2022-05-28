/* [Imports] */



/* [Exports] */
export function toValidInvite(inviteCode) {
	let lettersOnly = inviteCode.replace(/[^a-z]/iu, "");
	let uppercaseLetters = lettersOnly.toUpperCase();
	return uppercaseLetters;
}
