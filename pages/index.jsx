/* [Imports] */
import { useEffect, useState } from "react";
import Divider from "../components/bootstrap/divider.jsx";
import LightTile from "../components/bootstrap/lightTile.jsx";
import Spacer from "../components/bootstrap/spacer.jsx";
import { ensureId } from "../utilities/browser/id.js";
import { DEFAULT_NICKNAME, INVITE_CODE_LENGTH, MAX_NICKNAME_LENGTH } from "../utilities/constants.js";
import utilities from "../styles/utilities.module.css";
import { l } from "../utilities/logging.js";



/* [Exports] */
export default function Index() {
	let [isNicknameFocused, setIsNicknameFocused] = useState(false);
	let [nickname, setNickname] = useState(null);

	let [isInviteFilled, setIsInviteFilled] = useState(false);

	function onNicknameFocus(_event) {
		setIsNicknameFocused(true);
	}

	function onNicknameChange(event) {
		let newNickname = event.target.value;
		if (newNickname.length === 0) newNickname = null;

		setNickname(newNickname);
	}

	function onNicknameBlur(_event) {
		setIsNicknameFocused(false);
	}

	function onInviteChange(event) {
		let { value } = event.target;
		let lettersOnly = value.replace(/[^a-z]/iu, "");
		let uppercaseLetters = lettersOnly.toUpperCase();

		setIsInviteFilled(uppercaseLetters.length === INVITE_CODE_LENGTH);
		event.target.value = uppercaseLetters;
	}

	useEffect(
		() => {
			ensureId();
		},
		[]
	);

	return <div className="vh-100 overflow-auto bg-dark">
		<div className="p-3 container">
			<LightTile>
				<div className="text-center">
					<div className="fs-1 fw-bolder">
						House Rules Mahjong
					</div>
					<div className="fst-italic">
						Created by Cloud
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
							maxLength={ MAX_NICKNAME_LENGTH }

							onFocus={ onNicknameFocus }
							onChange={ onNicknameChange }
							onBlur={ onNicknameBlur }
						/>
					</div>
					<div className={ `flex-grow-1 ${utilities.flexBasis0}` }>
						<div className="ps-3">
							{ isNicknameFocused && `${nickname?.length ?? 0}/${MAX_NICKNAME_LENGTH} characters` }
						</div>
					</div>
				</div>
			</LightTile>

			<Spacer />

			<LightTile>
				<div className="mb-2 fs-2 fw-bold">
					Join a Hosted Game
				</div>
				<div className="mb-2">
					Ask your game&apos;s host for the invite code to enter below
				</div>
				<div className="w-50">
					<div className="input-group">
						<input
							className="form-control"
							placeholder="XXXXX"
							maxLength={ INVITE_CODE_LENGTH }

							onChange={ onInviteChange }
						/>
						<button
							className="btn btn-success"
							disabled={ !isInviteFilled }
						>Join!</button>
					</div>
				</div>

				<Divider text="OR" />

				<div className="mb-2 fs-2 fw-bold">
					Host a New Game
				</div>
				<div className="mb-2">
					Start a new game for other players to join
				</div>
				<button className="btn btn-success">Host!</button>
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
