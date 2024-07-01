import React from 'react'
import { Link } from 'react-router-dom'
import tik from '../Assetes/Icons/tik.png'
import tw from '../Assetes/Icons/tw.png'
import insta from '../Assetes/Icons/insta.png'
import fb from '../Assetes/Icons/fb.png'
const Footer = () => {
  return (
    <div className='flex justify-around bg-brown p-8'>
        <div>
            <h1 className='mt-2 mb-3 text-white text-5xl font-poppins font-semibold'>Logo</h1>
            <p className='text-white font-poppins font-light'>Your trusted partner in providing top-quality <br/>agricultural tools and equipment for a <br/>successful farming experience</p>
        </div>
        <div className='flex flex-col'>
    <h1 className='text-white text-2xl font-poppins font-semibold'>Quick Links</h1>
        <Link to='/' className='text-white text-lg font-poppins font-normal'>Home</Link>
        <Link to='/Shop' className='text-white text-lg font-poppins font-normal'>Shop</Link>
        <Link to='/AboutUs' className='text-white text-lg font-poppins font-normal'>About Us</Link>
        <Link to='/ContactUs' className='text-white text-lg font-poppins font-normal'>Contact Us</Link>
        <Link to='/Registration'className='text-white text-lg font-poppins font-normal'>Registration</Link>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-white text-2xl font-poppins font-semibold'>Support</h1>
            <Link to='https://www.google.com/maps/@35.7169487,4.5259821,12.42z?entry=ttu' target="_blank" className='text-white text-lg font-poppins font-normal leading-6 mb-1'>56 Agrigear, M'sila, M'sila,<br/> Algeria </Link>
            <a href='mailto:AgrigearStore@gmail.com ' className='text-white text-lg font-poppins font-normal mb-1'>AgrigearStore@gmail.com</a>
            <a href='tel:+21303404234' className='text-white text-lg font-poppins font-normal'>(+213)03404234</a>
        </div>
        <div className='flex flex-col'>
        <h1 className='text-white text-2xl font-poppins font-semibold'>Contact</h1>
        <div className='flex flex-row my-1'>
    <a href='https://www.instagram.com/AgriGear_Store' target='_blank' rel='noopener noreferrer'>
        <img src={insta} alt='Instagram' className='mr-2'/>
    </a>
    <Link to='https://www.instagram.com/AgriGear_Store' className='text-white text-lg font-poppins font-normal' target='_blank' rel='noopener noreferrer'>AgriGear_Store</Link>
</div>
<div className='flex flex-row my-1'>
    <a href='https://www.facebook.com/AgriGear_Store' target='_blank' rel='noopener noreferrer'>
        <img src={fb} alt='Facebook' className='mr-2'/>
    </a>
    <Link to='https://www.facebook.com/AgriGear_Store' className='text-white text-lg font-poppins font-normal' target='_blank' rel='noopener noreferrer'>Agri Gear Store</Link>
</div>
<div className='flex flex-row my-1'>
    <a href='https://twitter.com/AgriGear_Store' target='_blank' rel='noopener noreferrer'>
        <img src={tw} alt='Twitter' className='mr-2'/>
    </a>
    <Link to='https://twitter.com/AgriGear_Store' className='text-white text-lg font-poppins font-normal' target='_blank' rel='noopener noreferrer'>Agri_Gear_Store</Link>
</div>
<div className='flex flex-row my-1'>
    <a href='https://www.tiktok.com/@AgriGear_Store' target='_blank' rel='noopener noreferrer'>
        <img src={tik} alt='TikTok' className='mr-2'/>
    </a>
    <Link to='https://www.tiktok.com/@AgriGear_Store' className='text-white text-lg font-poppins font-normal' target='_blank' rel='noopener noreferrer'>AgriGearStore</Link>
</div>
        </div>
    </div>
  )
}

export default Footer