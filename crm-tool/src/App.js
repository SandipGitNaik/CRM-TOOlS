
import { Route, Routes } from 'react-router';
import './App.css';
import Employe from './Component/EmployeComponent/Employe';
import Feedback2 from './Component/FeedbackComponent/Feedback2';
import FeedbackReview from './Component/FeedbackReviewComponent/FeedbackReview';
import Menu from './Component/MenuComponents/Menu';
import Registetr from './Component/RegisterComponent/Register';
import { BrowserRouter } from 'react-router-dom';
import Login from './Component/loginComponent/Login';


function App() {
  return (
    <div >
      <header >
      <Menu/>
    </header>
    <BrowserRouter>
    <Routes>
      <Route path='/emp' element={<Employe/>}></Route>
      <Route path='/rew' element={<FeedbackReview/>}></Route>
      <Route path='/reg' element={<Registetr/>}></Route>
      <Route path='/fed' element={<Feedback2/>}></Route>
      <Route path='/lo' element={<Login/>}></Route>


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
