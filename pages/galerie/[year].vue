<template>
  <gallery :year="year"></gallery>
</template>
  
<script setup>
const route = useRoute()
let year = route.params.year;
</script>
  
  