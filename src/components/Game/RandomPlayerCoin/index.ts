import { connect } from "react-redux";
import { RandomPlayerCoin } from "./RandomPlayerCoin";
import { Dispatch } from "redux";
import { setGameStep, setInitialOrder, setPlayerOrder } from "../../../redux/game-reducer/actionsCreators";
import { IStore } from "../../../redux/types";
import { gameSteps } from "../../../redux/game-reducer/constants";

interface IMapState {
	readonly playerOrder: number;
}

interface IMapDispatch {
	readonly chooseFirstPlayer: (value: number) => void;
	readonly setSelectionType: () => void;
}

function mapStateToProps (state: IStore): IMapState {
	const { playerOrder } = state.gameReducer;

	return {playerOrder};
}

function mapDispatchToProps (dispatch: Dispatch): IMapDispatch {
	return {
		chooseFirstPlayer: (value) => {
			dispatch(setPlayerOrder(value))
			dispatch(setInitialOrder(value))
		},
		setSelectionType: () => dispatch(setGameStep(gameSteps.SELECTION_STAGE))
	};
}

export type IProps = IMapState & IMapDispatch;

export const RandomPlayerCoinContainer = connect(mapStateToProps,mapDispatchToProps)(RandomPlayerCoin);
