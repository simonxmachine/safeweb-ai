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
import PredictionTool from './PredictionTool';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';
import axios from "axios";
import Form from './Form';


function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState("This is standard response")
  const [activeSection, setActiveSection] = useState(null);
  const [ip, setIP] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const homeRef = useRef(null)
  const dataRef = useRef(null);
  const analysisRef = useRef(null);
  const trainingRef = useRef(null);
  const evaluationRef = useRef(null);
  const chatbotRef = useRef(null);


  const currentSite = document.location.href;
  const screen = window.screen.width;
  const orientation = window.screen.orientation.type;
  const isMobile = window.screen.width < 768;
  const navigator = window.navigator.userAgent;
  // const orientation = screen.orientation.type;

  console.log("this is screen:", screen);
  console.log("this is orientation:", orientation);
  console.log("is it mobile:", isMobile);
  console.log("navigator type:", navigator);

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
    console.log("this is the ip:", res.data.ip);
    const ipAddress = res.data.ip;
    
// Fetch geolocation data using ipapi
    const geolocationRes = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
    console.log(geolocationRes.data);
    const country = geolocationRes.data.country_name;
    const state = geolocationRes.data.region;
    setCountry(country);
    setState(state);

    console.log("Country:", country);
    console.log("State:", state);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);


        // Ip address: {ip} <br/>
        // Country: {country} <br/>
        // State: {state} <br/>
        // Current Site: {currentSite} <br/>
        // Screen Size: {screen}<br/>
        // Orientation: {orientation}<br/>
        // Mobile? : {isMobile ? isMobile : "false"}<br/>
        // Browser: {navigator}<br/>



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
    const sixthSection = chatbotRef.current;
    
    observer.observe(firstSection);
    observer.observe(secondSection);
    observer.observe(thirdSection);
    observer.observe(fourthSection);
    observer.observe(fifthSection);
    observer.observe(sixthSection);
  
  
    return () => {
      observer.disconnect();
    };
  }, [homeRef, dataRef, analysisRef, trainingRef, evaluationRef, chatbotRef]);



  return (
    <div  className=''>

      <Navbar homeRef={homeRef} dataRef={dataRef} analysisRef={analysisRef}  trainingRef={trainingRef} evaluationRef={evaluationRef} chatbotRef={chatbotRef} activeSection={activeSection} />
      <Analytics />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

     <div className='align-center w-[100%] items-center justify-center content-center'>



      <div className='w-[100%] px-0 justify-center space-y-16 mx-auto align-middle items-center'>
  


      <section ref={homeRef} id="home-section" className='headerBar' />

        <XgBoostPredict/>

  

      <div className='homeContainers'>

      <Introduction />ß



      </div>

      <div className='homeContainers'>

      <Form />



      </div>


      <hr ref={dataRef}  id="data-section" className='horizontalBar' />



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

<PredictionTool />

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

        <div className='homeContainers pb-0'>

      <Technology />

      </div>


      <hr ref={chatbotRef} id="chat-section" className='headerBar'  />

        <div className='flex bg-[#d0e3f9] justify-center align-middle content-center items-center h-[100%] text-lg pt-[70px] pb-[80px]'>
        


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
