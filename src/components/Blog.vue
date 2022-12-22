<template>

    <div class="blog-posts">
        <div class="social-icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div id="blogs">
            <div id="single-post" v-for="post in blogs">
                <div class="post-img" @click="reading(post.index)">
                    <img src="../assets/perfection-post-cover.jpg" alt="">
                </div>
                <div class="post-details" @click="reading(post.index)">
                    <div class="post-title">
                        <h2>{{post.title}}</h2>
                    </div>
                    <div>
                        <!-- <i>{{post.duration}}</i> -->
                    </div>
                    <div>
                        <p>{{post.hock}}</p>
                    </div>
                    <div>
                        <span class="category">{{post.category}}</span>
                        <i>{{post.date}}</i>
                    </div>
                </div>
            </div>
        </div>
        <div id="reading-page">

            <img src="../assets/perfection-post-cover.jpg" alt="">

            <div class="post-title">
                <h2>{{blogs[index].title}}</h2>
            </div>

            <div>
                <i class="author">by  <b>{{blogs[0].author}}</b>,    Published on</i>         
                <i>{{blogs[index].date}}</i>
                <i class="duration">{{blogs[index].duration}}</i>
            </div><br><br>

            <div>
                <p>{{blogs[index].post}}</p>
            </div><br><br>

            <!-- <span class="category">{{blogs[index].category}}   </span><br><br><br> -->

            <i class="fa fa-arrow-left nav" v-if="index > 0" @click="reading(index-1)"></i>   <i class="fa fa-solid fa-arrow-right next nav" v-if="index < 1" @click="reading(index+1)"></i>

            <div><br><br>
                <h3>Comments</h3>

                <div v-for="eachComment in blogs[index].comments"  class="all-comments">
                    <br><br><i class="fa-solid fa-user"></i><p class="comments">{{eachComment}}</p>
                </div><br><br><br>

                <input type="text"  v-model="comment"  placeholder="Write Comment"><br><br>
                <button @click="comments = blogs[index].comments; comments.push(comment); clearInput()">Add Comment</button>
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
            blogs: data.posts,
            comment: '',
            comments: [],
            index: 0
        }
    },
    methods:{
        reading(index){
            document.getElementById("blogs").style.display = "none";
            document.getElementById("reading-page").style.display = "block";
            this.index = index;
        },
        clearInput(){
            // data.dumps(this.comment);
            console.log(this.comments); 
            this.comment = "";
        }
    }
}
</script>

<style lang="scss" scoped>

.nav{
    background-color: rgb(214, 214, 214);
    color: black;
    padding: 1%;
    font-size: 30px;
}
.nav:hover{
    cursor: pointer;
}

.next{
    float: right;
}
.duration{
    margin-left: 2%;
}
#reading-page .category{
    margin: 0% 5% 0% 0%;
}
#reading-page .fa-user{
    margin: 1% 1% 0% 0%;
    // background-color: rgb(140, 140, 146);
    font-size: 30px;
    padding: 5px;
    color: orange;
    border-radius: 5px;
}
input{
    width: 60%;
    padding: 2.5%;
    font-size: 20px;
}
button{
    border: none;
    border-radius: 5px;
    color: white;
    background-color:rgba(98, 110, 114, 0.863) ;
    padding: 2%;
    font-weight: solid;
}
button:hover{
    cursor: pointer;
}
.comments{
    background-color: rgb(230, 230, 230);
    padding: 2%;
    border-top-left-radius: 0px;
    border-top-right-radius: 200px;
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 200px;
    padding-left: 2%;
    display: inline-block;
}
.all-comments{
    display: flex;
    flex-direction: row;
}
.category{
    color: black !important;
    background-color: rgb(230, 230, 230);
    border-radius: 50px;
    padding: 1.5%;
    margin-right: 5%;
    font-size: 13px;
    font-family: 'Roboto', serif;
}
#reading-page{
    display: none;
    width: 60%;
    margin: 3% 0% 0% 20%;
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
.author{
    margin-right: 1%;
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
#blogs img{
    padding: 6%;
    width: 100%;
}

#reading-page img {
    width: 100%;
    padding-bottom: 5%;
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
    #reading-page .fa-user{
        margin: 0% 1% 0% 0%;
    }
    #reading-page .fa-user{
        margin: 0% 1% 0% 0%;
        font-size: 20px;
    }

    .social-icons{
        display: none;
    }
    #single-post{
        margin: 1% 0% 0% 4%;
        width: 90%;
    }
    .category{
        padding: 3%;
    }

    h2{
        font-size: 25px;
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
    #reading-page{
        width: 90%;
        margin: 1% 0% 0% 5%;
    }
    #reading-page h2{
        font-size: 20px;
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
    #blogs img{
        padding: 5%;
        width: 90%;
    }
    #reading-page img{
        width: 100%;
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
