import React, { Component } from 'react'
import './password.css'

export class password extends Component {
    render() {
        return (
            <div className='pwd'>
               <ul>
               <li> A password should be alphanumeric.</li>
               <li>First letter of the password should be capital.</li>
               <li>Password must contain a special character (@, $, !, &, etc).</li>
               <li>Password length must be greater than 8 characters.</li>
               <li>One of the most important that the password fields should not be empty.</li>
                </ul>

            </div>
        )
    }
}

export default password

