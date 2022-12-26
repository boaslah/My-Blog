<template>

    <div class="about">
        <div>
            <img src="../../public/assets/me.jpeg" alt="">
        </div>
        <div>
            <p>
                Hi, welcome to my corner, I'm Blessing Boaslah. I'm a christian, a life learner and Software Engineer working at 
                <a href="https://kwagei.com">Kwagei Group</a>.</p>
                <p>I currently live in Liberia, where I've spent all my years so far.</p>
                <p>As a Software Engineer, I'm from the JavaScript background, and I'm currently learning Vue.js amongst others. </p>
                <p>I built this blog with HTML, CSS and Vue.js.  Moreover, I'm doing other personal projects in vue, let's see how that goes.</p>

                <p>I started making tech videos for YouTube early this year, because I found out that no one does that in Liberia, at least for now. I upload videos like once or twice every month
                 because of how busy I can be. Obviously, I'm learning to improve on that.</p>

                <p>This blog is the result of my constant habit of journaling. Over the years, I've grown to love writing down my thoughts and experiences.</p>
                <p>Hence, I've decided to explore the public writing space, and of course, I'm open to corrections and feedback. I'd happily embrace them.</p>

                <p>Thanks for stopping by. xoxo</p>
                <p>- Blessing &hearts;
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
    font-size: 22px;
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
