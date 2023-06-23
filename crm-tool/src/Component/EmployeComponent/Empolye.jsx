import axios from "axios";
import { Component } from "react";
import'./Empolye.css'

export default class Empolye extends Component{
    constructor(){
        super()
        this.state={
            name:'Empo',
            emp_first_name:'',
            emp_last_name:'',
            emp_contact_no:'',
            emp_email:'',
            emp_designation:'',
            emp_qulification:'',
            emp_ssc_mark:'',
            emp_hsc_mark:'',
            emp_graduation:'',
            emp_pg:'',
            emp_gender:'',
            emp_pass:''
        }
    }
    registerInputValues=(event)=>{
        console.log("............")
       
    this.setState({[event.target.id]: event.target.value})
    }
    registerSubmit=()=>{

        let json={
            "emp_first_name":this.state.emp_first_name,
            "emp_last_name":this.state.emp_last_name,
            "emp_contact_no":this.state.emp_contact_no,
            "emp_email":this.state.emp_email,
            "emp_designation":this.state.emp_designation,
            "emp_qulification":this.state.emp_qulification,
            "emp_ssc_mark":this.state.emp_ssc_mark,
            "emp_hsc_mark":this.state.emp_hsc_mark,
            "emp_graduation":this.state.emp_graduation,
            "emp_pg":this.state.emp_pg,
            "emp_gender":this.state.emp_gender,
            "emp_pass":this.state.emp_pass
        }

        axios.post("http://localhost:8080/Emp/save",json).then(
            (res)=>{
                console.log(res)
             }
        )
    }
    changeStaet=()=>{

        console.log("clicking");
        this.setState({ name:'Empo'})
    }
    
    render(){
        return(
            <div className="container" style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                               <div className="col-6  cardf">
                <form >
                <div className="cardEmpolye"><br />
                <label htmlFor="">First Name</label>
                  <input  type="text" placeholder="first name" id= "emp_first_name" onChange={this.registerInputValues} /> 
                  <label htmlFor="">Last Name</label>
                  <input type="text"  placeholder="last name" id="emp_last_name" onChange={this.registerInputValues} /> 
                  <label htmlFor="">Contact No</label>
                  <input type="tel" placeholder="contact bo" id="emp_contact_no" onChange={this.registerInputValues}  />
                  <label htmlFor="">Mail Id</label>
                  <input type="email" placeholder="mail id" id="emp_email"  onChange={this.registerInputValues}  />
                  <label htmlFor="">Role</label>
                 <input type="text" name="" id="emp_designation" placeholder="designation" onChange={this.registerInputValues} />
                 <label htmlFor="">Qulifiction</label>
                 <input type="text" name="" id="emp_qulification" placeholder="Qulification" onChange={this.registerInputValues} />
                 <label htmlFor="">SSC Mark</label>
                 <input type="text" name="" id="emp_ssc_mark" placeholder="10th mark" onChange={this.registerInputValues} />
                 <label htmlFor="">HSC Marks</label>
                 <input type="text" name="" id="emp_hsc_mark" placeholder="12th mark" onChange={this.registerInputValues} />
                 <label htmlFor="">Gradution</label>
                 <input type="text" name="" id="emp_graduation" placeholder="gradution" onChange={this.registerInputValues} />
                 <label htmlFor="">Post Gradution</label>
                 <input type="text" name="" id="emp_pg" placeholder="post gradution" onChange={this.registerInputValues} />
                 <label htmlFor="">Gender</label>
                 <input type="text" name="" id="emp_gender" placeholder="gender" onChange={this.registerInputValues} />
                 <label htmlFor="">Password</label>
                 <input type="password" name="" id="emp_pass" placeholder="password" onChange={this.registerInputValues} />
                 <button  onClick={this.registerSubmit}>send</button>
        
                </div> 
                </form>
               
            </div>
            </div>
        )
    }
}