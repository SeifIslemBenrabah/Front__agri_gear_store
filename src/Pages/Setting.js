import React,{useState} from 'react'
import { useNavigate ,Outlet } from 'react-router-dom';
const Setting = () => {
  const [nav, setNav] = useState('Profile');
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    const value = e.target.value;
    setNav(value);
    navigate(`/C/Setting/${value}`);
  };
  return (
    <div>
    <div className='flex flex-row mt-2'>
    <div className='flex flex-row relative w-full h-8'>
    <input id='settings'
                type='radio'
                name='nav'
                value='AccountSettings'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile border-b-2 border-graay  peer-checked:border-vertt text-gray peer-checked:text-vertt'>
      <div className='ml-14 flex flex-row gap-3'>
        <h1 className='text-lg font-poppins font-medium'>Account Settings</h1>
      </div>
    </label>
  </div>
  <div className='flex flex-row relative w-full h-8'>
    <input id='settings'
                type='radio'
                name='nav'
                value='BillingInformation'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile border-b-2 border-graay  peer-checked:border-vertt text-gray peer-checked:text-vertt'>
      <div className='ml-[52px] flex flex-row gap-3'>
        <h1 className='text-lg font-poppins font-medium'>Billing Information</h1>
      </div>
    </label>
  </div>
  <div className='flex flex-row items-center justify-center relative w-full h-8'>
    <input id='settings'
                type='radio'
                name='nav'
                value='ChangePassword'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile border-b-2 border-graay   peer-checked:border-vertt text-gray peer-checked:text-vertt'>
      <div className='ml-14 flex justify-center items-center'>
        <h1 className='text-lg font-poppins font-medium'>Change Password</h1>
      </div>
    </label>
  </div>
    </div>
    <div>
      <Outlet/>
    </div>
    </div>
  )
}

export default Setting