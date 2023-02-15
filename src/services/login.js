import instance from "./http-config"

export default function login(userMail, userPass){
    return instance.post(
        'user/login',
        {
            email : userMail,
            password : userPass
        }
    )
}