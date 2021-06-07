import React from 'react'
import './index.css'
import { Button, ButtonGroup } from '@material-ui/core';

export default function index() {
    return (
        <>
        <div className="top-section">
        <ButtonGroup className="button" variant="contained" color="primary" aria-label="contained primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
        </div>
        <div className="index">
            <h1 className='hel'>Welcome to home page</h1>
            <h4>ALWAYS BELIEVE
THAT SOMETHING WONDERFUL
IS ABOUT TO HAPPEN</h4>
        </div>
        <div className="index1">
       <div className="indexs">
            <h1 className='hel'>Flexible</h1>
            </div>
        <div className="indexs">
            <h1 className='hel'>Simple</h1>
            </div>
            <div className="indexs">
            <h1 className='hel'>Strong</h1>
            </div>
        </div>
       
        
        </>
    )
}
