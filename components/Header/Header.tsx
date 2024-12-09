import React from 'react'
import Top from './Top'
import Logo from './logo'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='w-screen'>
        <Top />
        <Logo />
        <Nav />
    </div>
  )
}

export default Header