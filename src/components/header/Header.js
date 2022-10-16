import React from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import "./header.css"
import Logo from "../../images/argentBankLogo.png"
import { deleteUserToken } from '../../features/user/userSlice';
import { deleteToken } from '../../services/storage'

export default function Header() {

  const dispatch = useDispatch()

  const token = useSelector((state)=>state.user.token)
  const user = useSelector((state)=>state.user.userData)

  return (
    <header>
      <Link to="/" className='logo__container'>
        <img className="logo" src={Logo} alt="logo argent bank"/>
      </Link>
      {
        !token ? 
        <div className='log__container'>
          <i class="fa fa-user-circle"></i>
          <Link to="/log" className='user__log'>Sign in</Link>
        </div>
         :
        <div className='log__container'>
          <div className='log__container'>
          <i class="fa fa-user-circle"></i>
          <Link to="/user" className="user__log">{user.firstName}</Link>
         </div>

          <div className='log__container'>
            <i class="fa fa-sign-out"></i>
            <Link to="/" onClick={()=>{deleteToken(token); dispatch(deleteUserToken())}} className="user__log">Log out</Link>
          </div>
        </div>
      }
    </header>
  )
}
