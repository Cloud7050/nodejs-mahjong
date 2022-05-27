/* [Exports] */
export function isUuid(string) {
	// Not NIL UUID
	return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/u.test(string);
}
