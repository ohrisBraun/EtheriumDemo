import React, { useCallback } from 'react';
import styles from './RandomSelect.module.scss';
import { IItemType } from "../../../../redux/types";
import { PlayerItem } from "../../../common/PlayerItem/PlayerItem";

interface IRandom {
	readonly selectionItems: ReadonlyArray<IItemType>;
	readonly onItemSelect: (item: IItemType) => void;
}

export const RandomSelect: React.FunctionComponent<IRandom> = ({ selectionItems, onItemSelect }) => {

	const onItemClick = useCallback((item) => () => {
		onItemSelect(item);
	}, [onItemSelect]);

	return <div className={ styles.container }>
		<div>
			{ Boolean(selectionItems.length) && <div className={ styles.randomContainer }>
				{ selectionItems.map((item: any) => (
					<div key={ item.id } onClick={onItemClick(item)} className={ styles.randomValue }>
						<PlayerItem value={item.value}/>
					</div>
					/*<div
						className={ styles.randomValue }
						key={ item.id }
						onClick={ onItemClick(item) }
					>{ item.value }</div>*/)) }
            </div> }
		</div>
	</div>
}

