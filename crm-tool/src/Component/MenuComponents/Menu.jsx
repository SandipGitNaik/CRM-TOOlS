import { Component } from "react";

export default class Menu extends Component{
    render(){
        return(
            <div className="container">
              <nav class="navbar navbar-expand-lg  bg-dark">
  <div class="container-fluid">
   
 
    <a class="navbar-brand" href="#">
      <img src="https://www.vcubesoftsolutions.com/wp-content/uploads/2020/10/V-CUBE-Logo-4-scaled-e1636039304265.jpg" alt="Bootstrap" width="30" height="24         "/>
    </a>
  </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/emp">Employe Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/rew">Review</a>
        </li>
      </ul>
    </div>
</nav>
            </div>
        )
    }
}