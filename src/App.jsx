import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Greeting} from './Greeting';
import Navbar from './Navbar';
import Boxes from './Boxes';
import NewForm from './NewForm';
import MappingData from './MappingData';
// import Chatbox from './Chatbox';
import ProductList from './ProductList';
import { Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Chatbox from './Chatbox2';
import BarChart from './BarChart';
import LineChart from './LineChart';
import SegmentChart from './SegmentChart';
import DoughnutChart from './DoughnutChart';
import Scatterplot from './Scatterplot';
import XgBoostPredict from './XgBoostPredict';
import HeatMap from './HeatMap';
import ConfusionMatrix from './ConfusionMatrix';


function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState("This is standard response")

  const hisName = "leeeeee"
  const isMediumScreen = window.innerWidth >= 600;


  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Greeting name= { hisName }/>
      {response && <div>{response}</div>} */}
     <div className='align-center w-[100vw] items-center justify-center content-center'>

         
     <XgBoostPredict />


      <div className='w-[100%] px-10 justify-center space-y-20 mx-auto align-middle items-center'>
       

{/* 
      <div className='mt-20 grid grid-cols-3 gap-10 justify-center align-middle content-center items-center h-[60vh] text-3xl border-black border-2'>
        <div className='col-span-2'>
          <BarChart/>
        </div>
        <div className='col-span-1'>
          <DoughnutChart />
        </div>
      </div> */}

    <div className={isMediumScreen ? "grid grid-cols-3 gap-10 mt-20 justify-center align-middle content-center items-center h-[60vh] text-3xl border-black border-2" : "flex flex-col gap-20 mt-20 justify-center align-middle content-center items-center  border-black border-2"}>
          <div className={isMediumScreen ? 'col-span-2' : 'w-[100%]'}>
            <BarChart />
          </div>
          <div className={isMediumScreen ? 'col-span-1' : 'w-[75%]'}>
            <DoughnutChart />
          </div>
        </div>



      <div className='flex justify-center align-middle content-center items-center h-[60vh] text-3xl border-black border-2'>

        <Scatterplot />
      
      </div>


      <div className='flex  justify-center align-middle content-center items-center h-[60vh] text-3xl border-black border-2'>

        <HeatMap />

        </div>


        <div className='flex  justify-center align-middle content-center items-center h-[100%] py-20 text-3xl border-black border-2'>

        <ConfusionMatrix />

        </div>


        <Chatbox />
        {/* <LineChart />
        <SegmentChart />
 */}


      </div>


      </div>
{/* 
      <ProductList />

      <MappingData />

      <NewForm />

      <Boxes /> */}

    </div>
    
  )
}


export default App
