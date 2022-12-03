<template>

    <div class="blog-posts">
        <div class="social-icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
        </div>

        <div class="single-post" v-for="post in blogs">
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
                    <i>{{post.date}}.   {{post.duration}}                     </i>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

import data from  './../posts.json'

export default{
    name: "BlogPosts",
    components:{
    },
    data(){
        return{
            blogs: data.posts
        }
    },
}
</script>

<style scoped>
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

.single-post:hover{
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
.post-img{
}
.single-post{
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
    .single-post{
        margin: 1% 0% 0% 4%;
        width: 90%;
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
    .single-post{
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
