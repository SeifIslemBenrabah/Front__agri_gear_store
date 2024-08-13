import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthData } from '../auth/AuthWrapper'; // Make sure to import AuthData

const Nav = ({ openr }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(openr);
  const { user } = AuthData(); // Get user data from AuthData

  useEffect(() => {
    setOpen(openr);
  }, [openr]);

  useEffect(() => {
    if (user.isAuthenticated && (user.type === 'admin' || user.type === 'client')) {
      setOpen(false);
    }
  }, [user.isAuthenticated, user.type]);

  const Loginpage = () => {
    navigate('/Login');
  };

  const handleUserRedirect = () => {
    if (user.type === 'admin') {
      navigate('/A');
    } else if (user.type === 'client') {
      navigate('/C');
    }
    setOpen(false); // Set open to false when redirecting
  };

  // Check if the user.type is an empty string
  const showButton = user.type === 'admin' || user.type === 'client';

  return (
    <div className='h-1/4 z-20 bg-secondary rounded-b-xl top-0 flex justify-between'>
      <div className='flex'>
        <h3 className='mt-4 mx-10 mb-5 text-white text-3xl font-poppins font-semibold'>Logo</h3>
      </div>
      <div className={`px-6 ${open ? 'mr-0' : 'mr-[375px]'} mt-4 mb-5 flex justify-center`}>
        <Link to='/' className='mx-5 mt-2 text-white text-lg font-poppins font-medium'>Home</Link>
        <Link to='/Shop' className='mx-5 mt-2 text-nowrap text-white text-lg font-poppins font-medium'>Shop</Link>
        <Link to='/AboutUs' className='mx-5 mt-2 text-nowrap text-white text-lg font-poppins font-medium'>About Us</Link>
        <Link to='/ContactUs' className='mx-5 mt-2 text-nowrap text-white text-lg font-poppins font-medium'>Contact Us</Link>
        <Link to='/SignUp' className='mx-5 mt-2 text-nowrap text-white text-lg font-poppins font-medium' style={{ display: open ? 'block' : 'none' }}>Sign Up</Link>
        <button onClick={Loginpage} style={{ display: open ? 'block' : 'none' }}>
          <div className='flex flex-row bg-vertt rounded-3xl px-3 py-1 mt-[5px] ml-6 text-white '>
            <p className='text-lg font-poppins font-medium mr-1'>Login</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mt-[1px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </button>
        {showButton && (
          <button onClick={handleUserRedirect} style={{ display: showButton ? 'block' : 'none' }}>
            <div className='flex flex-row bg-primary rounded-3xl px-3 py-1 mt-[5px] ml-6 right-0 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mt-[1px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default Nav;
