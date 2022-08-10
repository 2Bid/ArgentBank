import React from 'react'
import { Link } from "react-router-dom"

import "./header.css"
import Logo from "../../images/argentBankLogo.png"

export default function Header() {
  return (
    <header>
      <Link to="/" className='logo__container'>
        <img className="logo" src={Logo} alt="logo argent bank"/>
      </Link>
      <div className='log__container'>
        <i class="fa fa-user-circle"></i>
        <Link to="/log">Sign in</Link>
      </div>
    </header>
  )
}
