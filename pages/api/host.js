/* [Imports] */
import { StatusCodes } from "http-status-codes";
import { isUuid } from "../../utilities/id.js";
import { toValidNickname } from "../../utilities/nickname.js";



/* [Exports] */
export default function(request, response) {
	let { body } = request;
	if (body === null) {
		response.status(StatusCodes.BAD_REQUEST);
		response.send();
		return;
	}

	let object = {};
	try {
		object = JSON.parse(body);
	} catch (_error) {
		response.status(StatusCodes.BAD_REQUEST);
		response.send();
		return;
	}

	let { id, nickname } = object;
	if (!isUuid(id)) {
		response.status(StatusCodes.BAD_REQUEST);
		response.send();
		return;
	}

	nickname = toValidNickname(nickname);

	//TODO create game as waiting room in db, with that ID & nickname

	response.status(StatusCodes.OK);
	response.json({
		inviteCode: "TODOO"
	});
}
