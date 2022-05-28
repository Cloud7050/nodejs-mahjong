/* [Imports] */
import { JSONFile, Low } from "lowdb";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { DATABASE_NAME } from "../source/constants.js";



/* [Main] */
class Data {
	constructor() {
		Object.assign(
			this,
			{
				gameCounter: 0,
				games: []
			}
		);
	}
}

class Game {
	constructor(
		id,
		inviteCode,
		gamePlayers
	) {
		Object.assign(
			this,
			{
				id,
				inviteCode,
				gamePlayers
			}
		);
	}
}

class GamePlayer {
	constructor(
		id,
		nonce,
		nickname
	) {
		Object.assign(
			this,
			{
				id,
				nonce,
				nickname
			}
		);
	}
}



/* [Exports] */
export class Database {
	constructor() {
		let filePath = join(
			dirname(fileURLToPath(import.meta.url)),
			`${DATABASE_NAME}.json`
		);
		let adapter = new JSONFile(filePath);
		let low = new Low(adapter);

		Object.assign(
			this,
			{ low }
		);
	}

	async ensureInitialised() {
		await this.low.read();

		if (this.low.data !== null) return;

		this.low.data = new Data();
		await this.low.write();
	}
}
