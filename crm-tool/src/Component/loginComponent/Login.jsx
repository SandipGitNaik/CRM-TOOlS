import { Component, useRef } from "react";
import axios from "axios";
import'./Login.css'
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'login',
            emp_email:'',
            emp_pass:'',
            message:false

        }
      }
      
    registerInputValues=(event)=>{
        console.log("............")
       
    this.setState({[event.target.id]: event.target.value})
    }
    registerSubmit=()=>{
        console.log("coming........")
    
    let json={
      emp_email:this.state.emp_email,
      emp_pass:this.state.emp_pass
    }
    axios.post("http://localhost:8080/Emp/login",json).then(

    (res)=>{
        if(res.status===200){
      console.log(res)
      if(res.data.length===0){
        this.setState({message:true})
        console.log("plese enter the valid user information")
        
      }
    else {
      this.setState({message:false})

      console.log("result of user :: "+res.data[0])
      localStorage.setItem("user",JSON.stringify( res.data[0]))
window.location.replace("/profile")
    }}
    }
  )
}
changeStaet=()=>{

  console.log("clicking");
  this.setState({ name:'login'})
}
    
    loginWithLocalstorge=()=> {
     localStorage.setItem("userId","hi")
     localStorage.setItem("password","hello")
console.log(localStorage.getItem("userid"));

  }

         
    render(){
        return(
            <div className="container " style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                <div className="card ">
         <div>
         
         </div>
         <form >
      <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Email address</label>
             <input type="email" class="form-control"  id="emp_email" aria-describedby="emailHelp" onChange={this.registerInputValues} placeholder="email"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
             <input type="password" class="form-control"  onChange={this.registerInputValues} id="emp_pass" placeholder="password"/>
  </div>
  <div class="mb-3 form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
           <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

</form>
{this.state.message && <div className="alert alert-primary">Please enter valid deatils</div>}
<button onClick={this.registerSubmit} >Submit</button>

<div class="d-flex justify-content-between mt-4" >
<a className="btn button" style={{backgroundColor:"GrayText"}}  href="/register">
    <b>Register now</b> 
  </a>&nbsp;
  <a className="btn button" style={{backgroundColor:"GrayText"}} href="/forgot">
    Forgot Password
  </a>
  </div>

        
                </div>
            </div>
        )
    }
}