import { useState, useEffect } from 'react'
import Funcional from "./components/Functional";
import Card from './components/Cards';
import { type APICallResult, letsCallAPI } from "../../intermediate_api";

function App() {
  const [result, setRes] = useState<APICallResult | undefined>();

  useEffect(() => {
    letsCallAPI()
      .then(v  => {
        setRes(j => {
          j = v;
          return j;
        })
      })
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
