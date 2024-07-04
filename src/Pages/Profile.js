import React from 'react'
import pic from '../Assetes/Images/pic.png'
const Profile = () => {
  const user = 
    {
      profile: pic,
      name: 'Seif Islem',
      type: 'Customer',
      BillingName: 'Seif Islem Benrabah',
      BillingAddress: 'cite 56 logts MOHAMED BOUDIAF,M’sila,M’sila',
      BillingEmail:'islamsseeiiff@gmail.com',
      BillingPhone:'0660987636'
    }
  return (
    <div>
      <div className='flex flex-row h-[400px] w-[800px] rounded-xl gap-1'>
        <div className='flex flex-col h-full w-[340px] items-center justify-center'>
          <div className='rounded-full h-40 w-40 relative overflow-hidden '>
            <img src={user.profile} alt='pic de profile' className='absolute w-full h-full object-cover'/>
          </div>
          <div className='flex flex-col w-full justify-center items-center'>
          <h1 className='text-3xl font-poppins font-semibold mt-3'>
            {user.name}
          </h1>
          <p className='text-xl font-poppins font-medium text-gray mt-5'>{user.type}</p>
          <button className='text-vertt text-xl font-poppins font-semibold align-center mt-7'>
          Edit Profile
          </button>
          </div>
        </div>
        <div className="flex justify-center h-full items-center ">
        <div className="w-[0.5px] bg-gray h-[360px]">
            </div>
            </div>
            <div className="h-full w-[450px] flex flex-col justify-center items-center mt-5">
              <div className="flex flex-col justify-start">
                <h1 className="font-poppins text-xl font-semibold mb-2">Billing information</h1>
                <h1 className='font-poppins text-base font-semibold'>Name:</h1>
                <p>{user.BillingName}</p>
                <h1 className='font-poppins text-base font-semibold'>Address:</h1>
                <p>{user.BillingAddress}</p>
                <h1 className='font-poppins text-base font-semibold'>E-mail:</h1>
                <p>{user.BillingEmail}</p>
                <h1 className='font-poppins text-base font-semibold'>Phone:</h1>
                <p>{user.BillingPhone}</p>
              </div>
              <div className="flex justify-end w-full mt-4 ">
                <button className="text-vertt text-lg font-poppins font-semibold align-center mr-7">Edit Biling Info</button>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Profile
