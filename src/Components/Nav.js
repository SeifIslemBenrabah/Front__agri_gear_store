import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({ openr }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(openr);

  useEffect(() => {
    setOpen(openr);
  }, [openr]);

  const Loginpage = () => {
    navigate('/Login');
  };

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
      </div>
    </div>
  );
}

export default Nav;
