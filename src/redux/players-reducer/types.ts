export interface IPlayerReducer {
    readonly playerOne: {
        readonly lives: number;
        readonly itemArray: any;
        readonly ether: number;
    },
    readonly playerTwo: {
        readonly lives: number;
        readonly itemArray: any;
        readonly ether: number;
    }
}


