import React,{useState} from 'react'
import { useNavigate ,Outlet } from 'react-router-dom';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
const Users = () => {
 
  const Users = [
    {
      id: 12,
      name: 'Seif',
      status: 100.00,
      Orders: 5,
      nomberpord: 5,
      TotalPayment:3456789.00
    },
    {
      id: 12,
      name: 'Seif',
      status: 100.00,
      Orders: 5,
      nomberpord: 5,
      TotalPayment:3456789.00
    }]
  const handleNavigation = (e) => {
    
  };
  return (
    <div>
<div className='flex flex-col h-[400px] w-[800px] rounded-xl gap-1'>
        <div className='flex flex-row items-center justify-between mt-2'>
        <h1 className='text-vertt text-xl mt-4 ml-4 mr-6 mb-2 font-poppins font-bold'>
        Users
        </h1>
        <div className='flex flex-row gap-1'>
        <div className='relative'>
  <input
    type='text'
    placeholder='Search...'
    className=' border border-vertt z-0 w-96 h-12 rounded-xl pl-12 pr-12 focus:outline-0 focus:ring-0 font-poppins font-medium '
  />

  
   <PersonSearchIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 text-vertt'/>
   </div>
<button className='flex justify-center items-center bg-vertt rounded-3xl text-white font-poppins font-medium text-xl p-2'>
  <h1>Filter</h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-white mt-[2px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
</button>
</div>
<div>
<div className='flex flex-row  gap-4 mr-2'>
    <div className='flex flex-row relative h-8'>
    <input id='settings'
                type='radio'
                name='nav'
                value='AccountSettings'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile  text-gray peer-checked:text-vertt'>
      <div className=' flex flex-row gap-3'>
        <h1 className='text-lg font-poppins font-medium'>All</h1>
      </div>
    </label>
  </div>
  <div className='flex flex-row relative w-full h-8'>
    <input id='settings'
                type='radio'
                name='nav'
                value='BillingInformation'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile  text-gray peer-checked:text-vertt'>
      <div className='flex flex-row gap-3'>
        <h1 className='text-lg font-poppins font-medium'>Active</h1>
      </div>
    </label>
  </div>
  <div className='flex flex-row items-center justify-center relative w-full h-8'>
    <input id='settings'
                type='radio'
                name='nav'
                value='ChangePassword'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile text-gray peer-checked:text-vertt'>
      <div className='flex justify-center items-center'>
        <h1 className='text-lg font-poppins font-medium'>Inactive</h1>
      </div>
    </label>
  </div>
    </div>
</div>
        </div>
        <div className='scroll-container w-[780px] max-h-[340px] overflow-auto ml-2'>
  <table className='table-auto w-full '>
        <thead className='sticky top-0 z-10 bg-white '>
    <tr>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>User ID</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Name</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Status</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Orders</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Total Payment</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay mt-7'></div></th>
    </tr>
  </thead>
  <tbody>
    {Users.map((user,index)=>(
    <tr>
      <td className='text-lg font-poppins font-normal'>#{user.id}</td>
      <td className='text-lg font-poppins font-light'>{user.name}</td>
      <td className='text-lg font-poppins font-light'>{user.status}</td>
      <td className='text-lg font-poppins font-light'>{user.Orders} Orders <span className='font-medium'>({user.nomberpord} Products)</span></td>
      <td className='text-lg font-poppins font-light'>{user.TotalPayment}</td>
      <td className='text-gray text-xl font-poppins font-semibold'>View More</td>
    </tr>))}
  </tbody>
</table>
</div>
      </div>
    </div>
  )
}

export default Users
