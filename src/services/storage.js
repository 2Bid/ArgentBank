export const saveToken = (token, userRemember) => {
    userRemember ?
    window.localStorage.setItem('Token',token)
    :
    window.sessionStorage.setItem('Token',token)
}

export const deleteToken = (token) => {
    window.localStorage.removeItem('Token')
    window.sessionStorage.removeItem('Token')
}

export const getToken = () => {
    return localStorage.getItem('Token') || sessionStorage.getItem('Token')
}
