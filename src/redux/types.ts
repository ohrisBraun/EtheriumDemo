import { IPlayerReducer } from "./players-reducer/types";
import { IGameReducer } from "./game-reducer/types";

export interface IAction {
	readonly type: string;
	readonly payload?: any;
}


export interface IStore {
	readonly playersReducer: IPlayerReducer;
	readonly gameReducer: IGameReducer;
}

export interface IItemType {
	readonly value: string;
	readonly id: string;
}

export interface IComparisonItem extends IItemType{
	visible: boolean;
}