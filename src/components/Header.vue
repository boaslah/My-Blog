<template>
    <div class="head">
        <div></div>
        <div class="middle-head">
            <div>
                <router-link to="/" ><h1>Blessing's Journal</h1></router-link>
            </div>
            <div>
                <router-link to="/" :class="route=== '/'? 'active' : ''">HOME</router-link> 
                <router-link to="/blog" :class="route=== '/'? 'active' : ''">BLOG</router-link> 
                <router-link to="/about" :class="route=== '/'? 'active' : ''">ABOUT</router-link>
            </div>
           
        </div>
        <div></div>
        <router-view/>
    </div>
</template>

<script>

// import { useRoute} from 'vue-router'
// const route = useRoute().path

// console.log("this is the route",route);

export default {
    name: "Header"

}
</script>

<style lang="scss" scoped>


.active{
    color: red !important;
}

.head{
    display: grid;
    grid-template-columns: 20% 55% 25%;
    column-gap: 3%;
    padding: 3%;
    overflow: hidden;
    width: 96.5%;
    margin: -2.5% 0% 0% -2%;
    
}
h1{
    font-size: 55px;
}
a{
    text-decoration: none;
    margin: 5%;
    color: black;
    font-style: underline;
}
.middle-head{
    text-align: center;
    display: grid;
    grid-template-rows: 60% 40%;
    row-gap: 30%;
}
@media only screen and (max-width: 600px) {
    .head{
        display: grid;
        grid-template-columns: 1% 98% 1%;
        text-align: center;
        margin: -2.5% 0% 10% -5%;
    }
    h1{
        font-size: 45px;
    }
}

</style>
