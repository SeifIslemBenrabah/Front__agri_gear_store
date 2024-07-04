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
import C from './Pages/C'
import Profile from './Pages/Profile'
import OrderHistory from './Pages/OrderHistory'
import Setting from './Pages/Setting'
import ChangePassword from './Components/ChangePassword'
import BillingInformation from './Components/BillingInformation'
import AccountSettings from './Components/AccountSettings'
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
        <Route path='/C' element={<C/>}>
        <Route path='Profile' element={<Profile/>}/>
        <Route path='OrderHistory' element={<OrderHistory/>}/>
        <Route path='Setting' element={<Setting/>}>
        <Route path='AccountSettings' element={<AccountSettings/>}/>
        <Route path='BillingInformation' element={<BillingInformation/>}/>
          <Route path='ChangePassword' element={<ChangePassword/>}/>
        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
