import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Greeting} from './Greeting';
import Navbar from './NewNavBar';
import Boxes from './Boxes';
import NewForm from './NewForm';
import MappingData from './MappingData';
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
import Technology from './Technology';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';


function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState("This is standard response")
  const [activeSection, setActiveSection] = useState(null);

  const homeRef = useRef(null)
  const dataRef = useRef(null);
  const analysisRef = useRef(null);
  const trainingRef = useRef(null);
  const evaluationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const activeElement = entries.find((entry) => entry.isIntersecting);
      if (activeElement) {
        setActiveSection(activeElement.target.id);
      }
      // } else {
      //   // If no section is in view, remove the highlight
      //   setActiveSection(null);
      // }
    });
  
    // Observe the section below the viewport initially:
    const firstSection = homeRef.current;
    const secondSection = dataRef.current;
    const thirdSection = analysisRef.current;
    const fourthSection = trainingRef.current;
    const fifthSection = evaluationRef.current;
    
    observer.observe(firstSection);
    observer.observe(secondSection);
    observer.observe(thirdSection);
    observer.observe(fourthSection);
    observer.observe(fifthSection);
  
  
    return () => {
      observer.disconnect();
    };
  }, [homeRef, dataRef, analysisRef, trainingRef, evaluationRef]);



  return (
    <div  className=''>

      <Navbar homeRef={homeRef} dataRef={dataRef} analysisRef={analysisRef}  trainingRef={trainingRef} evaluationRef={evaluationRef} activeSection={activeSection} />
      <Analytics />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

     <div className='align-center w-[100%] items-center justify-center content-center'>



      <div className='w-[100%] px-0 justify-center space-y-20 mx-auto align-middle items-center'>
  
      <section ref={homeRef} id="home-section">

        <XgBoostPredict/>
  

      <div className='homeContainers'>

      <Introduction />

      </div>
      </section>




      <hr ref={dataRef}  id="data-section" className='horizontalBar' />
      <section  >


        <div  className='homeContainers'>

            <DataFrameTable />

        </div>


        <hr className='horizontalBar' />

        <div className='homeContainers'>
                
          <BarAndDoughnut />

        </div>


      <hr   className='horizontalBar' />


        <div className='homeContainers'>
                
                <UpdatedDataset />
      
        </div>
        </section>


        <hr ref={analysisRef} id="analysis-section" className='horizontalBar' />

        <div className='homeContainers'>
                
              <HeatMapComponent />
      
        </div>


      <hr  className='horizontalBar' />


        <div className='homeContainers'>

            <ScatterplotComponent />

        </div>


        <hr ref={trainingRef}  id="training-section" className='horizontalBar' />


        <div className='homeContainers'>
                
                <ModelTraining />
      
        </div>


        <hr ref={evaluationRef} id="evaluation-section" className='horizontalBar' />


        <div className='homeContainers'>
                
          <ResultsData />
      
        </div>



        <hr   className='horizontalBar' />


        <div className='homeContainers'>

        <ConfusionMatrix />

        </div>

        <hr className='horizontalBar' />


        <div className='homeContainers'>

        <Summary />

        </div>


        <hr className='horizontalBar' />

        <div className='homeContainers'>

        <LimitationsFuture />

        </div>


        <hr className='horizontalBar' />

        <div className='homeContainers'>

      <Technology />

      </div>




        <div className='flex bg-[#d0e3f9] justify-center align-middle content-center items-center h-[100%] text-lg pt-[80px] pb-[80px]'>

        <Chatbox />
        </div>


      </div>

      </div>


<div className='bg-[#113768] text-white font-semibold align-middle content-center items-center justify-center min-h-[100px]' style={{ display: 'flex', alignItems: 'center' }}>
  <Footer/>
</div>

    </div>


  )
}


export default App
