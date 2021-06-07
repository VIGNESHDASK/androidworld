// @flow 
import Password from '../pswd/password'
import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { useHistory } from "react-router";
import { setLogin } from '../logcheck/check';
import './login.css'
import { Spinner } from 'react-bootstrap';


 function Submission(){
    const [email , setEmail ] = React.useState();
    const [errors,setEmailError] =React.useState();
    const [password , setPassword ] = React.useState();
    const [passerrors,setPasserrors] =React.useState();
    let history = useHistory();


    const handlechange =(event) =>{
        const{target :{value}}=event;
        setEmailError({email:''})
        setEmail(value);
    };
    const handlechange1 =(event) =>{
        const{target :{value}}=event;
        setPasserrors({password:''})
        setPassword(value);

    };
   function handleRegister ()
   {
       history.push("/register")

   }
    const handlelogin=(event)=>{
        <Spinner animation="grow" />
        let reg1= new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(email)
        let reg2= new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(password)
        if(!reg1 && !reg2){
            setEmailError({email :'Enter a valid mail' })
            setPasserrors({password :'incorrect Password' })
            
        }
        else if(!reg1){
            setEmailError({email :'Enter a valid mail' })
            
        }
        else if(!reg2){
            setPasserrors({password :'incorrect Password' })
        }
        else{
            setLogin()
            history.push('/products')
        }
    };

    return(
        <div className="sub-container">

            <div className="input-sec">
              <h1 className='login1'>Login </h1>
        
                        <TextField
                        id="outlined-basic"
                        label="email" 
                        type="gmail"
                        value={email}
                       inputProps={{maxLength:255}}
                       onChange={handlechange}
                       error={Boolean(errors?.email)}
                       helperText={(errors?.email)}
                      variant="outlined"
                      />
                     <p></p>
                      <TextField
                        id="outlined-basic"
                        label="password" 
                        type="password"
                        value={password}
                       inputProps={{maxLength:255}}
                       onChange={handlechange1}
                    //   required
                       error={Boolean(passerrors?.password)}
                       helperText={(passerrors?.password)}
                      variant="outlined"
                      />
                    
                    <div className="dragon">
                    <Button variant="contained" color="primary" onClick={()=>handlelogin()} >Login</Button>
                    </div>
                    <p >
                    <Button variant="contained" color="secondary" onClick={()=>handleRegister()} >Create New Account</Button>
                    </p> 
                     
                    
                    </div>
                    
                   
             <div className-="pass10"> 
                 <Password />   
                </div>  
    
            </div>
    )
}
export default Submission;