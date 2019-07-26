import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { ISetTurn, ITurns  } from "../../model/index";

@Module({ stateFactory: true, namespaced: true, name: 'board' })
export default class BoardModule extends VuexModule {
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    computerTurn = "";
    turn = "";
    gameOn = false;
    count = 0;

    @Mutation
    public setTurn({ computerTurn, turn }: ISetTurn) {
        this.computerTurn = computerTurn;
        this.turn = turn;
    }

    @Mutation
    public setTurns(payload: ITurns) {
        this.turns = payload;
    }

    // dummy for ASYNC calls
    // @Action({ commit: 'increment' })
    // public foo(): number {
    //     return 5;
    // }
}
