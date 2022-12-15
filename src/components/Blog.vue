<template>

    <div class="blog-posts">
        <div class="social-icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div id="single-post" v-for="post in blogs" @click="reading(post.title, post.post, post.author, post.date, post.duration, post.category)">
            <div class="post-img">
                <img src="../assets/post-cover.jpg" alt="">
            </div>
            <div class="post-details">
                <div class="post-title">
                    <h2>{{post.title}}</h2>
                </div>
                <div>
                    <i>by  {{post.author}}</i>
                </div>
                <div>
                    <p>...</p>
                </div>
                <div>
                    <span class="category">{{post.category}}</span>
                    <i>{{post.date}}.   {{post.duration}}                     </i>
                </div>
            </div>
        </div>
    </div>
    
    <Footer />
</template>

<script>

import data from  './../posts.json'
import Footer from './Footer'

export default{
    name: "BlogPosts",
    components:{
        Footer
    },
    data(){
        return{
            blogs: data.posts
        }
    },
    methods:{
        reading(title, post, author, date, duration, category){
            let maindiv = document.getElementById("single-post");
            maindiv.style.display = "none";
            console.log(title, maindiv);

        }
    }
}
</script>

<style lang="scss" scoped>
.category{
    color: black !important;
    background-color: rgb(230, 230, 230);
    border-radius: 50px;
    padding: 1.5%;
    margin-right: 5%;
    font-size: 13px;
    font-family: 'Roboto', serif;
}
.social-icons i{
    color: white;
    background-color: black;
    margin: 0.3%;
    font-size: 11px;
    background-size: 40px;
    padding: 1%;
    border-radius: 170px;
    text-align: right;
    float: right;
}
.social-icons{
    margin-right:20%;
}

#single-post:hover{
    box-shadow: 2px 2px 5px 2px gray;
    cursor: pointer;
}


.post-details{
    display: grid;
    grid-template-rows: 25% 5% 50% 15%;
    margin: 0% 10% 0% 0%;
}

.post-details i{
    color: rgb(112, 111, 111);
    /* position: absolute; */
}

#single-post{
    display: grid;
    grid-template-columns: 25% 75%;
    column-gap: 5%;
    width: 60%;
    margin: 3% 0% 0% 20%;
    /* box-shadow: 0.2px 0.2px 2px 0.2px gray; */
}
a{
    color: black;
}
img{
    padding: 6%;
    width: 100%;
}
h2{
    font-size: 30px;
    margin-top: 0.5%;
    font-family: 'Prompt', serif;
}
p{
  
    font-family: 'Roboto', serif;
}
.blog-posts{
    display: grid;
    width: 100%;
    margin: 0% 0% 0% 0%;
}
@media only screen and (max-width: 600px) {
    .social-icons{
        display: none;
    }
    #single-post{
        margin: 1% 0% 0% 4%;
        width: 90%;
    }
    .category{
        padding: 2%;
    }

    h2{
        font-size: 15px;
        margin-top: 0.5%;
        font-family: 'Prompt', serif;
    }
    .post-details{
        display: grid;
        grid-template-rows: 25% 5% 50% 15%;
        row-gap: 1%;
        margin: 0% 10% 0% 0%;
        padding: 5%;
    }
}
@media only screen and (max-width: 1000px) {
    #single-post{
        display: flex;
        flex-direction: column;
        padding-bottom: 4.2%;
    }
    .post-details i{
        color: rgb(112, 111, 111);
        position: none;
    }
    img{
        padding: 5%;
        width: 90%;
    }
    .post-details{
        display: grid;
        grid-template-rows: 25% 5% 50% 15%;
        /* row-gap: 10%; */
        margin: 0% 10% 0% 0%;
        padding: 5%;
    }

}

</style>
