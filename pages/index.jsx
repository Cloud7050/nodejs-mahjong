/* [Imports] */
import { StatusCodes } from "http-status-codes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Divider from "../components/bootstrap/divider.jsx";
import LightTile from "../components/bootstrap/lightTile.jsx";
import Spacer from "../components/bootstrap/spacer.jsx";
import utilities from "../styles/utilities.module.css";
import { ensureId, retrieveId } from "../utilities/browser/id.js";
import { retrieveLastInvite, storeLastInvite } from "../utilities/browser/invite.js";
import { toWaitingRoomUrl } from "../utilities/browser/router.js";
import { DEFAULT_NICKNAME, INVITE_CODE_LENGTH, MAX_NICKNAME_LENGTH, PATH_API_HOST, PATH_WAITING_ROOM } from "../utilities/constants.js";
import { HostData, JoinWaitData, post } from "../utilities/http.js";
import { toValidInvite } from "../utilities/invite.js";
import { toValidNickname } from "../utilities/nickname.js";



/* [Exports] */
export default function Index() {
	let router = useRouter();

	let [nickname, setNickname] = useState(null);
	let [isNicknameFocused, setIsNicknameFocused] = useState(false);

	let [filledInvite, setFilledInvite] = useState("");

	let [hostError, setHostError] = useState(null);

	function onNicknameFocus(_event) {
		setIsNicknameFocused(true);
	}

	function onNicknameChange(event) {
		let input = event.target;

		let newNickname = input.value;
		let validNickname = toValidNickname(newNickname);

		setNickname(validNickname);
	}

	function onNicknameBlur(_event) {
		setIsNicknameFocused(false);
	}

	function onInviteChange(event) {
		let input = event.target;

		let newInvite = input.value;
		let validInvite = toValidInvite(newInvite);

		setFilledInvite(validInvite);
	}

	async function onClickHost(_event) {
		setHostError(null);

		let response = await post(
			PATH_API_HOST,
			new HostData(
				retrieveId(),
				nickname
			)
		);

		let statusCode = response.status;
		if (statusCode !== StatusCodes.OK) {
			setHostError(
				`Whoops! Server responded with status code ${statusCode} while trying to start your game`
			);
			return;
		}

		let json = await response.json();
		let data = JoinWaitData.fromJson(json);
		let { inviteCode } = data;

		storeLastInvite(inviteCode);
		router.push(
			toWaitingRoomUrl(inviteCode)
		);
	}

	useEffect(
		() => {
			ensureId();

			// Autofill with last invite for convenience, if relevant
			setFilledInvite(retrieveLastInvite() ?? "");

			router.prefetch(PATH_WAITING_ROOM);
		},
		[]
	);

	return <div className="vh-100 overflow-auto bg-dark">
		<div className="p-3 container">
			<LightTile>
				<div className="d-flex justify-content-center">
					<div className="d-flex flex-column text-center">
						<h1 className="fw-bolder">
							House Rules Mahjong
						</h1>
						<div className="align-self-end badge bg-primary">
							Pre-alpha
						</div>
						<div className="fst-italic">
							Created by Cloud
						</div>
					</div>
				</div>
			</LightTile>

			<hr className="text-light"/>

			<LightTile>
				<div className="mb-2">
					Set your nickname{ " " }
					<div className="badge bg-secondary">
						Optional
					</div>
				</div>
				<div className="d-flex align-items-baseline">
					<div className={ `flex-grow-1 ${utilities.flexBasis0}` }>
						<input
							className="form-control"
							placeholder={ DEFAULT_NICKNAME }
							value={ nickname ?? "" }
							maxLength={ MAX_NICKNAME_LENGTH }

							onFocus={ onNicknameFocus }
							onChange={ onNicknameChange }
							onBlur={ onNicknameBlur }
						/>
					</div>
					<div className={ `flex-grow-1 ${utilities.flexBasis0}` }>
						<div className="px-3">
							{ isNicknameFocused && `${nickname?.length ?? 0}/${MAX_NICKNAME_LENGTH} characters` }
						</div>
					</div>
				</div>
			</LightTile>

			<Spacer />

			<LightTile>
				<h2>
					Join a Hosted Game
				</h2>
				<div className="mb-2">
					Ask your game&apos;s host for the invite code to enter below
				</div>
				<div className="w-50">
					<div className="input-group">
						<input
							className="form-control"
							placeholder="XXXXX"
							value={ filledInvite }
							maxLength={ INVITE_CODE_LENGTH }

							onChange={ onInviteChange }
						/>
						<button
							className="btn btn-success"
							disabled={ filledInvite.length !== INVITE_CODE_LENGTH }
						>
							Join!
						</button>
					</div>
				</div>

				<Divider text="OR" />

				<h2>
					Host a New Game
				</h2>
				<div className="mb-2">
					Start a new game for other players to join
				</div>
				<div className="d-flex align-items-baseline">
					<button
						className="btn btn-success"
						onClick={ onClickHost }
					>
						Host!
					</button>
					<div className="px-3 text-danger">
						{ hostError }
					</div>
				</div>
			</LightTile>

			<hr className="text-light"/>

			<LightTile>
				<div className="text-center">
					<div>
						© ☁ 2022
					</div>
					<div>
						Designed for mobile •{ " " }
						<a href="https://github.com/Cloud7050/nodejs-mahjong">
							GitHub
						</a>
					</div>
				</div>
			</LightTile>
		</div>
	</div>;
}
