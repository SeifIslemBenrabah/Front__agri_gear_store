import React, { useReducer, useState } from 'react';
import Nav from '../Components/Nav';
import Backg from '../Assetes/Images/Backg.jpg';
import '../style.css';
import { Link } from 'react-router-dom';
import { AuthData } from "../auth/AuthWrapper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  
  const [formData, setFormData] = useReducer(
    (formData, newItem) => ({ ...formData, ...newItem }),
    { userName: "", password: "", type: "" }
  );
  
  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = async () => {
    try {
      await login(formData.userName, formData.password, formData.type);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message || "An error occurred during login.");
    }
  };

  return (
    <div>
      <div className='relative'>
        <Nav openr={false} />
        <img src={Backg} alt='background' className='absolute inset-0 w-full h-screen -z-10 brightness-65' />
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col items-start justify-center ml-20 mb-5'>
            <h1 className='font-poppins text-7xl text-white text-left font-normal tracking-normal leading-tight mb-8'>
              Welcome Back!
            </h1>
            <p className='font-poppins text-2xl text-white text-left font-normal tracking-normal leading-tight'>
              Please log in to continue shopping for the<br />
              best agricultural gear and equipment.
            </p>
          </div>
          <div className='flex items-center h-[450px]'>
            <div className='flex items-center flex-col mt-4 mr-20 relative bg-gray/30 backdrop-blur-sm h-[350px] w-[450px] rounded-xl'>
              <div className='flex flex-row'>
                <h1 className='text-xl text-primary font-poppins font-medium my-3'>
                  Login
                </h1>
                <h1 className='text-white text-4xl font-poppins font-extralight my-1 mx-5'>|</h1>
                <Link to='/SignUp' className='text-white text-xl font-poppins font-medium my-3'>Sign up</Link>
              </div>
              <div className='flex flex-col'>
                <div className='group flex flex-col mt-5 mb-3'>
                  <p className='text-xs text-primary font-poppins font-bold ml-5 opacity-0 group-focus-within:opacity-100'>E-mail</p>
                  <input
                    value={formData.userName}
                    onChange={(e) => setFormData({ userName: e.target.value })}
                    type='text'
                    placeholder='E-mail'
                    className='w-[400px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg custom-placeholder focus:outline-none focus:border-secondary text-white'
                    required
                  />
                </div>
                <div className='group flex flex-col mt-2 mb-2'>
                  <p className='text-xs text-primary font-poppins font-bold ml-5 opacity-0 group-focus-within:opacity-100'>Password</p>
                  <input
                    value={formData.password}
                    onChange={(e) => setFormData({ password: e.target.value, type: e.target.value })} // Set type to password value
                    type='password'
                    placeholder='Password'
                    className='w-[400px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg custom-placeholder focus:outline-none focus:border-secondary text-white'
                    required
                  />
                </div>
                <div className='flex justify-center'>
                  {errorMessage ? (
                    <div className="text-red-700">{errorMessage}</div>
                  ) : null}
                </div>
                <div className='flex justify-end'>
                  <Link to='/Forgetpassword' className='text-lg text-primary font-poppins font-light mr-3 mt-3 underline'>
                    Forget Password?
                  </Link>
                </div>
                <div className='flex justify-center mt-4'>
                  <button className='w-[400px] h-[40px] bg-primary text-white text-center font-poppins font-medium rounded-lg' onClick={doLogin}>
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
