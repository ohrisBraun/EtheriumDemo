import React, { useCallback, useEffect } from "react";
import { RandomSelect } from "./RandomSelect/RandomSelect";
import { IProps } from "./index";
import { gameSteps } from "../../../redux/game-reducer/constants";

import styles from './SelectionStage.module.scss';
import { playerActions, players, randomNumber, rules } from "./utils";
import { uid } from "uid";
import { IItemType } from "../../../redux/types";
import { nextSelectionStep, playerSwitcher } from "./selectionRules";

export const SelectionStage: React.FunctionComponent<IProps> = (props) => {

    const {
        playerOrder,
        roundNumber,
        setSelectedItemFirstPlayer,
        setSelectedItemSecondPlayer,
        setSelectionItems,
        selectionItems,
        setPlayerOrder,
        roundNumberChanged,
        firstPlayerItemLength,
        secondPlayerItemLength,
        setGameStep,
        needToChangeRound,
        initialOrder,
        setInitialOrder,
        resetSelectionStage
    } = props

    const startRandom = useCallback(() => {
        const itemsCount = rules.ITEM_COUNT - (playerOrder === players.FIRST_PLAYER
            ? firstPlayerItemLength
            : secondPlayerItemLength);
        const newState = [];

        for (let i = 0; i < itemsCount; i++) {
            newState.push({id: uid(), value: playerActions[randomNumber(rules.ITEM_VARIANTS)]});
        }
        setSelectionItems(newState);
    }, [playerOrder, firstPlayerItemLength, secondPlayerItemLength, setSelectionItems]);

    const onItemSelect = useCallback((item) => {
        const filteredSelectionItem = selectionItems
            .filter((arrayItem: IItemType) => arrayItem.id !== item.id);

        setSelectionItems(filteredSelectionItem);

        if (playerOrder === players.FIRST_PLAYER) {
            setSelectedItemFirstPlayer(item);
        } else {
            setSelectedItemSecondPlayer(item);
        }

    }, [selectionItems, setSelectionItems, playerOrder, setSelectedItemFirstPlayer, setSelectedItemSecondPlayer]);

    useEffect(() => {
        startRandom();
    }, [playerOrder, roundNumber]);

    
    const changeOrder = useCallback(() => {
       setPlayerOrder(playerSwitcher(playerOrder))
    }, [playerOrder, setPlayerOrder]);

    const changeRound = useCallback( () => {
        if (roundNumber !== 3) {
            roundNumberChanged(roundNumber + 1);
        } else {
            setGameStep(gameSteps.COMPARISON_STAGE);
        }
    }, [roundNumber, roundNumberChanged, setGameStep]);

    const onNextStepClick = () => {
        nextSelectionStep({ ...props, changeRound, changeOrder });
    };

    useEffect(() => () => {
        const firstPlayerInNextRound = playerSwitcher(initialOrder);
        setInitialOrder(firstPlayerInNextRound);
        setPlayerOrder(firstPlayerInNextRound);
        resetSelectionStage()
    },[]);

    return <div className={styles.container}>
        <h3>Round {roundNumber} Player {playerOrder}</h3>
        <RandomSelect
            selectionItems={selectionItems}
            onItemSelect={onItemSelect}
        />
        <button className={styles.changePlayerButton} onClick={onNextStepClick}>
            {needToChangeRound && roundNumber === 3 ? 'START BATTLE!' : `NEXT PLAYER ${playerOrder === 1 ? 2 : 1}`}
        </button>
    </div>
};
