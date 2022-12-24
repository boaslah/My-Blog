<template>
    
    <div class="main-div">
        <div></div>
        <div class="center-div">
            <div></div>
            <div>
                <h1>Blessing's Journal</h1>
            </div>
            <div>
                <p>On a mission to discover great adventures, 
                    starting now as I look forward to accomplishing this with God's help. </p>
            </div>
            <div class="links">
                <!-- <router-link to="/">HOME</router-link>  -->
                <router-link to="/blog">BLOG</router-link> 
                <router-link to="/about">ABOUT</router-link>
            </div>
            <div>
                <a href="https://www.instagram.com/bboaslah"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.youtube.com/@bboaslah"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.twitter.com/bboaslah_"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.facebook.com/bboaslah"><i class="fa-brands fa-facebook"></i></a>
            </div>
           

        </div>
        <div></div>


        
    </div>


</template>

<script>

export default {
    name: 'HomePage'
}
</script>

<style lang="scss" scoped>
a:hover{
    color: rgb(189, 188, 188);
    font-weight: 900;
}
p{
    font-size: 30px;
}

i{
    color: gray;
    background-color: white;
    margin: 1% !important;
    padding: 10px;
    font-size: 20px;
    background-size: 40px;
    border-radius: 500px;    
}

h1{
    color: white;
}
p{
    font-family: 'Rajdhani', serif;

}

.center-div{
    display: grid;
    grid-template-rows: 20% 20% 30% 15% 15%;
}


.links a{
    text-decoration: solid;
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
    h1{
        font-size: 50px;
    }
    p{
        margin-top: -7%;
        font-size: 27px;
    }

    .center-div{
        display: grid;
        grid-template-rows: 25% 15% 30% 15% 15%;
    }
}

@media only screen and (max-width: 1115px) {
    .main-div{
        display: grid;
        grid-template-columns: 2% 95% 3%;
    }

    h1{
        font-size: 50px;
    }

    .center-div{
        display: grid;
        grid-template-rows: 10% 30% 30% 15% 15%;
    }
    .main-div{
        width: 90%;
        margin: -2.5% 0% 0% -2%;
    }
}


</style>
