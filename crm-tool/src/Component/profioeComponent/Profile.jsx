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
                   
   {localStorage.getItem("user") && <>
<div className="col-md-3 col-3 border-right card " style={{width:'18rem',border:"none",backgroundColor:'#9a9e27',marginRight:'2rem'}} >
    <br />          
          <img className="profile-img " src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
        
    <h5>{this.state.user.emp_first_name}  {this.state.user.emp_last_name}</h5>
    <h5 className="text-center">{this.state.user.emp_designation}</h5>
    <button style={{width:"100px"}} onClick={this.handleClick}>logout</button>
    </div>
    <div className="col-9">
      <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav mr-auto">
     <li className="nav-item active">
       <a className="nav-link" href="overview">Overview </a>
     </li>
   
     <li className="nav-item">
       <a className="nav-link" href="editProfile">Edit Profile</a>
     </li>
     <li className="nav-item active">
       <a className="nav-link" href="setting">Setting</a>
     </li>
     <li className="nav-item">
       <a className="nav-link " href="changePassword">Change Password</a>
     </li>
   </ul>
   
 </div>
</nav>       
    </div>  
    </div>
    
    </>
   }
   
             
       </div>
</div>
        )
    }
}