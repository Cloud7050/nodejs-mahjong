/* [Exports] */
export function isString(potentialString) {
	return (
		typeof potentialString === "string"
		|| potentialString instanceof String
	);
}

export function isObject(potentialObject) {
	return (
		potentialObject !== null
		&& typeof potentialObject === "object"
		&& !Array.isArray(potentialObject)
	);
}
