export function randomNumber(max: number) {
	return Math.floor(Math.random() * max);
}

export const playerActionsTypes = {
	PROTECT: 'PROTECT',
	ATTACK: 'ATTACK',
	ETHER: 'ETHER'
}

export enum playerActions {
	PROTECT,
	ATTACK,
	ETHER
}

export enum players {
	FIRST_PLAYER = 1,
	SECOND_PLAYER = 2
}

export const rules = {
	'ITEM_COUNT': 6,
	'ITEM_VARIANTS': 3
}

export function playerSwitcher (player: number) {
	return player === players.FIRST_PLAYER ? players.SECOND_PLAYER : players.FIRST_PLAYER
}
