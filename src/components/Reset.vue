<template>
  <div class="reset">
    <button @click="onClickHandler">Reset</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Reset extends Vue {
  @Emit("clicked") 
  onClickHandler() {}
}
</script>

<style scoped lang="scss">
.reset {
  display: block;
  text-align: center;
  padding-top: 20px;

  button {
    border: 0;
    background: #444;
    color: #fff;
    width: 70%;
    padding: 15px;
    border-radius: 5px;
  }
}
</style>
