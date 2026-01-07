<template>
  <div id="index">
    <div class="btn"></div>
    <div>
      <div class="btn"></div>
    </div>

    <div class="btn"></div>
    <div class="btn"></div>
    <div class="btn"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#index {
  /* display: flex;
  flex-direction: column; */
}
.btn {
  width: 200px;
  height: 100px;
  background-color: aqua;
  margin: 20px 0;
}
/* .btn:nth-last-child(1) {
  background-color: black;
  position: absolute;
  left: 100px;
} */
</style>
