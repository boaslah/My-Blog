<template>

    <div class="about">
        <div>
            <img src="../../public/assets/me.jpeg" alt="">
        </div>
        <div>
            <p>
                well, i'm Blessing Boaslah,  as you might have guessed. i'm a life-long learner and Software Engineer at 
                <a href="https://kwagei.com">Kwagei Group</a>.</p>
                <p>i'm from the JavaScript background, and i'm currently learning Vue. </p>
                <p> i'm building this long awaited blog with html, css and vue. i'm also doing other projects in vue, let's see how that goes.</p>


                <p>for now, this is all i have for my 'about' page. i seriously don't know what should or shouldn't be on 
                this page yet, i mean, the details. but you can check back later, maybe i would have figured it out by then.</p>

                <p>thanks for stopping by. xoxo
                {{love}}
            </p>
        </div>
    </div>
    <Footer />
    
</template>

<script>

    import data from '../posts.json'
    import Footer from './Footer'
    export default {
        name: "AboutMe",
        components:{
            Footer
        },
        data(){
            return{
                love: data.love
            }
        }
    }
</script>

<style lang="scss" scoped>
p{
    font-family: 'Rajdhani', serif ;
    font-size: 30px;
    margin-top: -2%;

}
a{
    font-family: 'Rajdhani', serif ;
    /* font-size: 30px; */
    text-decoration: none;
    color: black;
}
.about{
    display: grid;
    grid-template-columns: 30% 70%;
    column-gap: 8%;
    width: 60%;
    margin: 2% 0% 0% 20%;
}
img{
    width: 100%;
    border-radius: 5px;
}
@media only screen and (max-width: 1000px) {
    .about{
        display: flex;
        flex-direction: column;
        padding-bottom: 4.2%;
        width: 70%;
        margin: 0% 0% 0% 15%;
    }
    p{
        margin-top: 15%;
    }
}
@media only screen and (max-width: 600px) {
    p{
        font-size: 20px;
    }
    .about{
        width: 90%;
        margin: 0% 0% 0% 5%;
    }
}

</style>
