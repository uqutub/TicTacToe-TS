<template>
  <li @click="onClickHandler">{{ value }}</li>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Block extends Vue {
  @Prop() private id: number;
  @Prop() private value: string;
  
  @Emit("clicked") 
  onClickHandler() {
    return this.id;
  }
}
</script>

<style scoped>
li {
  float: left;
  margin: 10px;
  height: 70px;
  width: 70px;
  font-size: 50px;
  background: #333;
  color: #ccc;
  list-style: none;
  text-align: center;
  border-radius: 5px;
}
li:hover {
  cursor: pointer;
  background: #000;
}
</style>
