<template>

  <HomeView />
  
</template>

<script>
import HomeView from './views/HomeView'

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>


<style>

body{
  background-image: url(./assets/background-image.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  position: relative;
}

</style>
