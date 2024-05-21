import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data =useLoaderData()
    // const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://api.github.com/users/darshilchodvadiya')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setData(data)
//     })
//   }, [])
    

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center m-4 bg-gray-600 text-white p-4">
        <img src={data?.avatar_url} alt="Git picture" className='mx-auto h-96 w-96' />
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className="font-bold text-xl">Github Username : {data?.name}</h1>
            <p className='text-lg'>Github Followers : {data?.followers}</p>
        </div>
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(
      "https://api.github.com/users/darshilchodvadiya"
    );
    return response
}