import IBoardState from "./IBoardState";

interface ISetTurn {
    computerTurn: string,
    turn: string
}

type ITurns = Array<string>;

export {
    IBoardState,
    ISetTurn,
    ITurns
}