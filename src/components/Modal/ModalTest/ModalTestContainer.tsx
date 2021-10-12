import { connect } from "react-redux";
import { Modal } from "./Modal";
import { Dispatch } from "redux";
import {
    addItemFirstPlayer,
    addItemSecondPlayer,
    setLivesFirstPlayer,
    setLivesSecondPlayer,
    removeItemFirstPlayer,
    removeItemSecondPlayer,
    setEtherFirstPlayer,
    setEtherSecondPlayer
} from "../../../redux/players-reducer/actionCreators";
import { IStore } from "../../../redux/types";

interface IMapDispatch {
    readonly setLivesFirstPlayer: (value: number) => void;
    readonly setLivesSecondPlayer: (value: number) => void;
    readonly addItemFirstPlayer: (value: any) => void;
    readonly addItemSecondPlayer: (value: any) => void;
    readonly removeItemSecondPlayer: () => void;
    readonly removeItemFirstPlayer: () => void;
    readonly setEtherFirstPlayer: (value: number) => void;
    readonly setEtherSecondPlayer: (value: number) => void;
}

interface IMapState {
    readonly livesPlayerOne: number;
    readonly livesPlayerTwo: number;
}

const mapStateToProps = (state: IStore): IMapState => {
    return {
        livesPlayerOne: state.playersReducer.playerOne.lives,
        livesPlayerTwo: state.playersReducer.playerTwo.lives
    }
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatch => {
    return {
        setLivesFirstPlayer: (value:number) => dispatch(setLivesFirstPlayer(value)),
        setLivesSecondPlayer: (value:number) => dispatch(setLivesSecondPlayer(value)),
        addItemFirstPlayer: (value) => dispatch(addItemFirstPlayer(value)),
        addItemSecondPlayer: (value) => dispatch(addItemSecondPlayer(value)),
        removeItemSecondPlayer: () => dispatch(removeItemSecondPlayer()),
        removeItemFirstPlayer: () => dispatch(removeItemFirstPlayer()),
        setEtherFirstPlayer: (value: number) => dispatch(setEtherFirstPlayer(value)),
        setEtherSecondPlayer: (value: number) => dispatch(setEtherSecondPlayer(value))
    }
};

export type IProps = IMapDispatch & IMapState;
export const ModalTestContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);