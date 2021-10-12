import { IGameReducer } from "./types";
import { types } from "./actionTypes";
import { gameSteps } from "./constants";
import { IAction } from "../types";

const initialState: IGameReducer = {
	initialOrder: 1,
	playerOrder: 1,
	roundNumber: 1,
	gameStep: gameSteps.CHOOSE_FIRST_PLAYER,
	selectionItems: [],
	needToChangeRound: false,
	// Need to create comparisonReducer
	comparisonIndex: 0,
	comparisonItems: {
		playerTwoItems: [],
		playerOneItems: []
	},
	comparisonStart: false,
}

const gameReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case types.ROUND_NUMBER_CHANGED : {
			return {
				...state, roundNumber: action.payload
			}
		}
		case types.SET_PLAYER_ORDER: {
			return {
				...state, playerOrder: action.payload
			}
		}
		case types.SET_GAME_STEP: {
			return {
				...state, gameStep: action.payload
			}
		}
		case types.SET_SELECTION_ITEM: {
			return {
				...state, selectionItems: action.payload
			}
		}
		case types.SET_ROUND_CHANGE: {
			return {
				...state, needToChangeRound: action.payload
			}
		}
		case types.SET_COMPARISON_INDEX: {
			return {
				...state, comparisonIndex: action.payload
			}
		}
		case types.SET_COMPARISON_ITEMS: {
			return {
				...state, comparisonItems: action.payload
			}
		}
		case types.SET_COMPARISON_START: {
			return {
				...state, comparisonStart: action.payload
			}
		}
		case types.SET_INITIAL_ORDER: {
			return {
				...state, initialOrder: action.payload
			}
		}
		case types.RESET_COMPARISON_STAGE: {
			return {
				...state,
				comparisonIndex: initialState.comparisonIndex,
				comparisonItems: initialState.comparisonItems,
				comparisonStart: initialState.comparisonStart,
			}
		}
		default:
			return state;
	}
}

export default gameReducer;
