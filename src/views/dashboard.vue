<template>
  <div class="dashboard-home">
    <sidebar/>
    <div class="main_view">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.dashboard-home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
}
</style>