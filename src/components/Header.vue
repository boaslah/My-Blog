<template>
    <div class="head">
        <div></div>
        <div class="middle-head">
            <div>
                <h1>Blessing Boaslah</h1>
            </div>
            <div>
                <router-link to="/">HOME</router-link> 
                <router-link to="/blog">BLOG</router-link> 
                <router-link to="/about">ABOUT</router-link>
            </div>
           
        </div>
        <div></div>
        <router-view/>
    </div>
</template>

<script>

export default {
    name: "Header"

}
</script>

<style scoped>

.head{
    display: grid;
    grid-template-columns: 20% 55% 25%;
    column-gap: 3%;
    /* border-bottom: 0.1px solid; */
    padding: 3%;
    /* position: fixed; */
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
        margin: -2.5% 0% 0% -8%;
    }
}

</style>
