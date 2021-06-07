// import React, { Component } from 'react'
// import Password from '../pswd/password'
// import './login.css'
// import { Button ,TextField} from '@material-ui/core';
// import { setLogin } from '../logcheck/check';


//  class login extends Component {
//      constructor(props) {
//          super(props);
//          this.state={
//              gmail :'',
//              password :'',
//              nameError:'',
//              passwordError:'',
//              err:'error'
             
             
//          }

//      }



//      handleGmail = (event) =>{
//          this.setState({
//         gmail : event.target.value
//          })

//      }
//      handlePassword =(event) =>{
//          this.setState({
//          password:event.target.value
//          })
//      }
//      gmai()
//      {
//          if(true)
//          {
//              const {gmail} =this.state;
//              const g1=new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
//              const isOk=g1.test(gmail);
            
//              if(isOk){
//                  return true;
//              }
//              else{
//                  return false;
//              }
//          }
//      }
//      pass()
//      {
        
//          if(true)
//          {

//             const { password } = this.state;
//             const re = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
//             const isOk = re.test(password);
//              if (isOk) {
//                  return true
          
//              }else{
            
//                  return false
//              }   
//         }
//      }
//      valid()
//      {
//          if(!this.gmai() && !this.pass())
//          {
//              this.setState({
//                  nameError:'invalide gmail',
//                  passwordError:'invalid password'
//              })
//              return false;
//          }
//         if(!this.gmai())
//          {
//              this.setState({
//                  nameError:'invalide gmail'
//              })
//              return false;
//          }
//       if( !this.pass())
//          {
            
//              this.setState({
//                 passwordError:'invalid password'
//              })
//              return false;
//          }  
//          return true;
//      }
//      handleLogin()
//      {
//          if(this.valid())
//          {
//              setLogin()
//              this.props.history.push("/products")    
//          }   
//      }
//     render() {
//         return (
//             <div className="app-container">  
//               <div className="inputSection">
//               <h1 className='login1'>Login here</h1>
//               {/* <input
//                 type="text"
//                  onChange={this.handleGmail}
//                 placeholder="email"
//                  valid={this.state.gmail}
//                 />
//                 <p style={{color:'red'}}>{this.state.nameError}</p>
//              <input
//                 type="password"
//                 onChange={this.handlePassword}
//                 placeholder="password"
//                 />
//                  <p style={{color:'red'}}>{this.state.passwordError}</p> */}
//                 <div>
//                 <TextField
//                  id="outlined-basic"
//                  label="email" 
//                  valid={this.state.gmail} 
//                  onChange={this.handleGmail} 
//                  variant="outlined" />

//                 <p style={{color:'red'}}>{this.state.nameError}</p>

//                 <TextField 
//                 id="outlined-error-helper-text" 
//                 label="password" 
//                 valid={this.state.password} 
//                 type="password"  
//                 onChange={this.handlePassword} 
//                 variant="outlined" />


//                 <p style={{color:'red'}}>{this.state.passwordError}</p>
//             </div>


            


           
//             <Button variant="contained" color="primary" onClick={()=>this.handleLogin()}>Login</Button>
//             </div>
//             <div className="pass">
//             <Password />     
//             </div>
//             </div>
//         )
//     }
// }
// export default login;
