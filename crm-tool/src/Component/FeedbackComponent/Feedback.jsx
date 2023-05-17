import { Component } from "react";
import './Feedback.css'
 export default class Feedback extends Component{
    render(){
        return(
            <>
                <form className="row g-3 needs-validation cardex" >
                   
                      <div className="col-md-4">
                   <label className ="form-label">Course</label>
                               <input type="text"  id="validationCustom01" placeholder="course name" required/>
    
                     </div> 
                         <div className="col-md-4">
                            <label  className="form-label">Faculty</label>
                                <input type="text"  id="validationCustom02" placeholder="trainer name" required/>
    
                          </div>
                          <div className="col-md-4">
                            <label  className="form-label">flexibel time</label>
                                <input type="text"  id="validationCustom02" placeholder="preferd time" required/>
                                
                          </div>
                          <p className="x"></p>
                           <div>
                            <p className="abc">please provid your feedback how its teach</p>
                          <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" >Excellent</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label">good</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label className="form-check-label"  >Avrage</label>
</div>
</div>

    <p className="xx">share your suggestion</p>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    
                 </form><button>submit</button>
            </>
        )
    }
 }