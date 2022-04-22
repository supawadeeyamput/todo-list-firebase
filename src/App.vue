<script setup lang="ts">
import { onMounted } from 'vue';
import useFirebase from './firebase'

const {
  getToDos,
 }=useFirebase();

 onMounted(async() =>{
   const toDos = await getToDos();
   console.log(toDos)
 })
</script>



<template>
  <router-view>

  </router-view>
</template>

<style>
</style>
