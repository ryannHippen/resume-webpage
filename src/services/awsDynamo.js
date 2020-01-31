import axios from "axios";

const API_URL = 'https://sq7599n9jh.execute-api.us-east-2.amazonaws.com/default/sendContactInfo'

class dynamoApi {

    postRequest(contactInfo) {  
        return axios({
            "method": "POST",
            "data": JSON.stringify(contactInfo),
            "url": `${API_URL}`,
            "headers": {
                "content-type": "application/json",
            },
        });
    }
}
export default new dynamoApi()