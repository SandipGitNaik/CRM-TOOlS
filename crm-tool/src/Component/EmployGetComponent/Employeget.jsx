import axios from "axios";
import { Component } from "react";

export default class Employeget extends  Component{
    constructor(props){
        super(props);
        this.state={
            employdata:[]
        }
        this.getemploydata()
    }
    getemploydata=()=>{
        console.log("access allow.......1...")
        axios.get("http://localhost:8080/Emp/get").then(

         (res)=>{
            this.setState(this.state.employdata=res.data)
          //  console.log("result"+this.state.employdata)
            //console.log("result")
         }
        ) 
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                   
                    {
                        this.state.employdata.map((test)=>
                        <div className=" card cp" style={{width:'27rem',height:'25rem'}}>
                            <p><b>First Name::&nbsp;&nbsp;&nbsp;&nbsp;</b>{test.emp_first_name}</p>
                            <p><b>Last Name::&nbsp;&nbsp;&nbsp;&nbsp;</b>{test.emp_last_name}</p>
                            <p><b>Contact::&nbsp;&nbsp;&nbsp;&nbsp;</b>{test.emp_contact_no}</p>
                            <p><b>Email::&nbsp;&nbsp;&nbsp;&nbsp;</b>{test.emp_email}</p>
                            <p><b>Disgnation::&nbsp;&nbsp;&nbsp;&nbsp;</b>{test.emp_designation}</p>
                            <p><b>Qulifiction::&nbsp;&nbsp;&nbsp;&nbsp;</b>{test.emp_qulification}</p>
                            <p><b>Gender::&nbsp;&nbsp;&nbsp;&nbsp;</b>{test.emp_gender}</p>
                        </div>
                   ) }
                   
                </div>
            </div>
        )
    }
}