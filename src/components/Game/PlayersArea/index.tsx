import { connect } from "react-redux";
import { PlayersArea } from './PlayersArea';
import { IStore } from "../../../redux/types";

interface IMapState {
    readonly livesPlayerOne: number;
    readonly livesPlayerTwo: number;
    readonly itemsPlayerOne: ReadonlyArray<any>;
    readonly itemsPlayerTwo: ReadonlyArray<any>;
    readonly etherFirstPlayer: number;
    readonly etherSecondPlayer: number;
}

const mapStateToProps = (state: IStore): IMapState => {
    return {
        livesPlayerOne: state.playersReducer.playerOne.lives,
        livesPlayerTwo: state.playersReducer.playerTwo.lives,
        itemsPlayerOne: state.playersReducer.playerOne.itemArray,
        itemsPlayerTwo: state.playersReducer.playerTwo.itemArray,
        etherFirstPlayer: state.playersReducer.playerOne.ether,
        etherSecondPlayer: state.playersReducer.playerTwo.ether,
    }
};

export type IProps = IMapState ;
export const GameFiledContainer = connect(mapStateToProps)(PlayersArea);