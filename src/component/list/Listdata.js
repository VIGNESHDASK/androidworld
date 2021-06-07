import React, { Component } from 'react'
import lst from '../jsondata/new.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";
import './Listdata.css'
import { Button } from '@material-ui/core';
import { isLogedin, logout } from '../logcheck/check';


 class Listdata extends Component {
   
    render() {
      if(!isLogedin()){
    
        return <div>
          {
            this.props.history.push("/login")
          }

        </div>

      }
      else
      {
        return (
            <div className="main1">
                
                        <Button className="btn" variant="contained" color="primary" onClick={()=>logout()}>logout</Button>
      <div className='hell'>
<Table striped bordered hover>
  <thead>
    <tr>
      <th> ID</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Price</th>
    </tr>
  </thead>
  
  {lst.map((p,i)=>{

        return <tbody><tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td><Link to={`/products/${p.id}`} data={p.price}>{p.model}</Link></td>
                <td>{p.price}</td>
                </tr></tbody>
            })}
 
</Table>

</div>
</div>

)
 }
}
}
export default Listdata
 