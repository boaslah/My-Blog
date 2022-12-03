<template>

    <div>
        <Header />
        <AboutMe />
    </div>

</template>

<script>

import Header from '../components/Header'
import AboutMe from '../components/About'
export default{
    name: 'About',
    components: {
        Header,
        AboutMe
    },
    beforeCreate: function() {
        document.body.className = 'about';
    }
}
</script>

<style scoped>

</style>
