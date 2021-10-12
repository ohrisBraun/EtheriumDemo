import {IAction} from "../types";
import {types} from "./actionTypes";
import {IPlayerReducer} from "./types";

const initialState: IPlayerReducer = {
    playerOne: {
        lives: 5,
        itemArray: [],
        ether: 0
    },
    playerTwo: {
        lives: 5,
        itemArray: [],
        ether: 0
    }
};

const playersReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case types.SET_LIVES_FIRST_PLAYER : {
            return {
                ...state, playerOne: {
                    ...state.playerOne,
                    lives: action.payload
                }
            }
        }
        case types.SET_LIVES_SECOND_PLAYER : {
            return {
                ...state, playerTwo: {
                    ...state.playerTwo,
                    lives: action.payload
                }
            }
        }
        case types.FIRST_PLAYER_ADD_ITEM : {
            return {
                ...state, playerOne: {
                    ...state.playerOne,
                    itemArray: action.payload instanceof Array
                        ?
                        [ ...state.playerOne.itemArray, ...action.payload ]
                        :
                        [
                            ...state.playerOne.itemArray,
                            action.payload
                        ]
                }
            }
        }
        case types.SECOND_PLAYER_ADD_ITEM : {
            return {
                ...state, playerTwo: {
                    ...state.playerTwo,
                    itemArray:  action.payload instanceof Array
                        ?
                        [...state.playerTwo.itemArray, ...action.payload]
                        :
                        [
                        ...state.playerTwo.itemArray,
                        action.payload
                    ]
                }
            }
        }
        case types.FIRST_PLAYER_REMOVE_ITEM : {
            return {
                ...state,
                playerOne: {
                    ...state.playerOne,
                    itemArray: state.playerOne.itemArray.slice(0, state.playerOne.itemArray.length - 1)
                }
            }
        }
        case types.SECOND_PLAYER_REMOVE_ITEM : {
            return {
                ...state,
                playerTwo: {
                    ...state.playerTwo,
                    itemArray: state.playerTwo.itemArray.slice(0, state.playerTwo.itemArray.length - 1)
                }
            }
        }
        case types.SET_ETHER_FIRST_PLAYER : {
            return {
                ...state,
                playerOne: {
                    ...state.playerOne,
                    ether: action.payload
                }
            }
        }
        case types.SET_ETHER_SECOND_PLAYER : {
            return {
                ...state,
                playerTwo: {
                    ...state.playerTwo,
                    ether: action.payload
                }
            }
        }
        case  types.RESET_ITEMS : {
            return {
                ...state,
                playerOne: {
                    ...state.playerOne,
                    itemArray: initialState.playerOne.itemArray
                },
                playerTwo: {
                    ...state.playerTwo,
                    itemArray: initialState.playerTwo.itemArray
                }
            }
        }
        default:
            return state;
    }
}

export default playersReducer;
