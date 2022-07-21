<script setup>
import { useUserStore } from '@store/user';

const userStore = useUserStore()

function changeName() {
  userStore.updateName('李四' + Math.random())
}
</script>

<template>
  <h1 @click="changeName">{{ userStore.name }}</h1>
  <img alt="Vue logo" src="@/assets/logo.png" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  cursor: pointer;
}
</style>
