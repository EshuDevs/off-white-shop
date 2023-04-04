import React from 'react'
import  Logo  from '../images/logo.png'

function Navbar() {
  return (
    <nav className='justify-between w-full flex bg-transparent p-5'>
        <div>
            <img src={Logo} className=' w-1/4'/>
        </div>
        <ul className='list-none align-middle flex gap-5 items-center text-brown font-kanit font-bold text-xl w-auto'>
            <li className='relative'>
                <input type='text' placeholder='Search' className='px-2 w-auto rounded-2xl'/>
                <button className="material-symbols-outlined absolute top-0.5 right-2">search</button>
            </li>
            <li>
            <span className="material-symbols-outlined flex text-3xl">favorite</span>
            </li>
            <li>
            <span className="material-symbols-outlined flex text-3xl">shopping_bag</span>
            </li>
            <li>
                
            </li>
        </ul>
    </nav>
  )
}

export default Navbar