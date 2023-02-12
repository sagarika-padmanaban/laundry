import React from 'react'
import Aside from '../Aside/Aside'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Create from '../Create/Create'
import './Home.css'

const Home = ({username,email}) => {
  console.log(username,email);
  return (
    <div className='create'>
      <Header username={username}  />
      <div className='create__content'>
        <Aside/>
        <Create email={email}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
