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

<style>@import url("https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css");
</style>
