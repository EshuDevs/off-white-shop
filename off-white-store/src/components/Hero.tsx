import React from 'react'
import Navbar from './Navbar'
import Jordan from '../images/jordan.webp'

function Hero() {
  return (
    <div className=' bg-background text-brown'>
        <Navbar/>
        <div className='flex p-10 justify-evenly m-10'>
            <div className='w-1/4 flex flex-col gap-4'>
                <p className=' font-barcode text-2xl'>OFF-WHITE X NIKE</p>
                <h1 className=' font-kanit text-8xl font-extrabold italic'>UNITE IN STYLE</h1>
                <p className='font-inter'>Push boundaries and <br/>break barriers with <br/> the nike x off-white <br/>collection</p>
                <h2 className='font-kanit border-b-2 pb-4 border-brown w-1/3 text-5xl font-extrabold italic'>GET</h2>
                <p className='font-inter py-3 '>OFF-WHITE x NIKE Jordan 4 White Sail <br/> Price 299.99$</p>
                <button className='flex bg-brown text-background w-1/3 align-center justify-center p-4 font-inter'>BUY NOW</button>
            </div>
            <img src={Jordan} className="w-2/4"/>
        </div>
    </div>
  )
}

export default Hero