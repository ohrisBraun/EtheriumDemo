import React, { useEffect } from "react";
import { IProps } from "./index";

import styles from './ComparisonStage.module.scss';
import { comparisonBuilder } from "./comparisonBuilder";
import { PlayerItem } from "../../common/PlayerItem/PlayerItem";
import { comparator } from "./comporisonRules";

export const ComparisonStage: React.FunctionComponent<IProps> = (props) => {
	const {
		playerOneItems,
		playerTwoItems,
		comparisonIndex,
		comparisonItems,
		setComparisonItems,
		comparisonStart,
		setComparisonStart,
		resetComparisonState,
		resetPlayersItems,
	} = props;

	useEffect(() => {
		setComparisonItems(comparisonBuilder(playerOneItems, playerTwoItems));
		setComparisonStart(true);
		resetPlayersItems();

		return () => {
			resetComparisonState();
		}
	}, []);

	useEffect(() => {
		if (comparisonStart) {
			comparator({...props});
		}
	}, [comparisonIndex, comparisonStart]);

	return <div className={styles.container}>
		<div>
			{comparisonItems.playerTwoItems.map((item:any) => <PlayerItem key = {item.id} value={item.value} visible={item.visible}/>)}
		</div>
		<div>
			{comparisonItems.playerOneItems.map((item:any) => <PlayerItem key = {item.id} value={item.value} visible={item.visible}/>)}
		</div>
	</div>
}
