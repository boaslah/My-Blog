<template>

    <div class="about">
        <div>
            <img src="../../public/assets/me.jpeg" alt="">
        </div>
        <div>
            <p>
                Hi, welcome to my corner. I'm Blessing D. Boaslah, a Christian, a life learner, and a Liberian Software Engineer working at 
                <a href="https://kwagei.com">Kwagei Group</a>.</p>
                <p>I currently live in Liberia, this sweet land of liberty, where I've spent all my years so far.</p>
                
                <p> As a Software Engineer, I'm from 'the JavaScript' background, and I'm currently learning Vue.js amongst others.
                    I built this blog with HTML, CSS, Vue.js and a bit of Node.js. Moreover, I'm doing other personal projects in Vue.js.</p>

                <p>I started making tech videos for YouTube late 2021, because I found out no one else does that in Liberia, at least for now. 
                    It's also my goal to share my journey and knowledge with young Liberians who want to become Software Engineers. </p>

                <p>This blog results from my constant habit of journaling. Over the years, I've grown to love writing my thoughts and experiences.   
                    Hence, I've decided to explore the public writing space, and of course, I'm open to corrections and feedback. I'd happily embrace them.</p>

                <p>Thanks for stopping by, do have a lovely day. xoxo</p>
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
