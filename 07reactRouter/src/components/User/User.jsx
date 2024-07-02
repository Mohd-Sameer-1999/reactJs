import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userId} = useParams()
  return (
    <div className='text-center text-white text-3xl bg-gray-700 m-4 p-4'>User: {userId}</div>
  )
}

export default User