<template>
   <a class="link"  href="">{{text}}</a>
</template>

<script>
export default {
 props:{
   text: String
 }
}
</script>

<style scoped>
.link{
  text-decoration: none;
  color: #635CFF;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-weight: 500;
}
</style>