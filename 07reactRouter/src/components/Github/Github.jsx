import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Mohd-Sameer-1999")
    //     .then(res => res.json())
    //     .then(data => setData(data))
        
    // },[])
    return (
        <div className='text-center text-white text-3xl bg-gray-700 m-4 p-4'>
            Github Followers: {data?.followers}
            <img src={data?.avatar_url} alt="github profile pic"  width={300}/>
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const repsonse = await fetch("https://api.github.com/users/Mohd-Sameer-1999")

    return repsonse.json();
}