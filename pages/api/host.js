/* [Imports] */
import { StatusCodes } from "http-status-codes";
import { HostData, JoinWaitData } from "../../utilities/http.js";
import { isObject } from "../../utilities/miscellaneous.js";



/* [Exports] */
export default function(request, response) {
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

	//TODO create game as waiting room in db, with that ID & nickname

	response.status(StatusCodes.OK);
	response.json(
		new JoinWaitData(
			"TODOO",
			1
		)
	);
}
