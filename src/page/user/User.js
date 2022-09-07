import React, { useEffect, useState } from 'react'
import { dataUser, modifyDataUser } from '../../services/user'

export default function User() {

  const [firstname, setFirstName ] = useState("")
  const [lastname, setLastName ] = useState("")

  useEffect(()=>{
    dataUser()
    .then((response)=>{
      setFirstName(response.data.body.firstName)
      setLastName(response.data.body.lastName)
    })
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      modifyDataUser('test', 'ok')
    },5000)
  },[])

  return (
    <div>{firstname} {lastname}</div>
  )
}
