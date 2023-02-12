import React, { useState } from 'react'
import './CancelPopup.css'


const CancelPopup = ({setdelete,alert,popup,setpopup,setalert}) => {
  const deletefromdb=()=>{

      setdelete(true)
      if(alert){
        (setalert(false))
      }
      else{
        (setpopup(false))      // setalert(false)?(setalert(false)):(setpopup(false))

      }
  }

  return (
    <div>
       <div className='popup__body'>
      <div className='popup'>
        <div className='popup_inside'>
        <div className='alert'><p>Alert</p></div>
        <div className='warning'>⚠️Are you sure want to cancel the order <br></br>No: OR1213</div>
        {/* <Link to='/order'> */}
        <button onClick={deletefromdb} className='proceed_btn'>Proceed</button>
        {/* </Link> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default CancelPopup
