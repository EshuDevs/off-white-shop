import React from 'react'
import  Logo  from '../images/logo.png'

function Navbar() {
  return (
    <nav className='justify-between w-full flex bg-transparent p-5'>
        <div>
            <img src={Logo} className=' w-1/4'/>
        </div>
        <ul className='list-none flex gap-3 items-center text-brown font-kanit font-bold text-xl'>
            <li>
                SEARCH
            </li>
            <li>
                FAVORITES
            </li>
            <li>
                CART
            </li>
            <li>
                
            </li>
        </ul>
    </nav>
  )
}

export default Navbar