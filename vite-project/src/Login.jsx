import { useState } from 'react'
import './Login.css'

function Login() {
  const [uname, setUname] = useState("");
  const [pword,setPword] = useState("");

  return (
    <>
      <h1 align="center" className='login'>Login</h1>
      <hr width="100%"/>
      <div className='lc'>
      <label htmlFor="username">User Name : </label>
      <input type="text" name="username" id="username" onChange={(e)=>setUname(e.target.value)} required />
      </div>
      <div className='lc'>
      <label htmlFor="pw">Password : </label>
      <input type="password" name="pw" id="pw" onChange={(e)=>setPword(e.target.value)} required />
      </div>
      <button id="login" className='lc' onClick={()=>console.log("username = "+uname+" password = "+pword)}>Login</button>
    </>
  )
}

export default Login
