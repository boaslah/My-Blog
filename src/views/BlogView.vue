<template>

    <div>
        <Header />
    </div>
</template>

<script>

import Header from '../components/Header'
export default{
    name: "Blog",
    components:{
        Header
    },
    beforeCreate: function() {
        document.body.className = 'blog';
    }
}
</script>

<style scoped>

</style>
