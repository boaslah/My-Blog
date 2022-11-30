<template>
    
    <div class="main-div">
        <div></div>
        <div class="center-div">
            <div></div>
            <div>
                <h1>Blessing Boaslah</h1>
            </div>
            <div>
                <p>On a mission to discover my next great adventure,
                    starting with what I have now to figure it out. </p>
            </div>
            <div>
                <router-link to="/">HOME</router-link> 
                <router-link to="/blog">BLOG</router-link> 
                <router-link to="/about">ABOUT</router-link>
            </div>
            <div>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
            </div>
           

        </div>
        <div></div>


        
    </div>


</template>

<script>

export default {
    name: 'Home'
}
</script>

<style scoped>

p{
    font-size: 30px;
}

i{
    color: gray;
    background-color: white;
    margin: 1%;
    font-size: 15px;
    background-size: 40px;
    padding: 1.5%;
    border-radius: 50px;
}

h1{
    color: white;
    font-family: 'EB Garamond', serif;
}
p{
    font-family: 'Exo 2', serif;

}

.center-div{
    display: grid;
    grid-template-rows: 20% 20% 30% 15% 15%;
}

a:hover{
    color: rgb(153, 152, 152);
}
a{
    text-decoration: none;
    color: white;
    margin: 2%;
    font-size: 20px;
}

.main-div{
    display: grid;
    grid-template-columns: 25% 50% 25%;
    background-color: rgba(5, 5, 5, 0.479);
    color: white;
    height: 97vh;
    text-align: center;
    font-size: 35px;
    padding: 3%;
    position: fixed;
    overflow: hidden;
    width: 100%;
    margin: -2.5% 0% 0% -2%;
}

@media only screen and (max-width: 600px) {
    .main-div{
        display: grid;
        grid-template-columns: 2% 95% 3%;
    }
}

</style>
