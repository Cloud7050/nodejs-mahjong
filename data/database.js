/* [Imports] */
import { JSONFile, Low } from "lowdb";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { DATABASE_NAME, DEFAULT_NICKNAME } from "../utilities/constants.js";
import { generateUniqueInvite } from "../utilities/server/invite.js";



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

class Database {
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

	async useGameCounter() {
		await this.ensureInitialised();

		// Increment before assign
		let gameCounter = ++this.low.data.gameCounter;

		await this.low.write();

		return gameCounter;
	}

	async getGameByInvite(inviteCode) {
		await this.ensureInitialised();

		let games = this.low.data.games;
		for (let game of games) {
			if (game.inviteCode === inviteCode) return game;
		}

		return null;
	}

	async addGame(game) {
		await this.ensureInitialised();

		let games = this.low.data.games;
		games.push(game);

		await this.low.write();
	}
}



/* [Exports] */
export let database = new Database();

export class Game {
	constructor(
		id,
		inviteCode,
		nonceCounter,
		gamePlayers,

		isWaitingRoom = true
	) {
		Object.assign(
			this,
			{
				id,
				inviteCode,
				isWaitingRoom,
				nonceCounter,
				gamePlayers
			}
		);
	}

	//TODO pass id/nickname (no player), create game with no players and default 0 nonce counter,
	// add player to game using static method and return nonce, return nonce again for host API send
	static async automatic(player) {
		let nonceCounter = 0;
		let firstPlayerNonce = ++nonceCounter;
		let firstGamePlayer = player.toGamePlayer(firstPlayerNonce);

		return new Game(
			await database.useGameCounter(),
			await generateUniqueInvite(),
			firstPlayerNonce,
			[firstGamePlayer]
		);
	}
}

export class Player {
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

	toGamePlayer(nonce) {
		// eslint-disable-next-line no-use-before-define
		return new GamePlayer(
			this.id,
			nonce,
			this.nickname ?? `${DEFAULT_NICKNAME}#${nonce}`
		);
	}
}

class GamePlayer extends Player {
	constructor(
		id,
		nonce,
		nickname
	) {
		super(id, nickname);

		Object.assign(
			this,
			{ nonce }
		);
	}
}
