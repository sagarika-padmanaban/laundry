import React from 'react'
import './Header.css'

const Header = () => {
  return (
      <div className='create__header'>
        <div className='create__header__heading'>
            <h1>LAUNDRY</h1>
        </div>
        <div className='create__header__nav'>
            <h3>Pricing</h3>
            <h3>Career</h3>
            <h3 id='username'>UserName</h3>
        </div>
      </div>
  )
}

export default Header
