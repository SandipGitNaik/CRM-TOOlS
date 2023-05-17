import { Component } from "react";
import'./Menu.css'  
export default class Menu extends Component{
  render(){
    return(<div className="conainer-fluid" >
        <div className="container" >
        <nav className="navbar navbar-expand-lg i">
  <a className="navbar-brand f" href="#">V Cube Crm</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav " style={{gap:"10px"}}>
  <li className="nav-item active">
    <a className="nav-link e" href="/courses">Courses</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="/enquiry">Enquiry</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="/feedback">Feedback</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="Batches">Batches</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="/rew">Reviews</a>
  </li>
  <li className="nav-item">
    <a className="nav-link e" href="/reg">Register</a>
  </li>
</ul>

  </div>
</nav>
</div>
    </div>)
}
}