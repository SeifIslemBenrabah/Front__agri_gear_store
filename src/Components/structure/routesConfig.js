import Home from '../../Pages/Home';
import AboutUs from '../../Pages/AboutUs';
import ContactUs from '../../Pages/ContactUs';
import Login from '../../Pages/Login';
import SignUp from '../../Pages/SignUp';
import Forgetpassword from '../../Pages/ForgetPassword';
import Shop from '../../Pages/Shop';
import Product from '../../Pages/Product';
import C from '../../Pages/C';
import Profile from '../../Pages/Profile';
import OrderHistory from '../../Pages/OrderHistory';
import Setting from '../../Pages/Setting';
import ChangePassword from '../../Components/ChangePassword';
import BillingInformation from '../../Components/BillingInformation';
import AccountSettings from '../../Components/AccountSettings';
import A from '../../Pages/A';
import Dashboard from '../../Pages/Dashboard';
import Orders from '../../Pages/Orders';
import Categories from '../../Pages/Categories';
import Products from '../../Pages/Products';
import Users from '../../Pages/Users';

export const routesConfig = {
  public: [
    { path: '/', element: <Home /> },
    { path: '/ContactUs', element: <ContactUs /> },
    { path: '/AboutUs', element: <AboutUs /> },
    { path: '/Login', element: <Login /> },
    { path: '/SignUp', element: <SignUp /> },
    { path: '/Forgetpassword', element: <Forgetpassword /> },
    { path: '/Shop', element: <Shop /> },
    { path: '/Product', element: <Product /> },
  ],
  client: [
    { path: '/C', element: <C />, children: [
      { path: 'Profile', element: <Profile /> },
      { path: 'OrderHistory', element: <OrderHistory /> },
      { path: 'Setting', element: <Setting />, children: [
        { path: 'AccountSettings', element: <AccountSettings /> },
        { path: 'BillingInformation', element: <BillingInformation /> },
        { path: 'ChangePassword', element: <ChangePassword /> },
      ]}
    ]}
  ],
  admin: [
    { path: '/A', element: <A />, children: [
      { path: 'Dashboard', element: <Dashboard /> },
      { path: 'Orders', element: <Orders /> },
      { path: 'Categories', element: <Categories /> },
      { path: 'Products', element: <Products /> },
      { path: 'Users', element: <Users /> },
    ]}
  ]
};
