import React, { useEffect } from "react";
import { randomNumber } from "./utils";

import styles from './RandomPlayerCoin.module.scss';
import { IProps } from "./index";

export const RandomPlayerCoin: React.FunctionComponent<IProps> = ({chooseFirstPlayer, playerOrder, setSelectionType}) => {
	useEffect(() => {
		const answer = randomNumber(2) + 1;
		chooseFirstPlayer(answer);
	},[chooseFirstPlayer]);

	useEffect(() => {
		setTimeout (() => {
			setSelectionType();
		}, 3500);
	}, [playerOrder]);

	return <>
		{playerOrder && <div className={`${styles.container} ${playerOrder === 1 ? styles.spinFirst : styles.spinSecond}`}>
			<div className={styles.first}><span>1</span></div>
			<div className={styles.second}><span>2</span></div>
		</div>}
	</>
}