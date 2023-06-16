import axios from "axios";
import { Component } from "react";

export default class EditProfile extends Component{
    constructor(){
        super();
        this.state={
            name:'update',
            emp_ID:'',
            emp_first_name:'',
            emp_last_name:'',
            emp_contact_no:'',
            emp_email:'',
            emp_designation:'',
            emp_qulification:'',
            emp_hsc_mark:'',
            emp_ssc_mark:'',
            emp_graduation:'',
            emp_pg:'',
            emp_gender:'',
            emp_pass:'',
            emp_created_date:'',
            emp_updated_date:'',
         user:JSON.parse(localStorage.getItem("user"))
        }     
  }
  registerInputValues=(event)=>{
    console.log("............")
   
this.setState({[event.target.id]: event.target.value})
}
registerSubmit=()=>{
    console.log("coming.......")


    let json ={

       "emp_ID":this.state.emp_ID,
       "emp_first_name":this.state.emp_first_name,
       "emp_last_name":this.state.emp_last_name,
       "emp_contact_no":this.state.emp_contact_no,
       "emp_email":this.state.emp_email,
       "emp_designation":this.state.emp_designation,
       "emp_qulification":this.state.emp_qulification,
       "emp_hsc_mark":this.state.emp_hsc_mark,
       "emp_ssc_mark":this.state.emp_ssc_mark,
       "emp_graduation":this.state.emp_graduation,
       "emp_pg":this.state.emp_pg,
       "emp_gender":this.state.emp_gender,
       "emp_pass":this.state.emp_pass,
       "emp_created_date":this.state.emp_created_date,
       "emp_updated_date":this.state.emp_updated_date,
    }
    
   
    axios.put("http://localhost:8080/Emp/put",json).then(
            
             (res)=>{
                       console.log(res)
                       console.log(this.state.emp_ID)
                    }
         )

}     
changeStaet=()=>{

    console.log("clicking");
    this.setState({ name:'update'})
} 
    render(){
        return(
            <div className="container ">
                 <div className="card"style={{border:'none'}}>
            <div className="row">
             <h5 className="col-4">ID</h5> <h5 className="col-8"><input type="text" id="emp_ID" value={this.state.user.emp_ID }  onChange={this.registerInputValues} /></h5>
                <h5 className="col-4">First Name</h5> <h5 className="col-8"><input type="text"id="emp_first_name" placeholder={this.state.user.emp_last_name} onChange={this.registerInputValues}/></h5>
                <h5 className="col-4">Last Name</h5> <h5 className="col-8"><input type="text" id="emp_last_name"onChange={this.registerInputValues} /></h5>
                <h5 className="col-4">Email</h5> <h5 className="col-8"><input type="email" id="emp_email"onChange={this.registerInputValues} /></h5>
                <h5 className="col-4">Mobile NO</h5> <h5 className="col-8"><input type="number" id="emp_contact_no"onChange={this.registerInputValues} /></h5>
                <h5 className="col-4">Role</h5> <h5 className="col-8"><input type="text" id="emp_designation"onChange={this.registerInputValues}/></h5>
                <h5 className="col-4">Qulification</h5> <h5 className="col-8"><input type="text" id="emp_qulification"onChange={this.registerInputValues} /></h5>
                <h5 className="col-4">PG</h5> <h5 className="col-8"><input type="text" id="emp_pg"onChange={this.registerInputValues}/></h5>
                <h5 className="col-4"> join date</h5> <h5 className="col-8"><input type="date" id="emp_created_date"onChange={this.registerInputValues}/></h5>
                <h5 className="col-4"> update date</h5> <h5 className="col-8"><input type="date" id="emp_updated_date"onChange={this.registerInputValues}/></h5>

                
                </div>
                <button onClick={this.registerSubmit}>Save </button>
                </div>
            </div>
        )
    }
}