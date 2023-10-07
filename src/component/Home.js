import React, {useEffect,useState} from "react";
import './styles.css';
import axios from "axios";

function Home() {
  const [data, setData]=useState({
    celcius:'',
    how:'',
    name:'Enter the City name',
    humidity: "",
    speed:""
  })

  const [name,setName]=useState('');
  

  const handleClick=()=>{
    if(name!==""){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6779c756072f54ef319d588aebd9c66f&units=metric`)
    
    .then(response => {
        console.log(response.data);
        setData({...data,
        celcius:response.data.main.temp,
        how:response.data.weather[0].main,
        name:response.data.name,
        humidity:response.data.main.humidity,
        speed:response.data.wind.speed
    })})
    .catch(error => console.log(error));
    }
  }

  return (
    <div className='container'>
      <center>
      <div className='weather' >
        
        <div className="search">
        <input type='text' placeholder='Enter city' onChange={e => setName(e.target.value)} style={{height:'40px' ,width:'40px'}}/>
        <button className ='srch' style={{height:'40px' ,width:'60px'}} onClick={handleClick}>
          search
        </button>
        </div>
        <div className="temp">
        <h1>{data.name}</h1>
          <img src='/profile/weather.png' style={{width:80 ,height:80}} alt=""></img>
          <h2>{data.how}</h2>
          <h2>{Math.round(data.celcius)}°C</h2>
          
        </div>
        <div className="info">
          <div className="col">
           <img src="/profile/humidity.png" style={{width:80 ,height:80}} alt=""/>
            <div className="humid">
               <p>{Math.round(data.humidity)}%</p>
               <p>humidity</p>
            </div>  
          </div>
          <div className="col">
           <img src="/profile/wind.png" style={{width:80 ,height:80}} alt=""/>
            <div className="wind"> 
               <p>{Math.round(data.speed)} km/h</p>
               <p> Wind</p>
          </div>
           </div>
      
      </div>
    </div>
    </center>
    </div>
  );
}

export default Home;
