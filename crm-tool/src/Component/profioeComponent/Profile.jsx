import { Component } from "react";
import Overview from "./overview";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import './profile.css'

class ProfileComponent extends Component{
  constructor(){
 super();
 this.state={
  user:JSON.parse(localStorage.getItem("user")),
  overView:100
 }
 


  }

  changeContent(c){
 console.log("hi"+c)
 this.setState({overView:c})
  }
  handleClick=()=>{
    localStorage.clear();
    window.location.reload()
}
render(){
return(<div className="container">
  
                <div className="row">
                {localStorage.getItem("user") && <div className="row">
<div className="col-md-3 col-3 border-right card " style={{width:'18rem',border:"none",backgroundColor:'#677575',marginRight:'2rem'}} >
    <br />          
          <img className="profile-img " src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
        
    <h5>{this.state.user.emp_first_name}  {this.state.user.emp_last_name}</h5>
    <h5 className="text-center">{this.state.user.emp_designation}</h5>
    <button style={{width:"100px"}} onClick={this.handleClick}>logout</button>
    </div>
     <div className="col-md-8 col-8">
 <div className="overview-style " style={{display:'flex'}}> 
     <h4 className="overview-style" onClick={()=>this.changeContent(100)}>Overview</h4>
     <h4 className="overview-style" onClick={()=>this.changeContent(103)}>Edit Profile</h4>
     
     <h4 className="overview-style" onClick={()=>this.changeContent(101)}>Overview</h4>
     <h4 className="overview-style" onClick={()=>this.changeContent(102)}>Change Password</h4>
     
</div>

{this.state.overView===100 && <Overview></Overview>}
{this.state.overView===102 && <ChangePassword></ChangePassword>}
{this.state.overView===103 && <EditProfile></EditProfile>}

      </div>


                  </div>}


                </div>

</div>


)

}
}
export default ProfileComponent;