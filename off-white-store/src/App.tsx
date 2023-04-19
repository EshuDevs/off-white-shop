import './App.css'
import Hero from './components/Hero'
import Products from './components/Products'
import {useState} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import unc from "./assets/unc.png"
import whiteSail from "./assets/white-sail.png"
import jordanFive from "./assets/jordan-five.png"
import airForce from "./assets/air-force.png"
import serena from "./assets/serena.png"
import vaporMax from "./assets/vapormax.png"
import dunk from "./assets/dunk.png"
import presto from "./assets/presto.png"


function App() {
  const[open,setOpen] = useState(false)

  const [products] = useState([
      { id: 1, image: whiteSail ,name: "OFF-WHITE x NIKE Jordan 4 White Sail", price: "299.99$" },
      { id: 2, image: unc, name: "OFF-WHITE x NIKE Jordan 1 High UNC" ,price: "349.99$"},
      { id: 1, image: jordanFive, name: "OFF-WHITE x NIKE Jordan 4 White Sail", price: "299.99$" },
      { id: 1, image: airForce, name: "OFF-WHITE x NIKE Jordan 4 White Sail", price: "299.99$" },
      { id: 1, image: serena, name: "OFF-WHITE x NIKE Jordan 4 White Sail", price: "299.99$" },
      { id: 1, image: vaporMax, name: "OFF-WHITE x NIKE Jordan 4 White Sail", price: "299.99$" },
      { id: 1, image: dunk, name: "OFF-WHITE x NIKE Jordan 4 White Sail", price: "299.99$" },
      { id: 1, image: presto, name: "OFF-WHITE x NIKE Jordan 4 White Sail", price: "299.99$" }
    ])


  
  
  return (
    <>
      <Navbar open={open} setOpen={setOpen}/>
      <Sidebar open={open} setOpen={setOpen}/>
      <Hero/>
      <Products products={products}/>
    </>
  )
}

export default App
