import React from 'react'

const ChangePassword = () => {
  return (
    <div>
      <div className='w-[800px] h-[357px]  flex flex-row '>
      <div className='flex flex-col w-11/12 ml-2 mt-5'>
        <fotm className='flex flex-col justify-center'>
        <div className='group flex flex-col w-full'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>Current Password</p>
          <input type='text' placeholder='Current Password' className='w-full h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
              <div className='group flex flex-col w-full mt-5'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>New Password</p>
          <input type='text' placeholder='New Password' className='w-full h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
              <div className='group flex flex-col w-full mt-5'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>Confirm Password</p>
          <input type='text' placeholder='Confirm Password' className='w-full h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
              <div className='ml-[14px] mt-8'>
                <button className='font-poppins font-medium text-lg flex justify-center items-center bg-vertt  text-white rounded-3xl p-1 w-40'>
                Save Change
                </button>
              </div>
        </fotm>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
