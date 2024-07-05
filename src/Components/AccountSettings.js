import React from 'react'
import pic from '../Assetes/Images/pic.png'
import '../style.css'
const AccountSettings = () => {
  const user = 
    {
      profile: pic,
      name: 'Seif Islem',
      type: 'Customer',
      email: 'islamseeif@gmail.com',
      BillingName: 'Seif Islem Benrabah',
      BillingAddress: 'cite 56 logts MOHAMED BOUDIAF,M’sila,M’sila',
      BillingEmail:'islamsseeiiff@gmail.com',
      BillingPhone:'0660987636'
    }
  return (
    <div>
      <div className='w-[800px] h-[357px]  flex flex-row items-center'>
        <div className='flex flex-col w-1/2 ml-2 '>
        <fotm className='flex flex-col justify-center'>
        <div className='group flex flex-col'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>Full Name</p>
          <input type='text' placeholder={user.name} className='w-[363px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
              <div className='group flex flex-col'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>E-mail</p>
          <input type='text' placeholder={user.email} className='w-[363px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
              <div className='group flex flex-col'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>Phone</p>
          <input type='text' placeholder={user.BillingPhone} className='w-[363px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
              <div className='ml-[14px] mt-6'>
                <button className='font-poppins font-medium text-lg flex justify-center items-center bg-vertt  text-white rounded-3xl p-1 w-40'>
                Save Change
                </button>
              </div>
        </fotm>
        </div>
        <div className='flex flex-col w-1/2 items-center'>
          <div className='rounded-full h-40 w-40 relative overflow-hidden '>
            <img src={user.profile} alt='pic de profile' className='absolute w-full h-full object-cover'/>
          </div>
          <div className='mt-14'>
          <input type="file" id="fileInput" accept="image/*" class="hidden"/>
          <button id="uploadButton" class="p-1 w-40 bg-transparent border-2 border-vertt text-vertt rounded-3xl font-poppins font-medium text-lg hover:bg-vert focus:outline-none focus:ring-2 focus:ring-blue-400">Choose Image</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
