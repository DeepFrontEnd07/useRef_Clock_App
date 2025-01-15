import logo from './logo.svg';
import './App.css';
import {useRef,useState} from 'react'

function App() {

  const [time,setTime]=useState(0)

  const divRef=useRef(null)

  const handleStart=()=>{
    divRef.current=setInterval(()=>{
      setTime((prevtime)=>(prevtime)+1)
    },1000)

  }

  const handleStop=()=>{
    clearInterval(divRef.current)
    divRef.current=null

  }

  const handleReset=()=>{
    handleStop()
    setTime(0)

  }

  return (
    <>
    <h1>Clock App - useRef Hook</h1>

    <h2>Timer : {time} </h2>
     
     <div className="buttons">
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    <button onClick={handleReset}>Reset</button>
    </div>
    </>
  
  );
}

export default App;
