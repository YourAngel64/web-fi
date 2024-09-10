import {useState, useEffect} from 'react'
import { dataPost, dataGet } from './functions/axiosFunctions'
import getCsrfToken from './functions/csrfToken'

function App() {
  const [csrfToken, setCsrfToken] = useState('')

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername]  = useState('')
  const [reTypedPassword, setReTypedPassword] = useState('')

  //get token
  useEffect(() =>{
    const getToken = async () =>{
      const token = await getCsrfToken()
      setCsrfToken(token)
    }

    getToken()
  }, [])
  

  //Checks if passwords match.
  const PasswordsCheck = () =>{
    if(password == reTypedPassword){
      return(
        //returns nothing if so
        <></>
      )
    }
    else{
      return(
        //returns a warning if dont
        <p>passwords dont match D: </p>
      )
    }
  }


//sign up 
const postUser = async  (e) =>{

  const data = await dataPost('http://localhost:8000/user/post/', {
    'username': username,
    'email': email,
    'password': password
  }, csrfToken, e)

  console.log(data.res)

}      


//login
const getUser = async (e) =>{
  const data = await dataPost('http://localhost:8000/user/get/', {
    'email': email,
    'password': password
  }, csrfToken, e)
  console.log(data.res)
  console.log(data.username)
}

  return (
   <>
    <div>
      <h1>LOGIN:</h1>

      <form onSubmit={getUser}>
        <input type="text"  placeholder="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
        <br></br>
        <input type="password" placeholder="password" value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
        <br></br>
        <button type="post">Log In</button>
      </form>
    </div>


    <div>
      <h1>SignUp</h1>

      <form onSubmit={postUser}>
        <input type='text' name='username' placeholder='username' value={username} onChange={(e) =>{setUsername(e.target.value)}}></input>
        <br></br>
        <input type='text' name='email' placeholder='email' value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
        <br></br>
        <input type='password' name='password' placeholder='password' value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
        <br></br>
        <input type='password' placeholder='re-type password' value={reTypedPassword} onChange={(e) =>{setReTypedPassword(e.target.value)}}></input>
        <br></br>
        {password && reTypedPassword ? <PasswordsCheck></PasswordsCheck> : <></>}
        <br></br>
        <button type='post'>CREATE AN ACCOUNT</button>
      </form>

    </div>
   </> 
  );
}

export default App;
