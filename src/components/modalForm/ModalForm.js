import React, { useState } from 'react'
import login from '../../services/login'

import "./modalForm.css"

export default function ModalForm() {

     const [userMail, setUserMail ] = useState('')
     const [userPass, setUserPass ] = useState('')
     const [userRemember, setUserRemember ] = useState(false)

     const handleUserMail = (e) =>{
          setUserMail(e.target.value)
     }

     const handleUserPass = (e) =>{
          setUserPass(e.target.value)
     }

     const handleUserRemember = (e) =>{
          setUserRemember(e.target.checked)
     }

     const submitForm =(e)=>{
          e.preventDefault()
          login(userMail, userPass)
          .then(data=>persistToken(data.data.body.token))
          
     }

     const persistToken = (token) => {
          console.log(token)
          userRemember ?
          window.localStorage.setItem('Local Token',token)
          :
          window.sessionStorage.setItem('Session Token',token)
     }

  return (
     <section className="modalForm">
          <i className="modalForm__icon modalForm__icon--user"></i>
          <h1>Sign In</h1>
          <form>
               <div className="input-wrapper">
                    <label for="username">Username</label><input type="text" id="username" value={userMail} onChange={handleUserMail}/>
               </div>
               <div className="input-wrapper">
                    <label for="password">Password</label><input type="password" id="password" value={userPass} onChange={handleUserPass}/>
               </div>
               <div className="input-remember">
                    <input type="checkbox" id="remember-me" value={userRemember} onChange={handleUserRemember}/><label for="remember-me">Remember me</label>
               </div>
              
               <button className="sign-in-button" onClick={submitForm}>Sign In</button> 
          </form>
   </section>
  )
}
