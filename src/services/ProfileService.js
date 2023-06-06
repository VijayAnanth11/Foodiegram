import axios from "axios";

const url_profile = "http://localhost:8080/api/p2/profiles";

class ProfileService{
    getProfiles(){
        return axios.get(url_profile);
    }

    createProfile(profile){
        return axios.post(url_profile, profile);
    }

    getProfileById(profileId){
        return axios.get(url_profile + '/' + profileId);
    }

    updateProfile(profile, profileId){
        return axios.put(url_profile  + '/' + profileId, profile);
    }

    deleteProfile(profileId){
        return axios.delete(url_profile  + '/' + profileId);
    }

}

export default new ProfileService()