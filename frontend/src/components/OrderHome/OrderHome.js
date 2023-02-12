import React from 'react'
import Aside from '../Aside/Aside'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Order from '../Order/Order'

const OrderHome = ({email,username}) => {
  return (
    <div className='order'>
    <Header username={username}  />
    <div className='create__content'>
      <Aside/>
      <Order email={email}/>
    </div>
    <Footer />
  </div>
  )
}

export default OrderHome
