import React from 'react'
import { Link } from 'react-router-dom'
import './SuccessPopup.css'

const SuccessPopup = () => {
  return (
    <div className='popup__body'>
      <div className='popup'>
        <div className='popup_inside-create'>
        <div className='dark'>Your Order is successfully Placed</div>
        <p>You can track the delivery in order Section</p>
        <Link to='/order'>
        <button className='goto-btn'>go to orders</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default SuccessPopup
