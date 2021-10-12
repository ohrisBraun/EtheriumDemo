import { connect } from "react-redux";
import { Game } from "./Game";
import { IStore } from "../../redux/types";

interface IMapState {
	readonly gameStep: string;
	readonly playerOrder: number;
	readonly livesPlayerOne: number;
	readonly livesPlayerTwo: number;
}

function mapStateToProps(state: IStore): IMapState {
	const { gameStep, playerOrder } = state.gameReducer;

	return {
		gameStep, playerOrder,
		livesPlayerOne: state.playersReducer.playerOne.lives,
		livesPlayerTwo: state.playersReducer.playerTwo.lives
	};
}

export type IProps = IMapState;

export const GameContainer = connect(mapStateToProps)(Game)