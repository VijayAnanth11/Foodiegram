import axios from "axios";

const url_comment = "http://localhost:8080/api/c1/comments";

class CommentService{
    getComments(){
        return axios.get(url_comment);
    }

    createComment(comment){
        return axios.post(url_comment, comment);
    }

    getCommentById(commentId){
        return axios.get(url_comment + '/' + commentId);
    }

    updateComment(comment, commentId){
        return axios.put(url_comment  + '/' + commentId, comment);
    }

    deleteComment(commentId){
        return axios.delete(url_comment  + '/' + commentId);
    }

}

export default new CommentService()