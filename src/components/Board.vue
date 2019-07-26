<template>
  <div class="board">
    <p class="msg">{{ currentTurn }}</p>
    <ul id="gameBoard">
      <Block
        v-for="(item, index) in turns"
        :key="index"
        :value="item"
        :id="index"
        @clicked="onBlockClickHandler"
      />
    </ul>
    <Reset @clicked="onResetClickHandler" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation, State, namespace } from "vuex-class";
import { ITurns, ISetTurn } from "../model/index";
import Block from "./Block.vue";
import Reset from "./Reset.vue";

const boardModule = namespace("Board");

@Component({
  components: {
    Block,
    Reset
  }
})
export default class Board extends Vue {
  @boardModule.State
  turns: ITurns;

  @boardModule.State
  computerTurn: string;

  @boardModule.State
  turn: string;

  @boardModule.Mutation
  setTurns: (a: ITurns) => void;

  @boardModule.Mutation
  setTurn: ({ computerTurn, turn }: ISetTurn) => void;

  currentTurn: string;
  private count: number;
  private gameOn: boolean;

  constructor() {
    super();
    this.count = 0;
    this.gameOn = true;
  }

  created() {
    if(!this.turn) {
      this.startTheGame()
    }else {
      this.currentTurn = `Player ${this.turn} gets to start!`;
    }
  }

  startTheGame() {
    let computerTurn: string;
    let turn: string;
    let startTurn: string = prompt("Choose Your Move", "Type X or O") || "";
    startTurn = startTurn && startTurn.toUpperCase();
    switch (startTurn) {
      case "X":
        computerTurn = "O";
        turn = "X";
        this.currentTurn = `Player ${turn} gets to start!`;
        this.setTurn({ computerTurn, turn });
        break;
      case "O":
        computerTurn = "X";
        turn = "O";
        this.currentTurn = `Player ${turn} gets to start!`;
        this.setTurn({ computerTurn, turn });
        break;
      case null:
        alert("Sorry. Please type X or O");
        window.location.reload(true);
        break;
      default:
        alert("Sorry. Please type X or O");
        window.location.reload(true);
        break;
    }
  }

  onBlockClickHandler(id: number) {
    this.playerTurn(this.turn, id);
  }

  onResetClickHandler() {
    this.reset();
  }

  computersTurn() {
    let taken: boolean = false;
    while (taken === false && this.count !== 5) {
      let computerMove: number = Number((Math.random() * 10).toFixed());
      if (this.turns[computerMove] === "#") {
        taken = true;
        const turns: ITurns = [...this.turns];
        turns[computerMove] = this.computerTurn;
        this.setTurns(turns);
        // this.winCondition(turns, this.turn);
      }
    }
  }

  playerTurn(turn: string, id: number) {
    this.count++;
    const turns: ITurns = [...this.turns];
    if (turns[id] === "#") {
      turns[id] = turn;
      this.setTurns(turns);
      this.winCondition(this.turns, turn);
      if (this.gameOn === false) {
        // this.currentTurn = `It's ${this.computerTurn}'s turn.`;
        // setTimeout(() => {
        this.computersTurn();
        this.currentTurn = `It's ${turn}'s turn.`;
        this.winCondition(turns, this.computerTurn);
        // }, 200);
      }
    } else {
      alert("Already Selected, please select another block, Thank you!");
    }
  }

  winCondition(trackMoves: ITurns, currentMove: string) {
    if (
      trackMoves[0] === currentMove &&
      trackMoves[1] === currentMove &&
      trackMoves[2] === currentMove
    ) {
      this.gameOn = true;
      this.reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[2] === currentMove &&
      trackMoves[4] === currentMove &&
      trackMoves[6] === currentMove
    ) {
      this.gameOn = true;
      this.reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[0] === currentMove &&
      trackMoves[3] === currentMove &&
      trackMoves[6] === currentMove
    ) {
      this.gameOn = true;
      this.reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[0] === currentMove &&
      trackMoves[4] === currentMove &&
      trackMoves[8] === currentMove
    ) {
      this.gameOn = true;
      this.reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[1] === currentMove &&
      trackMoves[4] === currentMove &&
      trackMoves[7] === currentMove
    ) {
      this.gameOn = true;
      this.reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[2] === currentMove &&
      trackMoves[5] === currentMove &&
      trackMoves[8] === currentMove
    ) {
      this.gameOn = true;
      this.reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[2] === currentMove &&
      trackMoves[5] === currentMove &&
      trackMoves[8] === currentMove
    ) {
      this.gameOn = true;
      this.reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[3] === currentMove &&
      trackMoves[4] === currentMove &&
      trackMoves[5] === currentMove
    ) {
      this.gameOn = true;
      this.reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[6] === currentMove &&
      trackMoves[7] === currentMove &&
      trackMoves[8] === currentMove
    ) {
      this.gameOn = true;
      this.reset();
      alert("Player " + currentMove + " wins!");
    } else if (!trackMoves.includes("#")) {
      this.gameOn = true;
      this.reset();
      alert("It is a Draw!");
    } else {
      this.gameOn = false;
    }
  }

  reset() {
    this.setTurns(["#", "#", "#", "#", "#", "#", "#", "#", "#"]);
    this.count = 0;
    this.gameOn = true;
  }
}
</script>

<style lang="scss">
.board {
  width: 350px;
  overflow: auto;
  margin: 40px auto;
  background: #666;
  padding-bottom: 40px;
  border-radius: 10px;
  .msg {
    color: white;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
