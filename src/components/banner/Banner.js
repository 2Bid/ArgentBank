import React from 'react'

import "./banner.css"


export default function Banner(props) {
  return (
    <div className='banner' style={{ backgroundImage:`url(${props.img})` }}>
      <div className='banner__content'>
        <h2>
          No fees.<br/>
          No minimum deposit.<br/>
          High interest rates.
        </h2>
        <p>Open a savings account with Argent Bank today !</p>
      </div>
    </div>
  )
}
