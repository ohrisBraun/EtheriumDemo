import React from "react";
import { connect } from "react-redux";
import { Modal } from "./Modal";
import { IStore } from "../../../redux/types";

interface IMapState {
    readonly livesPlayerOne: number;
}

const mapStateToProps = (state:IStore):IMapState => {
    return {
        livesPlayerOne: state.playersReducer.playerOne.lives,
    }
};

export type IProps = IMapState;
export const ModalWinContainer = connect(mapStateToProps)(Modal);
