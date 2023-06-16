import { Component } from "react";
import './Feedback.css'
import axios from "axios";
import { Trainer, Course } from "../EmployGetComponent/trainerget";
export default class Feedback2 extends Component{
    constructor(){
        super()

        this.state={
            name:'xyz',
            course_name:'',
            faculty:'',
            class_Experience:'',
            full_Name:'',
            mobile:'',
            suggestion:'',
            created_date:'',
            updated_date:''
        }
    }

    registerInputValues=(event)=>{
        console.log("............")
       
    this.setState({[event.target.id]: event.target.value})
    }
    registerSubmit=()=>{
        console.log("coming........")
    
    let json={
        "course_name":this.state.course_name,
        "faculty":this.state.faculty,
        "class_Experience":this.state.class_Experience,
        "full_Name":this.state.full_Name,
        "mobile":this.state.mobile,
        "suggestion":this.state.suggestion,
        "created_date":this.state.created_date,
        "updated_date":this.state.updated_date 
    }
    

    axios.post("http://localhost:8080/Feedback/save",json).then(

      (res)=>{
        console.log(res)
      }
    )
}
changeStaet=()=>{

    console.log("clicking");
    this.setState({ name:'xyz'})
}
getCountry() {
  return Trainer.map((trainer) => {
    return <option value={trainer.name}>{trainer.name}
           </option>;
  });
 
}
getCourse(){
  return Course.map((Cou) => {
    return <option value={Cou.course}>{Cou.course}
    </option>;
  });
}

    render(){
        return(
            <div className="container">
                <form className="row g-3 needs-validation cardex" >
                <div className="cardefx"><br />
                <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="full name" id= "full_Name" onChange={this.registerInputValues} /> 
                  <label htmlFor="">Mobile No</label>
                  <input type="tel" placeholder="mobile no" id="mobile"  onChange={this.registerInputValues}  />
                  
                  <label htmlFor="">Course</label>
                <select className="tra"  id="course_name"  style={{width:"90%"}}  onChange={this.registerInputValues}  >
                  <option value="choose" id="course_name"  disabled selected="selected">Course Name</option>
                  {this.getCourse()}
                  </select>
                 <label htmlFor="">Trainer Name</label>
                 <select 
      id="faculty"
      className="tra"
      placeholder="trainer name" style={{width:"90%"}}
      onChange={this.registerInputValues} >
      <option value="choose" id="faculty" placeholder="trainer name" disabled selected="selected">
       trainer name
      </option>
      {this.getCountry()}
      </select>
      <br /><br />
      <label htmlFor="">suggestion </label>
                  <textarea name="" id="suggestion" cols="10" rows="10" placeholder="pass here your suggestion" onChange={this.registerInputValues} ></textarea><br />
                 <input type="date" name="" id="created_date" onChange={this.registerInputValues} />
                 <input type="date" name=""  id="updated_date" onChange={this.registerInputValues} />
                  <div>
                            <p className="abc">please provid your feedback how its teach</p>

                          <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="class_Experience" value="1" onChange={this.registerInputValues}/>
  <label className="form-check-label" >Excellent</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="class_Experience" value="2" onChange={this.registerInputValues}/>
  <label className="form-check-label">good</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="class_Experience" value="3" onChange={this.registerInputValues} />
  <label className="form-check-label"  >Avrage</label>
</div>
</div>                <button  onClick={this.registerSubmit}>send</button>
                </div>
                </form>

            </div>
        )
    }
}
