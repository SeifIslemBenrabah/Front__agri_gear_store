import React from 'react'
import Nav from '../Components/Nav'
import Backg from '../Assetes/Images/Backg.jpg'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div>
        <div className='relative'>
        <Nav openr={false}/>
        <img src={Backg} alt='background' className='absolute inset-0 w-full h-screen -z-10 brightness-65' />
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col items-start justify-center ml-20 '>
            <h1 className='font-poppins text-7xl text-white text-left font-normal tracking-normal leading-tight mb-8'>
            Create Your <br/>
            Account
            </h1>
            <p className='font-poppins text-2xl text-white text-left font-normal tracking-normal leading-tight'>
            Join our community! Sign up to access<br/>
            exclusive offers and the latest updates on<br/>
            agricultural gear and equipment.
            </p>
          </div>
          <div className='flex items-center h-[450px]'>
          <div className='flex items-center flex-col mr-20 relative bg-gray/30 backdrop-blur-sm h-[420px] w-[450px] rounded-xl mt-8'>
            <div className='flex flex-row'>
            <Link to='/Login' className='text-white text-xl font-poppins font-medium my-2'>Login</Link>
                <h1 className='text-white text-4xl font-poppins font-extralight my-[2px] mx-5'>|</h1>
                
                <h1 className='text-xl text-primary font-poppins font-medium my-2'>
                    Sign up
                </h1>
            </div>
            <div className='flex flex-col'>
            <div className='group flex flex-col mt-1 mb-3'>
                <p className='text-xs text-primary font-poppins font-bold ml-5 opacity-0 group-focus-within:opacity-100 '>E-mail</p>
                <input type='text' placeholder='E-mail' className='w-[400px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg custom-placeholder focus:outline-none focus:border-secondary text-white' required/>
              </div>
              <div className='group flex flex-col mt-1 mb-4'>
                <p className='text-sm text-primary font-poppins font-bold ml-5 opacity-0 group-focus-within:opacity-100 '>Full Name</p>
                <input type='text' placeholder='Full Name' className='w-[400px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg custom-placeholder focus:outline-none focus:border-secondary text-white' required/>
              </div>
              <div className='group flex flex-col mt-1 mb-4'>
                <p className='text-sm text-primary font-poppins font-bold ml-5 opacity-0 group-focus-within:opacity-100 '>Password</p>
                <input type='text' placeholder='Password' className='w-[400px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg custom-placeholder focus:outline-none focus:border-secondary text-white' required/>
              </div>
              <div className='group flex flex-col mt-1 mb-4'>
                <p className='text-sm text-primary font-poppins font-bold ml-5 opacity-0 group-focus-within:opacity-100 '>Confirm Password</p>
                <input type='text' placeholder='Confirm Password' className='w-[400px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg custom-placeholder focus:outline-none focus:border-secondary text-white' required/>
              </div>
              <div className='flex justify-center mt-[6px]'>
                <button className='w-[400px] h-[40px] bg-primary text-white text-center font-poppins font-medium rounded-lg'>
                    Sign up
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
