/* [Exports] */
export function isString(potentialString) {
	return (
		typeof potentialString === "string"
		|| potentialString instanceof String
	);
}

export function isObject(potentialObject) {
	// Could be null
	return (
		typeof potentialObject === "object"
		&& !Array.isArray(potentialObject)
	);
}
