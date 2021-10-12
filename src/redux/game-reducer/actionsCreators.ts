import { types } from "./actionTypes";
import { IAction } from "../types";
import { IComparisonItems } from "./types";

export const setPlayerOrder = (order: number): IAction => {
	return {
		type: types.SET_PLAYER_ORDER,
		payload: order
	}
};

export const setGameStep = (payload: string): IAction => {
	return {
		type: types.SET_GAME_STEP,
		payload
	}
};

export const roundNumberChanged = (roundNumber: number): IAction => {
	return {
		type: types.ROUND_NUMBER_CHANGED,
		payload: roundNumber
	}
};

export const setSelectionItems = (item: any): IAction => {
	return {
		type: types.SET_SELECTION_ITEM,
		payload: item
	}
};

export const setRoundChange = (payload: boolean): IAction => {
	return {
		type: types.SET_ROUND_CHANGE,
		payload
	}
};

export const setComparisonIndex = (payload: number): IAction => {
	return {
		type: types.SET_COMPARISON_INDEX,
		payload
	}
};

export const setComparisonItems = (payload: IComparisonItems): IAction => {
	return {
		type: types.SET_COMPARISON_ITEMS,
		payload
	}
};

export const setComparisonStart = (payload: boolean): IAction => {
	return {
		type: types.SET_COMPARISON_START,
		payload
	}
};

export const setInitialOrder = (payload: number): IAction => {
	return {
		type: types.SET_INITIAL_ORDER,
		payload
	}
};

export const resetComparisonStage = (): IAction => {
	return {
		type: types.RESET_COMPARISON_STAGE,
	}
};
