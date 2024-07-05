import React from 'react'
import pic from '../Assetes/Images/pic.png'
const BillingInformation = () => {
  const user = 
  {
    profile: pic,
    name: 'Seif Islem',
    type: 'Customer',
    email: 'islamseeif@gmail.com',
    BillingName: 'Seif Islem Benrabah',
    BillingAddress: 'cite 56 logts MOHAMED BOUDIAF,M’sila,M’sila',
    BillingEmail:'islamsseeiiff@gmail.com',
    BillingPhone:'0660987636',
    BillingFirstName:'Seif Islem',
    BillingLastName:'Benrabah'
  }
  return (
    <div>
      <div className='w-[800px] h-[357px] flex flex-col'>
        <div className='flex flex-row mt-6'>
        <div className='group flex flex-col'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>First Name</p>
          <input type='text' placeholder={user.BillingFirstName} className='w-[363px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
              <div className='group flex flex-col'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>Last Name</p>
          <input type='text' placeholder={user.BillingLastName} className='w-[363px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
        </div>
        <div className='flex flex-row mt-5'>
        <div className='group flex flex-col'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>E-mail</p>
          <input type='text' placeholder={user.BillingEmail} className='w-[363px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
              <div className='group flex flex-col'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>Phone</p>
          <input type='text' placeholder={user.BillingPhone} className='w-[363px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
        </div>
        <div className='flex flex-row mt-5'>
        <div className='group flex flex-col'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>State</p>
                <select class="block appearance-none w-[226px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary bg-white border-gray-300 hover:border-gray-400 px-4 py-2 pr-8  shadow leading-tight focus:bg-white focus:border-gray-500 text-gray">
                      <option>Select Your Country</option>
                      <option>Country 1</option>
                      <option>Country 2</option>
                      <option>Country 3</option>
                  </select>
              </div>
              <div className='group flex flex-col mx-3'>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>City</p>
                <select class="block appearance-none w-[226px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary bg-white border-gray-300 hover:border-gray-400 px-4 py-2 pr-8  shadow leading-tight focus:bg-white focus:border-gray-500 text-gray">
                      <option>Select Your Country</option>
                      <option>Country 1</option>
                      <option>Country 2</option>
                      <option>Country 3</option>
                  </select>
              </div>
              <div className='group flex flex-col '>
                <p className='text-lg text-gray font-poppins ml-5  group-focus-within:opacity-100 '>District</p>
                <select class="block appearance-none w-[226px] bg-transparent border border-gray p-2 mx-3 rounded-lg cust-placeholder focus:outline-none focus:border-secondary bg-white border-gray-300 hover:border-gray-400 px-4 py-2 pr-8  shadow leading-tight focus:bg-white focus:border-gray-500 text-gray">
                      <option>Select Your Country</option>
                      <option>Country 1</option>
                      <option>Country 2</option>
                      <option>Country 3</option>
                  </select>
              </div>
        </div>
        <div className='ml-[14px] mt-9'>
                <button className='font-poppins font-medium text-lg flex justify-center items-center bg-vertt  text-white rounded-3xl p-1 w-40'>
                Save Change
                </button>
              </div>
      </div>
    </div>
  )
}

export default BillingInformation
