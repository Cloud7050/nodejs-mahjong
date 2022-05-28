/* [Imports] */
import { isUuid } from "./id.js";
import { isValidNickname } from "./nickname.js";



/* [Exports] */
export function post(path, data) {
	return fetch(
		path,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: data.toJson()
		}
	);
}

export class HostData {
	static fromJson(json) {
		let { id, nickname } = json;

		if (
			!isUuid(id)
			|| !isValidNickname(nickname)
		) return null;

		return new HostData(id, nickname);
	}

	constructor(
		id,
		nickname
	) {
		Object.assign(
			this,
			{
				id,
				nickname
			}
		);
	}

	toJson() {
		return JSON.stringify(
			{
				id: this.id,
				nickname: this.nickname
			}
		);
	}
}

export class JoinWaitData {
	static fromJson(json) {
		let { inviteCode, nonce } = json;
		return new JoinWaitData(inviteCode, nonce);
	}

	constructor(
		inviteCode,
		nonce
	) {
		Object.assign(
			this,
			{
				inviteCode,
				nonce
			}
		);
	}

	toJson() {
		return JSON.stringify(
			{
				inviteCode: this.inviteCode,
				nonce: this.nonce
			}
		);
	}
}
