export const saveToken = (token, userRemember) => {
    userRemember ?
    window.localStorage.setItem('Token',token)
    :
    window.sessionStorage.setItem('Token',token)
}

export const getToken = () => {
    return localStorage.getItem('Token') || sessionStorage.getItem('Token')
}
