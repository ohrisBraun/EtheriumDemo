import React from "react";
import { IProps } from "./ModalWinContainer";
import style from './Modal.module.scss'
import ReactDOM from "react-dom";

let playerModal = document.createElement('div');
playerModal.id = 'playerModal';
document.body.appendChild(playerModal);

export const Modal: React.FunctionComponent<IProps> = (props) => {

	const {
		livesPlayerOne
	} = props;

	const reload = () => {
		window.location.reload()
	}

	return ReactDOM.createPortal(
		<div className={ style.wrapper }>
			<div>
				<p>PLAYER { livesPlayerOne ? 'ONE' : 'TWO' } WIN</p>
				<p onClick={reload}>Reload the page to continue</p>
			</div>
		</div>
		, playerModal)
};
