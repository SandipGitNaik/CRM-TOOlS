import { Component } from "react";
import './profile.css'
export default class Profile extends Component{
constructor(){
    super()
this.state={
  user:JSON.parse(localStorage.getItem("user"))

}

//console.log(this.state.user.emp_first_name)
}
handleClick=()=>{
    localStorage.clear();
    window.location.reload()
}

    render(){

        return(
            <div className="container ">
                <div className="row">
                    <div className="prof">
   {localStorage.getItem("user") && <>
<div className="col-md-3 border-right" >
    <br />          
          <img className="profile-img " src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
          </div>
    <h5>{this.state.user.emp_first_name}  {this.state.user.emp_last_name}</h5>

    <div className="abcd">
    <h5> id No::&nbsp;&nbsp; &nbsp;&nbsp;  {this.state.user.emp_ID}</h5>
    <h5> Email id ::&nbsp;&nbsp; &nbsp;&nbsp;  {this.state.user.emp_email}</h5>
    <h5> Mo No::&nbsp;&nbsp; &nbsp;&nbsp; {this.state.user.emp_contact_no}</h5>
    <h5> Role ::&nbsp;&nbsp; &nbsp;&nbsp; {this.state.user.emp_designation}</h5>
    <h5> Qulification::&nbsp;&nbsp; &nbsp;&nbsp; {this.state.user.emp_qulification}</h5>
    <h5> Gender::&nbsp;&nbsp; &nbsp;&nbsp; {this.state.user.emp_gender}</h5>
    <h5> Post gradution::&nbsp;&nbsp; &nbsp;&nbsp; {this.state.user.emp_pg}</h5>
    </div>
    <button style={{width:"100px"}} onClick={this.handleClick}>logout</button></>

   }
   
</div>
</div>

            </div>
        )
    }
}