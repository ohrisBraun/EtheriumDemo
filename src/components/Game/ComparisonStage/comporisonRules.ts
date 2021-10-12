import { playerActionsTypes } from "../SelectionStage/utils";
import { comparisonDelaySecond } from "./utils";
import { IComparisonItems } from "../../../redux/game-reducer/types";

interface IComparator {
	readonly playerOneLives: number;
	readonly setFirstPlayerLives: (value: number) => void;
	readonly playerTwoLives: number;
	readonly setSecondPlayerLives: (value: number) => void;
	readonly playerOneEther: number;
	readonly setFirstPlayerEther: (value: number) => void;
	readonly playerTwoEther: number;
	readonly setSecondPlayerEther: (value: number) => void;
	readonly comparisonItems: IComparisonItems;
	readonly comparisonIndex: number;
	readonly setComparisonItems: (value: IComparisonItems) => void;
	readonly setComparisonIndex: (value: number) => void;
	readonly setGameSelectStep:() => void;
}

export const comparator = (props: IComparator) => {
	const {
		playerOneLives,
		setFirstPlayerLives,
		playerTwoLives,
		setSecondPlayerLives,
		playerOneEther,
		setFirstPlayerEther,
		playerTwoEther,
		setSecondPlayerEther,
		comparisonItems,
		comparisonIndex,
		setComparisonItems,
		setComparisonIndex,
		setGameSelectStep,
	} = props;

	const maxLength = Math.max(comparisonItems.playerOneItems.length, comparisonItems.playerTwoItems.length);

	setTimeout(() => {
		// To use daley put next code before timeout
		const newState = comparisonItems;

		if (newState.playerOneItems[comparisonIndex]) {
			newState.playerOneItems[comparisonIndex].visible = false;
		}
		if (newState.playerTwoItems[comparisonIndex]) {
			newState.playerTwoItems[comparisonIndex].visible = false;
		}
		setComparisonItems(newState)
		//--------

		if (comparisonItems.playerTwoItems[comparisonIndex]?.value === playerActionsTypes.ATTACK
			&& comparisonItems.playerOneItems[comparisonIndex].value !== playerActionsTypes.PROTECT) {

			if (playerOneLives > 1) {
				setFirstPlayerLives(playerOneLives - 1);
			} else {
				setFirstPlayerLives(playerOneLives - 1);
				return null;
			}
		}

		if (comparisonItems.playerOneItems[comparisonIndex]?.value === playerActionsTypes.ATTACK
			&& comparisonItems.playerTwoItems[comparisonIndex].value !== playerActionsTypes.PROTECT) {

			if (playerTwoLives > 1) {
				setSecondPlayerLives(playerTwoLives - 1);
			} else {
				setSecondPlayerLives(playerTwoLives - 1);
				return null;
			}
		}

		if (comparisonItems.playerOneItems[comparisonIndex]?.value === playerActionsTypes.ETHER) {
			setFirstPlayerEther(playerOneEther + 1);
		}

		if (comparisonItems.playerTwoItems[comparisonIndex]?.value === playerActionsTypes.ETHER) {
			setSecondPlayerEther(playerTwoEther + 1);
		}

		if (comparisonIndex < maxLength - 1) {
			setComparisonIndex(comparisonIndex + 1);
		}

		if (comparisonIndex === maxLength - 1) {
			setTimeout(() => {
				setGameSelectStep();
			}, comparisonDelaySecond);
		}
	}, comparisonDelaySecond);
};
