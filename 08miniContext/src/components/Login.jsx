import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div>
        <input 
            type="text"
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)} 
        />
        {"\t\t"}
        <input 
            type="password" 
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
            Submit
        </button>
    </div>
  )
}

export default Login