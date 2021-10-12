import { players, rules } from "./utils";
import { gameSteps } from "../../../redux/game-reducer/constants";
import { IItemType } from "../../../redux/types";

export const playerSwitcher = (player: number) => {
	return player === players.FIRST_PLAYER ? players.SECOND_PLAYER : players.FIRST_PLAYER
}

interface  INextSelectionStep {
	readonly firstPlayerItemLength: number;
	readonly secondPlayerItemLength: number;
	readonly needToChangeRound: boolean;
	readonly roundNumber: number;
	readonly playerOrder: number;
	readonly selectionItems: ReadonlyArray<IItemType>;
	readonly setGameStep: (step: string) => void;
	readonly setSelectedItemFirstPlayer: (array: IItemType[]) => void;
	readonly setSelectedItemSecondPlayer: (array: IItemType[]) => void;
	readonly setRoundChange: (value: boolean) => void;
	readonly changeRound: () => void;
	readonly changeOrder: () => void;
}

export const nextSelectionStep = (props: INextSelectionStep) => {
	const {
		firstPlayerItemLength,
		secondPlayerItemLength,
		needToChangeRound,
		roundNumber,
		playerOrder,
		selectionItems,
		setSelectedItemFirstPlayer,
		setSelectedItemSecondPlayer,
		setGameStep,
		changeRound,
		changeOrder,
		setRoundChange
	} = props;


	const playersItemLength = [firstPlayerItemLength, secondPlayerItemLength];

	if (firstPlayerItemLength === rules.ITEM_COUNT && secondPlayerItemLength === rules.ITEM_COUNT) {
		setGameStep(gameSteps.COMPARISON_STAGE);
	} else {
		if (needToChangeRound) {
			if (roundNumber === 3) {
				if (playerOrder === players.FIRST_PLAYER) {
					setSelectedItemFirstPlayer([...selectionItems]);
				} else {
					setSelectedItemSecondPlayer([...selectionItems])
				}
				setGameStep(gameSteps.COMPARISON_STAGE);
			} else {
				if (playersItemLength[playerSwitcher(playerOrder) - 1] !== rules.ITEM_COUNT) {
					changeRound();
					setRoundChange(false);
					changeOrder();
				} else {
					changeRound();
				}
			}
		} else {
			if (roundNumber === 3) {
				if (playerOrder === players.FIRST_PLAYER) {
					setSelectedItemFirstPlayer([...selectionItems]);
				} else {
					setSelectedItemSecondPlayer([...selectionItems])
				}
			}
			if (playersItemLength[playerSwitcher(playerOrder) - 1] !== rules.ITEM_COUNT) {
				setRoundChange(true);
				changeOrder();
			} else {
				changeRound();
			}
		}
	}
};
