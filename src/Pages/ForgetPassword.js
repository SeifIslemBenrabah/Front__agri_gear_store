import React from 'react'
import Nav from '../Components/Nav'
import Backg from '../Assetes/Images/Backg.jpg'
import { Link } from 'react-router-dom'
const ForgetPassword = () => {
  return (
    <div>
      <div className='relative'>
        <Nav openr={false}/>
        <img src={Backg} alt='bg' className='absolute inset-0 w-full h-screen -z-10 brightness-65'/>
        <div className='flex justify-center items-center'>
        <div className='flex items-center flex-col p-5 bg-gray/30 backdrop-blur-sm rounded-xl mt-20'>
            <h1 className='text-white text-center text-4xl font-poppins font-normal tracking-normal leading-tight mx-4'>
            Reset Your Password New
            </h1>
            <p className='text-white text-center text-lg font-poppins font-light tracking-normal leanding-tight'>
            Securing Your Account with a New Password
            </p>
            <div className='group flex flex-col mt-1 mb-3'>
                <p className='text-xs text-primary font-poppins font-bold ml-5 opacity-0 group-focus-within:opacity-100 '>E-mail</p>
                <input type='text' placeholder='E-mail' className='w-[400px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg custom-placeholder focus:outline-none focus:border-secondary text-white' required/>
            </div> 
            <div className='flex justify-end'>
                <Link to='/Login' className='text-lg text-primary font-poppins font-light ml-[270px] mt-3 underline'>
                    Back to Login
                </Link>
              </div>
            <div className='flex justify-center mt-3'>
                <button className='w-[400px] h-[40px] bg-primary text-white text-center font-poppins font-medium rounded-lg'>
                Reset Password
                </button>
              </div>
              </div>
        </div>
        </div>
      </div>
  )
}

export default ForgetPassword
