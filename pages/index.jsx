/* [Imports] */
import { useEffect, useState } from "react";
import Divider from "../components/bootstrap/divider.jsx";
import LightTile from "../components/bootstrap/lightTile.jsx";
import Spacer from "../components/bootstrap/spacer.jsx";
import { ensureId } from "../utilities/browser/id.js";
import { DEFAULT_NICKNAME, MAX_NICKNAME_LENGTH } from "../utilities/constants.js";
import utilities from "../styles/utilities.module.css";



/* [Exports] */
export default function Index() {
	let [isNicknameFocused, setIsNicknameFocused] = useState(false);
	let [nickname, setNickname] = useState(null);

	function onNicknameFocus(_event) {
		setIsNicknameFocused(true);
	}

	function onNicknameChange(event) {
		let newNickname = event.target.value ?? null;
		setNickname(newNickname);
	}

	function onNicknameBlur(_event) {
		setIsNicknameFocused(false);
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
					<div className={ `ps-3 flex-grow-1 ${utilities.flexBasis0}` }>
						{ isNicknameFocused && `${nickname?.length ?? 0}/${MAX_NICKNAME_LENGTH} characters` }
					</div>
				</div>
			</LightTile>

			<Spacer />

			<LightTile>
				<div className="mb-2 fs-2 fw-bold">
					Join a Hosted Game
				</div>
				<div className="mb-2">
					Ask your game&apos;s host for the invite code
				</div>
				<div className="w-50">
					<div className="input-group">
						<input
							className="form-control"
							placeholder="XXXXX"
						/>
						<button className="btn btn-success">Join!</button>
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
