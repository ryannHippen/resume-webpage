import axios from "axios";

const DEFAULT_API_URL = 'http://localhost:5000/'
const GAME_SEARCH = 'games/'
const GAME_DETAILS = 'gamedetails/'
const GET_USERS = 'users'
const USER_LOGIN = 'user/login'

class Api {

    userLoginRequest(user){
        return axios({
            "method": "POST",
            "url": `${DEFAULT_API_URL}${USER_LOGIN}`,
            "data": {
                'username': user.username,
                'password': user.password       
            },

        });
    }

    getRequestGameSearch(title) {
        return axios({
            "method": "GET",
            "url": `${DEFAULT_API_URL}${GAME_SEARCH}${title}`,
        });
    }

    getRequestGameDetails(title, platform) {
        return axios({
            "method": "GET",
            "url": `${DEFAULT_API_URL}${GAME_DETAILS}${title}/${platform}`,
        });
    }

    getRequestAllUsers() {
        return axios({
            "method": "GET",
            "url": `${DEFAULT_API_URL}${GET_USERS}`,
        });
    }
}
export default new Api()