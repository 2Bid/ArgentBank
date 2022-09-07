import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '../../services/storage'

export default function CheckUser(props) {

    let token = getToken()

    if(props.loged === true){
        if(token){
            return props.children
        }
        else{
            return <Navigate to="/log"/>
        }
    }
    
    if(props.loged === false){
        if(!token){
            return props.children
        }
        else{
            return <Navigate to="/user"/>
        }
    }
}
