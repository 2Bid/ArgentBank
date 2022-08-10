import axios from "axios";

export default function login(userMail, userPass){
    return axios.post('http://localhost:3001/api/v1/user/login',
    {
        email : userMail,
        password : userPass
    })
}