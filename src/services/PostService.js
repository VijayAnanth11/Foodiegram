import axios from "axios";

const url_post = "http://localhost:8080/api/p1/posts";

class PostService{
    getPosts(){
        return axios.get(url_post);
    }

    createPost(post){
        return axios.post(url_post, post);
    }

    getPostById(postId){
        return axios.get(url_post+ '/' + postId);
    }

    updatePost(post, postId){
        return axios.put(url_post  + '/' + postId, post);
    }

    deletePost(postId){
        return axios.delete(url_post  + '/' + postId);
    }
}

export default new PostService()