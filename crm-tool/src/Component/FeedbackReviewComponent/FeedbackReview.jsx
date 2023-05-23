import axios from "axios";
import { Component } from "react";
import'./FeedbackReview.css'  
export default class FeedbackReview extends Component{
    constructor(props){
        super(props);
        this.state={
        feedbackreview:[]
    }
    this.getfeedbackreview()
    }
    getfeedbackreview=()=>{
        console.log("calling feedback.............");
        axios.get("http://localhost:8080/Feedback/get").then(

        (res)=>{

            if(res.status==200){
            this.setState(this.state.feedbackreview=res.data)
            }
        }
        )
    }

    render(){
        return(
            <div className="container">

                               <div className="row">
                    {
                        this.state.feedbackreview.map(
                            (test) =>
                            <div className="card cp" style={{width:'27rem',height:'25rem'}}>
                         <p><b> Name :: </b>{test.full_Name} </p>
                         <p><b> Course Name::</b>{test.course_name}</p>
                         <p><b> Faculty ::</b>{test.faculty} </p>
                         <p><b>Class Experiance::</b> {test.class_Experience}</p>
                         <p><b>Suggestion::</b>{test.suggestion}</p>
                                              
                         </div>              
                     
                     )}
               </div>
            </div>
        )
    }
}