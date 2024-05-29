// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  type crypto = {
    id: string;
    symbol: string;
    name: string;
    current_price:number;
    high_24h:number;
    low_24h:number;
    ath:number;
  };
  const [cryptos, setCryptos] = useState<crypto[] | null>();


  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page+1&sparkline=false";

    axios.get(url).then((response) => {
      // return response
      setCryptos(response.data);
    });
  }, []);

  // return  (
  // <div>
  //     {cryptos ? cryptos.map((data) => {
  //       return (
  //         <p>{data.ath}</p>
  //       )
  //     }) : null}

  
  //   </div>
  // )

  return <div className="App">{cryptos ? cryptos.map((data) => {
    return <p>{data.name + " $"+ data.current_price}</p>
  } ) : null}</div>
}

export default App;
