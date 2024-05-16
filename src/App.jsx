import { useEffect, useState } from 'react'

import './App.css'
import Temperature from './Components/Temperature'
import Highlight from './Components/Highlight'
import axios from 'axios';

function App() {
  const[city,setcity]=useState("New Delhi");
  const[data,setdata]=useState(null);
  const[loader,setloader]=useState(true);
  const apiurl=`https://api.weatherapi.com/v1/current.json?key=7445861921c244efac093231241605&q=${city}&aqi=no`
  const fetchdata=async()=>{
    setloader(true)
    if(city!=""){
      const data_url=await axios.get(apiurl) 
      console.log(data_url.data)
      setdata(data_url.data)
      console.log("This the data ",data);
    }
    setloader(false)
  
  
  }
  useEffect(()=>{
  fetchdata();
  },[city])

  return (
    <div className='bg-[#1F213A] h-screen flex justify-center align-top' >

       <div className='mt-40 w-1/5 h-1/2 '>
       <Temperature  city={city} setcity={setcity} data={data}/>
       </div>  

       <div className=' mt-40  w-1/3 h-1/2 ml-8 p-10 grid grid-cols-2 gap-6'>
       <h2 className='text-4xl font-bold text-slate-500 col-span-2'>Today's Weather :</h2>
       {/* loader */}
       {loader==true ?(<p className='text-yellow-500'>Loading the data .....</p>):(
        <>
        <Highlight data={
            {
              title:"Wind Speed",
              val:data.current.gust_kph,
              unit:"KPH",
              direction:data.current.wind_dir
            }
          }/>
          <Highlight data={{
            title:"Humidity",
            unit:"%",
            val:data.current.humidity
          }}/>
          <Highlight data={{
            title:"visibility",
            unit:"km",
            val:data.current.vis_km
          }}/>
          <Highlight   data={{
            title:"Air Pressure",
            unit:"mb",
            val:data.current.pressure_mb
          }}/>
        </>
       )}
       
       </div>
      
      </div>
  )
}

export default App
