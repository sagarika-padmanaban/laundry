import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({username}) => {
  console.log(username);
  return (
      <div className='create__header'>
        <div className='create__header__heading'>
            <p>LAUNDRY</p>
        </div>
        <div className='create__header__nav'>
            <p>Pricing</p>
            <p>Career</p>
            <div className='link'>
            <Link to="/">
            <h3 id='username' >{username}</h3>
            </Link>
            </div>
    
        </div>
      </div>
  )
}

export default Header
