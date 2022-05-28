/* [Imports] */
import { StatusCodes } from "http-status-codes";
import { database, Game, Player } from "../../data/database.js";
import { HostData, JoinWaitData } from "../../utilities/http.js";
import { isObject } from "../../utilities/miscellaneous.js";



/* [Exports] */
export default async function(request, response) {
	function badRequest() {
		response.status(StatusCodes.BAD_REQUEST);
		response.send();
	}

	let { body } = request;
	if (!isObject(body)) {
		badRequest();
		return;
	}
	let json = body;

	let data = HostData.fromJson(json);
	if (data === null) {
		badRequest();
		return;
	}

	let game = await Game.automatic(
		new Player(
			data.id,
			data.nickname
		)
	);
	await database.addGame(game);

	response.status(StatusCodes.OK);
	response.json(
		new JoinWaitData(
			game.inviteCode,
			game.gamePlayers[0].nonce
		)
	);
}
