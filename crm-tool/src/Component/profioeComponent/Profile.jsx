import { Component } from "react";

export default class Profile extends Component{
constructor(){
    super()
this.state={
  user:JSON.parse(localStorage.getItem("user"))

}

//console.log(this.state.user.emp_first_name)
}

    render(){

        return(
            <div className="container">
   {localStorage.getItem("user") && <div>

    <h1>{this.state.user.emp_first_name}</h1>
    </div>
    


   }


            </div>
        )
    }
}