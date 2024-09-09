import {useState, useEffect} from 'react'

function App() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername]  = useState('')
  const [reTypedPassword, setReTypedPassword] = useState('')


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

  return (
   <>
    <div>
      <h1>LOGIN:</h1>

      <form>
        <input type="text" placeholder="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
        <br></br>
        <input type="password" placeholder="password" value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
        <br></br>
        <button type="post">Log In</button>
      </form>
    </div>


    <div>
      <h1>SignUp</h1>

      <form>
        <input type='text' placeholder='username' value={username} onChange={(e) =>{setUsername(e.target.value)}}></input>
        <br></br>
        <input type='text' placeholder='email' value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
        <br></br>
        <input type='password' placeholder='password' value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
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
