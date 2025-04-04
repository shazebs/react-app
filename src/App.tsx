import './App.css';

import axios from 'axios';
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import AppRoutes from "./routes";

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  // const [city, setCity] = useState('');

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          // console.log('position', position);
          const url = `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=eea9e18832544f1895a67aecd6707f4a`;
          try {
            const response = await axios.get(url); 
            if (response.data.results.length > 0) {
              console.log('geolocation components', response.data.results[0].components);
              const locationInfo = response.data.results[0].formatted;
              console.log('street address:', locationInfo);
            }
          } catch (error) {
            console.error('Error getting location:', error);
          }
        }
      );
    } else {
      console.log('Geolocation not supported by browser');
    }
  }

  useEffect(function() {
    getLocation();
    getAdvice();
  }, []);

  return (
    <>
      <button onClick={getAdvice}>Get advice</button>
      <p>{advice}</p>
      <Message count={count} city={'Beuamont'}/>

      <AppRoutes />
      <Outlet />
    </>
  )
}

function Message(props: { count: number, city:string }) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice in {props.city}
    </p>
  )
}

// export default App;