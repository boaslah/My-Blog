<template>

    <div>
        <Header />
        <BlogPosts />
    </div>
</template>

<script>

import Header from '../components/Header'
import BlogPosts from '../components/Blog'

export default{
    name: "Blog",
    components:{
        Header,
        BlogPosts
    },
    beforeCreate: function() {
        document.body.className = 'blog';
    }
}
</script>

<style scoped>

</style>
