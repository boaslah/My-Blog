<template>

    <HomePage />
     
</template>

<script>

import HomePage from '../components/Home'
export default{
    name: 'HomeView',
    components: {
        HomePage
    },
    beforeCreate: function() {
        document.body.className = 'home';
    }
}
</script>

<style scoped>

</style>
