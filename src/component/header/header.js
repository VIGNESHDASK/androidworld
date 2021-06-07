
import React from 'react'
import './Header.css'
import {
  
  
    Link
  } from "react-router-dom";
  

export default function header() {
    return (
        <header>
            
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">Aboutus</Link>
            <Link to="/contact">ContactUs</Link>
        </header>
        
    )
}
