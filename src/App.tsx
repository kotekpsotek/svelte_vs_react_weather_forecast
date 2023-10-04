import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Funcional from "./components/Functional";
import Card from './components/Cards';

export interface APICallResult {
  daily: {
    sunrise: string[],
    sunset: string[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    time: string[],
    uv_index_max: number[]
  }
}

function App() {
  const [result, setRes] = useState<APICallResult | undefined>();

  useEffect(() => {
    const call = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,showers,snowfall,snow_depth,weathercode&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto";
    fetch(call)
      .then(v => v.json())
      .then(j => setRes(v => {
        v = j;
        return v;
      }))
  }, []);

  return (
    <>
      <Funcional/>
      <div id="cards-space" className='w-screen h-screen flex justify-center items-center'>
        <Card result={result}/>
      </div>
    </>
  )
}

export default App
