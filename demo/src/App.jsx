// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { useEffect } from 'react';
import axios from 'axios'

function App() {
  // const [value , setValue] = useState(1)
  // const [multiply, setMultiply] =useState(1)


  // let value = 2;
  // let multiply = value * 5;

  // const multipliedValues = () =>{
  //   setMultiply(value*5)
  //     setValue(value+1)
  // }

  
  
  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page+1&sparkline=false";

    axios.get(url).then((response) => {
      // return response
      console.log(response);
    
    })
    
  },[])
  



  return (
    <>
      {/* <h1>Main value:{value} </h1>
      <button onClick={multipliedValues}>Click </button>
      <h1>multiplied value: {multiply}</h1> */}
      <div className="App"></div>
    </>
  );
}

export default App
