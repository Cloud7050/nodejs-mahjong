/* [Imports] */
import { PATH_WAITING_ROOM } from "../constants.js";



/* [Exports] */
export function toWaitingRoomUrl(inviteCode) {
	return {
		pathname: PATH_WAITING_ROOM,
		query: {
			c: inviteCode
		}
	};
}
