import { Component } from "react";

export default class Footer extends Component{
    render(){
        return(<div className="container"style={{width:"100rem"}}>
             <div className="row" style={{backgroundColor:"#2B2A28", color:"white"}} >
                <div className="col-6 ">
                 <h2>V Cube Crm</h2>
                    <h5>Learn Best Courses In Our Training Academy For your IT Career</h5>
                    <h6>V CUBE Can Assist you to Reach Your Goal with IT  Courses</h6>

                </div>
                <div className="col-3">
                <a className="href-link" href="">About</a><br></br>
                <a className="href-link" href="/courses">Courses</a><br></br>
                <a className="href-link" href="">Privacy policy</a>
                </div>
            <div className="col-3 i">
                <h2>Address</h2>
               <p>V CUBE Software Solutions Pvt.</p>
               <p>Ltd. second floor,above</p>
               <p>Raymond’s clothing store,KPHB</p>
               <p>Phase 1 Kukatpally, Hyderabad,</p>
               <p>Telangana 500072</p>
               <p>Contact us :</p>
               <a className="href-link" href="">+917675070124 </a>&nbsp;&nbsp; 
               <a className="href-link" href="">+919059456742 </a>
              
            </div>
             
              
            

        </div>

        </div>)
    }
}