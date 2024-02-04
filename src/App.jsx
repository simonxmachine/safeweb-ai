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
import ScatterplotComponent from './ScatterplotComponent';
import XgBoostPredict from './XgBoostPredict';
import HeatMap from './HeatMap';
import ConfusionMatrix from './ConfusionMatrix';
import DataFrameTable from './TheDataset';
import BarAndDoughnut from './BarAndDoughnut';
import UpdatedDataset from './UpdatedDataset';
import HeatMapComponent from './HeatMapComponent';
import ModelTraining from './ModelTraining';
import ResultsData from './ResultsData';
import Summary from './Summary';
import LimitationsFuture from './LimitationsFuture';
import Introduction from './Introduction';


function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState("This is standard response")

  const hisName = "leeeeee"
  const isMediumScreen = window.innerWidth >= 600;


  return (
    <div className='mb-40'>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

     <div className='align-center w-[100%] items-center justify-center content-center'>


      <div className='w-[100%] px-10 justify-center space-y-20 mx-auto align-middle items-center'>
       

      <XgBoostPredict />


      <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>

      <Introduction />

      </div>




        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>

            <DataFrameTable />

        </div>


        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>
                
          <BarAndDoughnut />

        </div>


        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>
                
                <UpdatedDataset />
      
        </div>


        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>
                
              <HeatMapComponent />
      
        </div>


        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>

            <ScatterplotComponent />

        </div>




        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>
                
                <ModelTraining />
      
        </div>

        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>
                
                <ResultsData />
      
        </div>


        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>

        <ConfusionMatrix />

        </div>


        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>

        <Summary />

        </div>

        <div className='flex justify-center align-middle content-center items-center h-[100%] text-3xl border-black border-2'>

        <LimitationsFuture />

        </div>



        <div className='flex justify-center align-middle content-center items-center h-[100%] text-lg border-black border-2'>

        <Chatbox />
        </div>

      </div>


      </div>


    </div>
    
  )
}


export default App
