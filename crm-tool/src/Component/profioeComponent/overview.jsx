import { Component } from "react";

export default class Overview extends Component{
    constructor(){
        super()
        this.state={
          user:JSON.parse(localStorage.getItem("user"))
        
        }
    }
    render(){
        return(
            <div className="container ">
           <div className="row">
                        <h3><i> Profile Details</i></h3>
    <h5 className="col-3"> id No</h5> <h5 className="col-9">{this.state.user.emp_ID}</h5>
    <h5 className="col-3"> Email id </h5> <h5 className="col-9"> {this.state.user.emp_email}</h5>
    <h5 className="col-3"> Mo No</h5> <h5 className="col-9"> {this.state.user.emp_contact_no}</h5>
    <h5 className="col-3"> Role </h5> <h5 className="col-9">{this.state.user.emp_designation}</h5>
    <h5 className="col-3"> Qulification</h5> <h5 className="col-9"> {this.state.user.emp_qulification}</h5>
    <h5 className="col-3"> Gender</h5> <h5 className="col-9"> {this.state.user.emp_gender}</h5>
    <h5 className="col-3"> Post gradution</h5> <h5 className="col-9"> {this.state.user.emp_pg}</h5>
    </div>
            </div>
        )
    }
}