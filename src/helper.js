import axios from "axios";

async function getPosts (){
    let data = await (await axios.get("https://studyclass.glitch.me")).data;
    return data.posts
}

export default{
    getPosts
}