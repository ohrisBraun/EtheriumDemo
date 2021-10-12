import { playerActionsTypes } from "./utils";
import { uid } from "uid";
import { IComparisonItem, IItemType } from "../../../redux/types";
import { IComparisonItems } from "../../../redux/game-reducer/types";

const createEmptyValues = (count: number) => {
	const values = [];

	for (let i = 0; i < count; i ++) {
		values.push({id: uid(), value: '', visible: false})
	}

	return values;
}

export const comparisonBuilder = (firstPlayerItems: ReadonlyArray<IItemType>, secondPlayerItems: ReadonlyArray<IItemType>): IComparisonItems => {
	const formatFirstPlayerItem = firstPlayerItems.map((item) => ({...item, visible: true}));
	const formatSecondPlayerItem = secondPlayerItems.map((item) => ({...item, visible: true}));

	const firstPlayerAttack: IComparisonItem[] = [];
	const firstPlayerProtect: IComparisonItem[] = [];
	const firstPlayerEther: IComparisonItem[] = [];

	const secondPlayerAttack: IComparisonItem[] = [];
	const secondPlayerProtect: IComparisonItem[] = [];
	const secondPlayerEther: IComparisonItem[] = [];

	const sorter = (player: number, item: IComparisonItem) => {
		if (player === 1) {
			switch (item.value) {
				case playerActionsTypes.ATTACK: firstPlayerAttack.push(item);
					break;
				case playerActionsTypes.PROTECT: firstPlayerProtect.push(item);
					break;
				default: firstPlayerEther.push(item);
					break;
			}
		} else {
			switch (item.value) {
				case playerActionsTypes.ATTACK: secondPlayerAttack.push(item);
					break;
				case playerActionsTypes.PROTECT: secondPlayerProtect.push(item);
					break;
				default: secondPlayerEther.push(item);
					break;
			}
		}
	}

	for ( let i = 0; i < formatFirstPlayerItem.length; i++ ) {
		sorter(1, formatFirstPlayerItem[i]);
		sorter(2, formatSecondPlayerItem[i]);
	}


	let playerOneItems = [...firstPlayerProtect];
	let playerTwoItems = [...secondPlayerAttack];

	const distributor = (firstValue: number, secondValue: number) => {
		if (firstValue !== secondValue) {
			if (firstValue > secondValue) {
				playerTwoItems.push(...createEmptyValues(firstValue - secondValue));
			} else {
				playerOneItems.push(...createEmptyValues(secondValue - firstValue));
			}
		}
	}

	// First step of comparison
	distributor(firstPlayerProtect.length, secondPlayerAttack.length);

	// Second step of comparison
	playerOneItems.push(...firstPlayerAttack);
	playerTwoItems.push(...secondPlayerProtect);

	distributor(firstPlayerAttack.length, secondPlayerProtect.length);

	// Third step of comparison
	playerOneItems.push(...firstPlayerEther);
	playerTwoItems.push(...secondPlayerEther);

	return { playerOneItems, playerTwoItems };
}