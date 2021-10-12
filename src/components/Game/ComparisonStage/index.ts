import { connect } from "react-redux";
import { ComparisonStage } from "./ComparisonStage";
import { IItemType, IStore } from "../../../redux/types";
import { Dispatch } from "redux";
import {
	resetItemsOfPlayers,
	setEtherFirstPlayer, setEtherSecondPlayer,
	setLivesFirstPlayer,
	setLivesSecondPlayer
} from "../../../redux/players-reducer/actionCreators";
import {
	resetComparisonStage,
	setComparisonIndex,
	setComparisonItems,
	setComparisonStart,
	setGameStep
} from "../../../redux/game-reducer/actionsCreators";
import { IComparisonItems } from "../../../redux/game-reducer/types";
import { gameSteps } from "../../../redux/game-reducer/constants";

interface IMapState {
	readonly playerOneItems: ReadonlyArray<IItemType>;
	readonly playerTwoItems: ReadonlyArray<IItemType>;
	readonly playerOneLives: number;
	readonly playerTwoLives: number;
	readonly playerOneEther: number;
	readonly playerTwoEther: number;
	readonly comparisonIndex: number;
	readonly comparisonItems: IComparisonItems;
	readonly comparisonStart: boolean;
}

interface IMapDispatch {
	readonly setFirstPlayerLives: (value: number) => void;
	readonly setSecondPlayerLives: (value: number) => void;
	readonly setFirstPlayerEther: (value: number) => void;
	readonly setSecondPlayerEther: (value: number) => void;
	readonly setComparisonIndex: (value: number) => void;
	readonly setComparisonItems: (value: IComparisonItems) => void;
	readonly setComparisonStart: (value: boolean) => void;
	readonly setGameSelectStep:() => void;
	readonly resetPlayersItems: () => void;
	readonly resetComparisonState: () => void;
}

function mapStateToProps (state: IStore): IMapState {
	const { playerOne, playerTwo } = state.playersReducer;
	const { comparisonIndex, comparisonItems, comparisonStart } = state.gameReducer;

	return {
		playerOneLives: playerOne.lives,
		playerTwoLives: playerTwo.lives,
		playerOneItems: playerOne.itemArray,
		playerTwoItems: playerTwo.itemArray,
		playerOneEther: playerOne.ether,
		playerTwoEther: playerTwo.ether,
		comparisonIndex,
		comparisonItems,
		comparisonStart
	}
}

function mapDispatchToProps (dispatch: Dispatch):IMapDispatch {
	return {
		setFirstPlayerLives: (value) => dispatch(setLivesFirstPlayer(value)),
		setSecondPlayerLives: (value) => dispatch(setLivesSecondPlayer(value)),
		setFirstPlayerEther: (value) => dispatch(setEtherFirstPlayer(value)),
		setSecondPlayerEther: (value) => dispatch(setEtherSecondPlayer(value)),
		setComparisonIndex: (value) => dispatch(setComparisonIndex(value)),
		setComparisonItems: (value) => dispatch(setComparisonItems(value)),
		setComparisonStart: (value) => dispatch(setComparisonStart(value)),
		setGameSelectStep:() => dispatch(setGameStep(gameSteps.SELECTION_STAGE)),
		resetPlayersItems: () => dispatch(resetItemsOfPlayers()),
		resetComparisonState: () => dispatch(resetComparisonStage())
	}
}

export type IProps = IMapState & IMapDispatch;

export const ComparisonStageContainer = connect(mapStateToProps, mapDispatchToProps)(ComparisonStage);
