import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value , setValue] = useState(1)
  const [multiply, setMultiply] =useState(1)


  // let value = 2;
  // let multiply = value * 5;

  const multipliedValues = () =>{
    setMultiply(value*5)
      setValue(value+1)
  }

  return (
    <>
      <h1>Main value:{value} </h1>
      <button onClick={multipliedValues}>Click </button>
      <h1>multiplied value: {multiply}</h1>
    </>
  );
}

export default App
