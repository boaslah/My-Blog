<template>

    <div>
        <Header />
    </div>

</template>

<script>

import Header from '../components/Header'
export default{
    name: 'About',
    components: {
        Header
    },
    beforeCreate: function() {
        document.body.className = 'about';
    }
}
</script>

<style scoped>

</style>
