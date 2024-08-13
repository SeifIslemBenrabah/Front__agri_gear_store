import React, { useState } from 'react'
import Nav from '../Components/Nav'
import path from '../Assetes/Images/path.png'
import { Link } from 'react-router-dom'
import Harvester from '../Assetes/Images/Harvester.jpg'
import Rating5 from '../Assetes/Icons/Rating5.png'
const Product = ({infos}) => {
  const [cont,setcont]=useState(0)
  const handladd =()=>{
    setcont(cont+1)
  }
  const handlSubtract =()=>{
    if(cont>0){
    setcont(cont-1)}
  }
  const handleNavigation=()=>{

  }
  return (
    <div>
      <div className='relative'>
        <Nav openr={true}/>
        <img src={path} alt='path' className='-z-10 top-0 absolute mt-5'/>
        <div className='flex flex-row mt-[6px] mb-1 mx-2'>
            <Link to='/' className='text-lg text-white p-1 ml-2 font-poppins font-light'>Home</Link>
            <h1 className='text-lg text-brown mr-2 font-poppins font-light p-1'>&gt; Shop</h1>

        </div>
        <div>
          <div className='flex flex-row mt-12 ml-20 items-center'>
            <div className='flex flex-row'>
              <div className='flex flex-col mr-2 gap-1 justify-center'>
              <div className='w-28 h-28 relative overflow-hidden'>
              <img src={Harvester} alt='Harvester' className='w-full h-full absolute object-cover'/>
              </div>
              <div className='w-28 h-28 relative overflow-hidden'>
              <img src={Harvester} alt='Harvester' className='w-full h-full absolute object-cover'/>
              </div>
              <div className='w-28 h-28 relative overflow-hidden'>
              <img src={Harvester} alt='Harvester' className='w-full h-full absolute object-cover'/>
              </div>
              </div>
              <div className='w-96 h-96 relative overflow-hidden'>
              <img src={Harvester} alt='Harvester' className='w-full h-full absolute object-cover'/>
              </div>
            </div>
            <div className='flex flex-col ml-32'>
              <h1 className='font-poppins font-bold text-5xl'>
              Tractor
              </h1>
              <div className='flex flex-row   items-center'>
              <div className='ml-1 p-0 w-24'>
                  <img src={Rating5} alt='rating5'/>
                  </div>
                  <p className='font-poppins font-light text-base text-gray '>9 Review</p>
                  <p className='font-poppins font-bold text-2xl text-gray mx-3 pb-[10px]'>.</p>
                  <p className='font-poppins font-light text-base text-gray'><span className='text-black'>SKU:</span>12345</p>
              </div>
              <div className='flex flex-row ml-1'>
                <p className='font-poppins font-light text-lg text-gray'>$4800.00</p>
                <div className='flex flex-row ml-3'>
                  <p className='font-poppins font-normal text-lg text-secondary'>
                  $4080.00
                  </p>
                  <div className='bg-red-200 content-center rounded-3xl ml-2'>
                    <p className='font-poppins font-medium opacity-100 text-red-700 text-sm px-2'>15% Off</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-center my-4 ml-1'>
            <div className="h-[2px] bg-graay w-full items-center">
            </div>
            </div>
            <div className='flex flex-row'>
              <h1 className='font-poppins font-medium text-2xl my-3 '>Brand: </h1>
            </div>
            <div className='flex flex-row'>
              <h1 className='font-poppins font-medium text-2xl mb-3'>Category: </h1>
            </div>
            <div className='flex flex-row items-center mb-3'>
              <h1 className='font-poppins font-medium text-2xl mr-4 '>Quantity: </h1>
              <div className='flex flex-row border rounded-3xl border-secondary items-center'>
                <button className='flex items-center justify-center bg-vert text-white font-poppins text-3xl rounded-full w-10 h-10' onClick={handlSubtract}>-</button>
                <h1 className='font-poppins font-semibold text-xl w-16 flex justify-center'>{cont}</h1>
                <button className='flex items-center justify-center bg-vert text-white font-poppins text-3xl rounded-full w-10 h-10' onClick={handladd}>+</button>
              </div>
            </div> 
            <div>
              <button className='bg-primary rounded-3xl mt-1'>
                <div className='flex flex-row items-center rounded-3xl py-1 px-3'>
                  <p className='font-poppins font-medium text-2xl text-white mr-2'>Add to Cart</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </div>
              </button>
              </div> 
              </div>
              
          </div>
          <div className='flex flex-row mt-2'>
    <div className='flex flex-row relative w-full h-8'>
    <input id='settings'
                type='radio'
                name='nav'
                value='AccountSettings'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile border-b-2 border-graay  peer-checked:border-vertt text-gray peer-checked:text-vertt'>
      <div className='ml-96 flex flex-row gap-3'>
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
    </div>
        </div>
      </div>
    </div>
  )
}

export default Product
