import React from 'react'

import "./serviceBloc.css"

export default function ServiceBloc(props) {
  return (
    <div className='serviceBloc'>
      <img className='serviceBloc__picto' src={props.icon} alt=""/>
      <h3 className='serviceBloc__titre'>{props.titre}</h3>
      <div className='serviceBloc__texte--container'>
        <p>{props.texte}</p>
      </div>
    </div>
  )
}