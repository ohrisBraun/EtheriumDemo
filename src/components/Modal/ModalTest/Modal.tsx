import React from 'react';
import style from './Modal.module.scss';
import ReactDOM from "react-dom";
import { IProps } from "./ModalTestContainer";
import { uid } from "uid";
import { playerActions, randomNumber, rules } from "../../Game/SelectionStage/utils";

let rootModal = document.createElement('div');
rootModal.id = 'testModal';
document.body.appendChild(rootModal);

export const Modal: React.FunctionComponent<IProps> = (props) => {
    const {
        setLivesFirstPlayer,
        setLivesSecondPlayer,
        addItemSecondPlayer,
        addItemFirstPlayer,
        removeItemSecondPlayer,
        removeItemFirstPlayer,
        livesPlayerOne,
        livesPlayerTwo,
        setEtherFirstPlayer,
        setEtherSecondPlayer
    } = props;

    const etherRef = React.useRef<HTMLInputElement>(null);
    const livesRef = React.useRef<HTMLInputElement>(null);

    const onSetterEtherFirstPlayer = () => {
        const val = etherRef?.current?.value;
        setEtherFirstPlayer(+val!)
    };
    const onSetterEtherSecondPlayer = () => {
        const val = etherRef?.current?.value;
        setEtherSecondPlayer(+val!)
    };
    const onSetterLivesFirstPlayer = () => {
        const val = livesRef?.current?.value;
        setLivesFirstPlayer(+val!)
    };
    const onSetterLivesSecondPlayer = () => {
        const val = livesRef?.current?.value;
        setLivesSecondPlayer(+val!)
    };

    return ReactDOM.createPortal(
        <div className={style.modal}>
            <div className={style.modalFunction}>
                <span> Add Item To Player</span>
                <button onClick={() => {
                    addItemFirstPlayer({
                        id: uid(),
                        value: playerActions[randomNumber(rules.ITEM_VARIANTS)]
                    })
                }}> FIRST
                </button>
                <button onClick={() => {
                    addItemSecondPlayer({
                        id: uid(),
                        value: playerActions[randomNumber(rules.ITEM_VARIANTS)]
                    })
                }}> SECOND
                </button>
            </div>
            <div className={style.modalFunction}>
                <span>Remove item of player</span>
                <button onClick={() => {
                    removeItemFirstPlayer()
                }}> FIRST
                </button>
                <button onClick={() => {
                    removeItemSecondPlayer()
                }}> SECOND
                </button>
            </div>
            <div className={style.modalFunction}>
                <span> Set Live Point Of Player</span>
                <input type="number" ref={livesRef}/>
                <button onClick={onSetterLivesFirstPlayer} disabled={!Boolean(livesPlayerOne)}> FIRST</button>
                <button onClick={onSetterLivesSecondPlayer} disabled={!Boolean(livesPlayerTwo)}> SECOND</button>
            </div>
            <div className={style.modalFunction}>
                <span>Set ether to  player </span>
                <input type="number" ref={etherRef}/>
                <button onClick={onSetterEtherFirstPlayer}>
                    FIRST
                </button>
                <button onClick={onSetterEtherSecondPlayer}>
                    SECOND
                </button>
            </div>
        </div>,
        rootModal
    );
};

