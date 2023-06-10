import { Component } from "react";

export default class EditProfile extends Component{
    render(){
        return(
            <div className="container ">
                 <div className="card"style={{border:'none'}}>
            <div className="row">
               
                <h5 className="col-3">First Name</h5> <h5 className="col-9"><input type="text" /></h5>
                <h5 className="col-3">Last Name</h5> <h5 className="col-9"><input type="text" /></h5>
                <h5 className="col-3">Email</h5> <h5 className="col-9"><input type="text" /></h5>
                <h5 className="col-3">MO NO</h5> <h5 className="col-9"><input type="text" /></h5>
                <h5 className="col-3">Role</h5> <h5 className="col-9"><input type="text" /></h5>
                <h5 className="col-3">Qulification</h5> <h5 className="col-9"><input type="text" /></h5>
                <h5 className="col-3">PG</h5> <h5 className="col-9"><input type="text" /></h5>
                
                </div>
                <button>Save </button>
                </div>
            </div>
        )
    }
}