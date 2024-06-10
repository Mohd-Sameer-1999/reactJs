import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numbersAllowed) str += "01234456789"
    if(charactersAllowed) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charactersAllowed, passwordGenerator]);

  return (
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-700 my-8 text-orange-500'>
      <h1 className='text-white text-center my-4'>Password Generator</h1>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={password}
          placeholder='password'
          className='outline-none w-full py-1 px-3'
          readOnly
          ref={passwordRef}
        />
        <button className=' outline-none bg-blue-700 px-3 py-0.5 text-white' onClick={copyToClipboard}>
          copy
        </button>
      </div>  
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range" 
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            value={numbersAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            value={charactersAllowed}
            onChange={() => {
              setCharactersAllowed((prev) => !prev)
            }}
          />
          <label>Special Characters</label>
        </div>
      </div>
      
    </div>
  )
}

export default App
