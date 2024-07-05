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
import A from './Pages/A'
import Dashboard from './Pages/Dashboard'
import Orders from './Pages/Orders'
import Categories from './Pages/Categories'
import Products from './Pages/Products'
import Users from './Pages/Users'
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
        <Route path='/A' element={<A/>}>
        <Route path='Dashboard' element={<Dashboard/>}/>
        <Route path='Orders' element={<Orders/>}/>
        <Route path='Categories' element={<Categories/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='Users' element={<Users/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
