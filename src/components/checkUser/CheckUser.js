import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '../../services/storage'

export default function CheckUser(props) {

    let token = getToken()

    if(props.loged){
        if(token){
            return props.children
        }
        else{
            return <Navigate to="/log"/>
        }
    }
    else{
        if(!token){
            return props.children
        }
        else{
            return <Navigate to="/user"/>
        }
    }
}
