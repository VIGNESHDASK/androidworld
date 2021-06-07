import React from 'react'
import '../home/index.css'
import './contact.css'
import { Button,TextField} from '@material-ui/core';
import  { Component } from 'react'

export class contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            forrm_data:'',
        }
    }
 
handleForm(){
    this.props.history.push("/sub")  
}


    
    render() {
        return (
            <>
            < h1 className='h11'>contact us page</h1>
            <div className="contact">
                <div className="contact1">
                    <p> Corporate Headquarters</p>
                    <p>Electorics accessories Pvt. Ltd.,</p>
                    <p>Electronics Bhavanam,</p>
                    <p> Pattom, Thiruvananthapuram,</p>
                    <p>Phone- 888867676776,</p>
                    <p> Kerala, INDIA.</p>
                    </div>


                <div className="contact2">
                <form > 
                <TextField multiline rowsMax={5} rows={2} id="standard-basic" label="Fedback" />
                <p></p>
                    <Button variant="contained" color="primary" onClick={()=>this.handleForm()}>Submit</Button>
                </form>
                </div>
            </div>
            </>
        )
    }
}

export default contact

