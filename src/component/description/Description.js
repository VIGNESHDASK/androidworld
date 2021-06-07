import React from 'react'
import { useParams } from "react-router";
import lst from '../jsondata/new.json'
import './dis.css'
import { useHistory } from "react-router";
import { isLogedin, logout } from '../logcheck/check';
import { Button } from '@material-ui/core';


export default function Description() {

    
    const req = useParams();
    const id1=req.id
    let history = useHistory();


    if(!isLogedin()){
    
        return <div>
          {
            history.push("/login")
          }

        </div>

      }

    return (
        <div>
        <Button className="btn" variant="contained" color="primary" onClick={()=>logout()}>logout</Button>
        
        <div className='disku'>
                {lst.map((p,i)=>{
                    if(id1 == p.id){
                        return <div>
                                 <h2 className='h22'>{p.name} {p.model}</h2>
                                 <img src={p.imege} width="300px" alt="nokia"  />
                                 <h2 className='h222'>Price : Rs {p.price}  /-</h2>
                             </div>
                         }
                  return false;
                 })}
        </div>
        </div>
    )
}
