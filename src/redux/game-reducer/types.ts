import { IComparisonItem, IItemType } from "../types";

export interface IComparisonItems {
    readonly playerOneItems: ReadonlyArray<IComparisonItem>;
    readonly playerTwoItems: ReadonlyArray<IComparisonItem>;
}

export interface IGameReducer {
    readonly initialOrder: number;
    readonly playerOrder: number;
    readonly roundNumber: number;
    readonly gameStep: string;
    readonly selectionItems: ReadonlyArray<IItemType>;
    readonly needToChangeRound: boolean;
    readonly comparisonItems: IComparisonItems;
    readonly comparisonIndex: number;
    readonly comparisonStart: boolean;
}
