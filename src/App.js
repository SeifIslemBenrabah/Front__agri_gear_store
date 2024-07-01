import './App.css';
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Forgetpassword from './Pages/ForgetPassword'
import Shop from './Pages/Shop'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Forgetpassword' element={<Forgetpassword/>}/>
        <Route path='/Shop' element={<Shop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
