

import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';

export default function Register() {

  let history =useHistory();
  const  [username , setUsername ] = React.useState();
  const  [nameError , setNameerror ] = React.useState();

  const [email , setEmail ] = React.useState();
  const [emailError , setEmailerror ] = React.useState();

  const [password,setPassword]=React.useState();
  const [passwordError ,setPassworderror]=React.useState();

  const[cpassword,setcPassword]=React.useState();
  const[cpasswordError,setCPassworderror]=React.useState();


  const handleUsername = (event)=>{
    const {target :{value}}=event
    setNameerror({username:''})
    setUsername(value)
  }


  const handleEmail = (event)=>{
    const {target :{value}}=event
    setEmailerror({email:''})
    setEmail(value)
  }

  const handlePassword = (event)=>{
    const {target :{value}}=event
    setPassworderror({password:''})
    setPassword(value)
  }


  const handlecPassword = (event)=>{
    const {target :{value}}=event
    setCPassworderror({cpassword:''})
    setcPassword(value)
  }
  function handleLogin()
  {
        let reg1= new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(email)
        let reg2= new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(password)
     
        if(!reg1){
            setEmailerror({email :'Enter a valid mail' })
            
        }
        if(!reg2){
            setPassworderror({password :'incorrect Password' })
        }
        if(username ==null){
          setNameerror({username:'enter a valid userName'})
      }
      if(cpassword==null)
      {
        setCPassworderror({cpassword:'incorrect Password'})
      }
      if(cpassword!=null&&password !=cpassword){
        setCPassworderror({cpassword:'password mismatch'})
      }
      else{
        history.push("/login")

      }
        
      
  }

  

    return (
        <div className="input-sec">
            <h3>Reghister here..</h3>
            <p></p>
            <TextField
                        id="outlined-basic"
                        label="username" 
                        type="text"
                        value={username}
                       inputProps={{maxLength:255}}
                       onChange={handleUsername}
                       error={Boolean(nameError?.username)}
                       helperText={(nameError?.username)}
                      variant="outlined"
                      />
                     <p></p>
                      <TextField
                        id="outlined-basic"
                        label="email" 
                        type="email"
                        variant="outlined"
                        value={email}
                       inputProps={{maxLength:255}}
                       onChange={handleEmail}
                       error={Boolean(emailError?.email)}
                       helperText={(emailError?.email)}
                       />

                    <p></p>
                      <TextField
                        id="outlined-basic"
                        label="password" 
                        type="password"
                        variant="outlined"
                        value={password}
                       inputProps={{maxLength:255}}
                       onChange={handlePassword}
                       error={Boolean(passwordError?.password)}
                       helperText={(passwordError?.password)}
                       />

                    <p></p>
                      <TextField
                        id="outlined-basic"
                        label="confirm-password" 
                        type="password"
                        variant="outlined"
                        value={cpassword}
                       inputProps={{maxLength:255}}
                       onChange={handlecPassword}
                       error={Boolean(cpasswordError?.cpassword)}
                       helperText={(cpasswordError?.cpassword)}
                       />
                        <div className="dragon">
                    <Button variant="contained" color="secondary"  onClick={()=>handleLogin()}>Register</Button>
                    </div>
                             
        </div>
    )
}
