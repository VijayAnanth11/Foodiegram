import axios from "axios";

const url_friend = "http://localhost:8080/api/f1/friends";

class CommentService{
    getFriends(){
        return axios.get(url_friend);
    }

    createFriend(friend){
        return axios.post(url_friend, friend);
    }

    getFriendById(friendId){
        return axios.get(url_friend + '/' + friendId);
    }

    updateFriend(friend, friendId){
        return axios.put(url_friend  + '/' + friendId, friend);
    }

    deleteFriend(friendId){
        return axios.delete(url_friend  + '/' + friendId);
    }

}

export default new CommentService()