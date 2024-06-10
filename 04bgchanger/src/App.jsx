import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 px-6 py-4 rounded-full bg-white shadow-lg' >
           <button className='outlined-none px-8 py-2 rounded-full bg-red-600 shadow-lg text-white'
            onClick={() => setColor("red")}>Red</button>
           <button className='outlined-none px-8 py-2 rounded-full bg-green-600 shadow-lg text-white'
            onClick={() => setColor("green")}>Green</button>
           <button className='outlined-none px-8 py-2 rounded-full bg-blue-600 shadow-lg text-white'
            onClick={() => setColor("blue")}>Blue</button>
           <button className='outlined-none px-8 py-2 rounded-full bg-violet-600 shadow-lg text-white'
            onClick={() => setColor("violet")}>Violet</button>
            <button className='outlined-none px-8 py-2 rounded-full bg-yellow-400 shadow-lg text-white'
            onClick={() => setColor("yellow")}>Yellow</button>
           <button className='outlined-none px-8 py-2 rounded-full bg-pink-300 shadow-lg text-white'
            onClick={() => setColor("pink")}>Pink</button>
            <button className='outlined-none px-8 py-2 rounded-full bg-slate-600 shadow-lg text-white'
            onClick={() => setColor("grey")}>White</button>
           <button className='outlined-none px-8 py-2 rounded-full bg-black shadow-lg text-white'
            onClick={() => setColor("black")}>black</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
