import React from "react";
import styles from "./PlayerItem.module.scss";

interface IPlayerItem {
	readonly value: string;
	readonly visible?: boolean;
}

export const PlayerItem: React.FunctionComponent<IPlayerItem> = ({ value, visible }) => {
	return <div className={ `${ value ? styles.item : styles.noopItem } ${ styles[value] }` }>
		{ value }
		{value && visible && <p>{ visible.toString() }</p>}
	</div>
}