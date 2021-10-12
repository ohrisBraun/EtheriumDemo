import React from 'react';
import { IProps } from "./index";
import styles from './PlayersArea.module.scss'

export const PlayersArea: React.FunctionComponent<IProps> = (props) => {

    const {
        livesPlayerOne,
        livesPlayerTwo,
        itemsPlayerOne,
        itemsPlayerTwo,
        etherFirstPlayer,
        etherSecondPlayer
    } = props;

    return (<div className={styles.field}>
        <div className={styles.secondPlayer}>
            <span>Lives: {livesPlayerTwo}</span>
            <div className={styles.valueContainer}>
                {Array(livesPlayerTwo).fill(null).map((val, index) => <div key={val + index}
                                                                           className={styles.lives}/>)}
            </div>
            <span> Items: {itemsPlayerTwo?.length}</span>
            <div className={styles.valueContainer}>
                {itemsPlayerTwo.map((val, index) => <div key={val + index} className={styles.items}/>)}
            </div>
            <span>Ether :{etherSecondPlayer}</span>
        </div>
        <div className={styles.firstPlayer}>
            <span>Ether : {etherFirstPlayer}</span>
            <div className={styles.valueContainer}>
                {itemsPlayerOne.map((val, index) => <div key={val + index} className={styles.items}/>)}
            </div>
            <span> Items: {itemsPlayerOne?.length}</span>
            <div className={styles.valueContainer}>
                {Array(livesPlayerOne).fill(null).map((val, index) => (
                    <div key={val + index} className={styles.lives}/>))}
            </div>
            <span> Lives: {livesPlayerOne}</span>
        </div>
    </div>)
};