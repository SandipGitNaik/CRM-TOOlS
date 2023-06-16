
import { Route, Routes } from 'react-router';
import './App.css';
import Feedback2 from './Component/FeedbackComponent/Feedback2';
import FeedbackReview from './Component/FeedbackReviewComponent/FeedbackReview';
import Menu from './Component/MenuComponents/Menu';

import { BrowserRouter } from 'react-router-dom';
import Login from './Component/loginComponent/Login';
import Footer from './Component/FooterComponent/Footer';
import Forgot from './Component/ForgetComponent/Forget';
import EnquiryData from './Component/EnquiryComponent/Enquiry';
import Employeget from './Component/EmployGetComponent/Employeget';
import Empolye from './Component/EmployeComponent/Empolye';
import Profile from './Component/profioeComponent/Profile';

import Register from './Component/RegistertdComponent/Register';





function App() {
  return (
    <div >
      <header >
      <Menu/>
    </header>
    <BrowserRouter>
    <Routes>
      
      
      <Route path='/review' element={<FeedbackReview/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/feedback' element={<Feedback2/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
      <Route path='/forgot' element={<Forgot/>}></Route>
      <Route path='/enquiry' element={<EnquiryData/>}></Route>
      <Route path='/empployget' element={<Employeget/>}></Route>
      <Route path='/empolye' element={<Empolye/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
    
    
      
    </Routes>
    </BrowserRouter>
    <footer>
      <Footer/>
    </footer>
    </div>
  );
}

export default App;
