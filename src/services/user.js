import instance from "./http-config"

export const dataUser = () => {
    return instance.post('/user/profile')
}

export const modifyDataUser = (firstName, lastName) => {
    return instance.put('/user/profile', {firstName, lastName})
}