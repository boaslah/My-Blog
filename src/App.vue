<template>
  <div>
      <Default />
  </div>
</template>

<script>
import Default from './components/App'


export default {
  name: 'App',
  components: {
    Default
  }
}
</script>


<style>

router-link{
  font-weight: bold;
  color: red;
}

a{
  font-weight: bold;
  font-family: 'Electrolize', serif;
}
a:hover{
    color: rgb(189, 188, 188);
}

h1{
  font-family: 'Rubik Microbe', serif;
}

body.home{
  background-image: url(./assets/background-image.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  position: relative;
}

</style>
