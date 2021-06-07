
import Header from './component/header/header'
import Index from './component/home/index'
import Contact from './component/contactus/contact'
import About from './component/about/about'
import Listdata from './component/list/Listdata'
import Description from './component/description/Description'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import React, { Component } from 'react'
import Submission from './component/login/Submission'
import formSubmit from './component/contactus/formSubmit'
import Register from './component/register/Register'



export class App extends Component {
  render() {
    return (
      <div className="App">
     <Router>
     <Header />
     <Route path="/products" exact component={Listdata} /> 
     <Route path="/products/:id" component={Description} />
     <Route path="/" exact component={Index} />
     <Route path="/contact" component={Contact} />
     <Route path="/about" component={About} />
     <Route path="/sub" component={formSubmit} />
     <Route path="/login" component={Submission} />
     <Route path="/register" component={Register} />
     </Router>
     </div>
    )
  }
}

export default App

