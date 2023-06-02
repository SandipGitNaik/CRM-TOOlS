
import { Route, Routes } from 'react-router';
import './App.css';
import Feedback2 from './Component/FeedbackComponent/Feedback2';
import FeedbackReview from './Component/FeedbackReviewComponent/FeedbackReview';
import Menu from './Component/MenuComponents/Menu';
import Registetr from './Component/RegisterComponent/Register';
import { BrowserRouter } from 'react-router-dom';
import Login from './Component/loginComponent/Login';
import Footer from './Component/FooterComponent/Footer';
import Forgot from './Component/ForgetComponent/Forget';
import EnquiryData from './Component/EnquiryComponent/Enquiry';
import Employeget from './Component/EmployGetComponent/Employeget';
import Empolye from './Component/EmployeComponent/Empolye';
import Profile from './Component/profioeComponent/Profile';



function App() {
  return (
    <div >
      <header >
      <Menu/>
    </header>
    <BrowserRouter>
    <Routes>
      
      
      <Route path='/rew' element={<FeedbackReview/>}></Route>
      <Route path='/reg' element={<Registetr/>}></Route>
      <Route path='/fed' element={<Feedback2/>}></Route>
    <Route path='/lo' element={<Login/>}></Route>
      <Route path='/for' element={<Forgot/>}></Route>
      <Route path='/enq' element={<EnquiryData/>}></Route>
      <Route path='/empg' element={<Employeget/>}></Route>
      <Route path='/emp' element={<Empolye/>}></Route>
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
