<template>
  <div id="app" class="root">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
<style lang="stylus">
    .root{
        height: 100vh;
        width: 100%;
    }
</style>