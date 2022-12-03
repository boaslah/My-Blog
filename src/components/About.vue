<template>

    <div class="about">
        <div>
            <img src="../assets/me.jpeg" alt="">
        </div>
        <div>
            <p>
                well, i'm blessing boaslah, as you might have guessed. i'm a life-long learner and software sngineer at 
                <a href="https://kwagei.com">Kwagei Group</a>.</p>
                <p>i'm from the JavaScript background, and i'm currently learning Vue. </p>
                <p> i built this my long awaited blog with html, css and vue. i'm also doing other projects in vue, let's see how that goes.</p>


                <p>for now, this is all i have for my 'about' page. i seriously don't know what should be or shouldn't be on 
                this page yet, i mean, the details. but you can check back later, maybe i would have figured it out by then.</p>

                <p>thanks for stoping by. xoxo
                {{love}}
            </p>
        </div>
    </div>
    
</template>

<script>

import data from '../posts.json'
export default {
    name: "AboutMe",
    data(){
        return{
            love: data.love
        }
    }
}
</script>

<style scoped>
p{
    font-family: 'Sacramento', serif ;
    font-size: 30px;
    margin-top: -2%;

}
a{
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
}
@media only screen and (max-width: 1000px) {
    .about{
        display: flex;
        flex-direction: column;
        padding-bottom: 4.2%;
        margin: 0% 0% 0% 15%;
    }
}
@media only screen and (max-width: 600px) {
    p{
        font-size: 20px;
    }
}

</style>
