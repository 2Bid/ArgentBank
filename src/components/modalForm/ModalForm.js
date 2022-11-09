import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateToken } from '../../features/userSlice'
import login from '../../services/login'
import { saveToken } from '../../services/storage'

import "./modalForm.css"

export default function ModalForm() {

     const [userMail, setUserMail ] = useState('')
     const [userPass, setUserPass ] = useState('')
     const [userRemember, setUserRemember ] = useState(false)

     const [userError, setUserError ] = useState('')

     const dispatch = useDispatch()

     const handleUserMail = (e) =>{
          setUserMail(e.target.value)
     }

     const handleUserPass = (e) =>{
          setUserPass(e.target.value)
     }

     const handleUserRemember = (e) =>{
          setUserRemember(e.target.checked)
     }

     const navigate = useNavigate()

     const submitForm =(e)=>{
          e.preventDefault()
          login(userMail, userPass)
          .then(data=>{
               saveToken(data.data.body.token, userRemember)
               dispatch(updateToken(data.data.body.token))
               navigate('/user')
          })
          .catch((e)=>{
               setUserError("La combinaison email/mot de passe est incorrect.")
          })
     }

  return (
     <section className="modalForm">
          <i className="modalForm__icon modalForm__icon--user"></i>
          <h1>Sign In</h1>
          <span className='input-error'>{userError}</span>
          <form>
               <div className="input-wrapper">
                    <label htmlFor="username">Username</label><input type="text" id="username" value={userMail} onChange={handleUserMail}/>
               </div>
               <div className="input-wrapper">
                    <label htmlFor="password">Password</label><input type="password" id="password" value={userPass} onChange={handleUserPass}/>
                    
               </div>
               <div className="input-remember">
                    <input type="checkbox" id="remember-me" value={userRemember} onChange={handleUserRemember}/><label htmlFor="remember-me">Remember me</label>
               </div>
              
               <button className="sign-in-button" onClick={submitForm}>Sign In</button> 
          </form>
   </section>
  )
}
