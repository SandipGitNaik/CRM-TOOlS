import { Component } from "react";
import './changePassword.css'
export default class ChangePassword extends Component{
    render(){
        return(
            <div>
                <div className="card">
                <label >Current Password</label>
                <input type="pass"  name="" id=""/>
                <label >New Password</label>
                <input type="pass" name="" id="" />
                <label >Re-Enter Password</label>
                <input type="pass" name="" id="" />
                </div>
            </div>
        )
    }
}