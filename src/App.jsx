import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Greeting} from './Greeting';
import Navbar from './Navbar';
import Boxes from './Boxes';
import NewForm from './NewForm';
import MappingData from './MappingData';
import Chatbox from './Chatbox';
import { Tweets } from './Tweets';
import ProductList from './ProductList';
import { Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState("This is standard response")

  const hisName = "leeeeee"


  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Greeting name= { hisName }/>
      {response && <div>{response}</div>}

      <Chatbox />

      <ProductList />

      <MappingData />

      <NewForm />

      <Tweets/>

      <Boxes />

    </div>
    
  )
}


export default App
