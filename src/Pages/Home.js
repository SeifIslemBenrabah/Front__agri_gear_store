import React from 'react'
import Nav from '../Components/Nav'
import Backg from '../Assetes/Images/Backg.jpg'
import Food from '../Assetes/Images/Food.png'
import Hand from '../Assetes/Images/Hand.png'
import Sheep from '../Assetes/Images/Sheep.png'
import Tractor from '../Assetes/Images/Tractor.png'
import Sold from '../Assetes/Images/Sold.png'
import { Link } from 'react-router-dom'
import Stars from '../Assetes/Images/Stars.png'
import Rating from '../Assetes/Images/Rating.png'
import Vector from '../Assetes/Images/Vector.png'
import agrale from '../Assetes/Icons/agrale.png'
import caterpillar from '../Assetes/Icons/caterpillar.png'
import landini from '../Assetes/Icons/landini.png'
import newholland from '../Assetes/Icons/newholland.png'
import Footer from '../Components/Footer'
import '../style.css'
const Home = () => {
  return (
    <div>
      <div className='relative'>
        <Nav openr={true}/>
      <img src={Backg} alt='background' className='absolute inset-0 w-full h-screen -z-10' />
      <div className='flex justify-center mt-20 '>
      <div className='relative'>
  <input
    type='text'
    placeholder='Search...'
    className='bg-gray bg-opacity-25 z-0 w-96 h-12 rounded-3xl pl-12 pr-12 focus:outline-0 focus:ring-0 text-white font-poppins font-medium placeholder-white placeholder-opacity-100'
  />
  <button
    type='submit'
    className='absolute right-0 top-0 h-full bg-vertt rounded-3xl px-5 py-1 text-white z-10 text-lg'
  >
    Search
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
</div>

      </div>
      <div className='flex justify-center mt-8'>
        <h1 className='font-poppins text-5xl align-text-center text-white text-center font-bold tracking-wide leading-tight'>
       <span className='font-bold text-vert text-6xl'> Discover, shop</span> from a diverse selection
        <br/>of agricultural equipment, tools, and<br/>
        supplies for efficient farming  </h1>
    </div>
    <div className='flex justify-center mt-8'>
        <button className='bg-vertt rounded-3xl text-left p-2 px-5 relative'>
            <div className='flex justify-between items-center'>
                <h1 className='text-white font-poppins font-medium text-2xl mr-0'>
                Shop Now
                </h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-white ml-2"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
            </div>
        </button>
    </div>
    </div>
    <div className='my-20'>
        <h1 className='text-brown text-center text-4xl font-poppins font-extrabold mb-12'>Categories</h1>
        <div className='flex justify-around flex-wrap gap-4'>
        <section>
            <div className='h-auto w-auto group'>
                <div className='relative overflow-hidden'>
                <img src={Food} alt="Food" className='w-full h-auto' />
                <div className='absolute inset-0 bg-vert/75 rounded-lg opacity-0 group-hover:opacity-100 flex justify-between transition-opacity duration-300'>
                <h1 className='text-white m-5 text-3xl font-poppins font-bold'>
                Seeds and Plants
                </h1>
                <div className='flex items-end'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white mr-2 mb-2"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section>
            <div className='h-auto w-auto group'>
                <div className='relative overflow-hidden'>
                <img src={Hand} alt="Hand" className='w-full h-auto' />
                <div className='absolute inset-0 bg-vert/75 rounded-lg opacity-0 group-hover:opacity-100 flex justify-between transition-opacity duration-300'>
                <h1 className='text-white m-5 text-3xl font-poppins font-bold'>
                Fertilizers and Soil
                </h1>
                <div className='flex items-end'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white mr-2 mb-2"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section>
            <div className='h-auto w-auto group'>
                <div className='relative overflow-hidden'>
                <img src={Tractor} alt="Tractor" className='w-full h-auto' />
                <div className='absolute inset-0 bg-vert/75 rounded-lg opacity-0 group-hover:opacity-100 flex justify-between transition-opacity duration-300'>
                <h1 className='text-white m-5 text-3xl font-poppins font-bold'>
                Farm Machinery
                </h1>
                <div className='flex items-end'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white mr-2 mb-2"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
                </div>
                </div>
            </div>
            </div>
        </section>  
        <section>
            <div className='h-auto w-auto group'>
                <div className='relative overflow-hidden'>
                <img src={Sheep} alt="Sheep" className='w-full h-auto' />
                <div className='absolute inset-0 bg-vert/75 rounded-lg opacity-0 group-hover:opacity-100 flex justify-between transition-opacity duration-300'>
                <h1 className='text-white m-5 text-3xl font-poppins font-bold'>
                Fodder
                </h1>
                <div className='flex items-end'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white mr-2 mb-2"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
                </div>
                </div>
            </div>
            </div>
        </section>    
        </div>
        <div className='flex justify-end mr-6 mt-5'>
        <Link  to='/Shop' className='underline text-secondary font-medium text-glow'>See More</Link>
        </div>
      </div>
      <div className='mb-20'>
      <h1 className='text-brown text-center text-4xl font-poppins font-extrabold mb-8'>Hot Deals</h1>
      <div className='flex justify-around items-center'>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="size-8 hover:text-primary    ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        </button>
      <section>
            <div className='h-auto w-auto group'>
                <div className='relative overflow-hidden'>
                <img src={Sold} alt="Sold" className='w-full h-80' />
                <div className='absolute inset-0 bg-vert/75 rounded-lg opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300'>
                <h1 className='text-white m-5 text-5xl font-poppins font-bold'>
                Shop Now
                </h1>
                </div>
            </div>
            </div>
        </section>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="size-8 hover:text-primary">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </button>
      </div>
      </div>
        <div className='mb-20'>
            <h1 className='text-brown text-center text-4xl font-poppins font-extrabold mb-8'>Features Product</h1>
            <div className='flex justify-around flex-wrap gap-4'>
        <section>
            <div className='h-auto w-auto group'>
                <div className='relative overflow-hidden'>
                <img src={Food} alt="Food" className='w-full h-auto' />
                <div className='absolute inset-0 bg-vert/75 rounded-lg opacity-0 group-hover:opacity-100 flex justify-between transition-opacity duration-300'>
                <div>
                <h1 className='text-white mx-5 mt-5 mb-2 text-3xl font-poppins font-bold'>
                Seeds
                </h1>
                <h1 className='text-white mx-5 mb-2 text-3xl font-poppins font-light'>
                $40.00
                </h1>
                <img src={Stars} alt='star' className='mx-5'/>
                </div>
                <div className='flex items-end'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white mr-2 mb-2"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section>
            <div className='h-auto w-auto group'>
                <div className='relative overflow-hidden'>
                <img src={Hand} alt="Hand" className='w-full h-auto' />
                <div className='absolute inset-0 bg-vert/75 rounded-lg opacity-0 group-hover:opacity-100 flex justify-between transition-opacity duration-300'>
                <div>
                <h1 className='text-white mx-5 mt-5 mb-2 text-3xl font-poppins font-bold'>
                Fertilizer
                </h1>
                <h1 className='text-white mx-5 mb-2 text-3xl font-poppins font-light'>
                $75.00
                </h1>
                <img src={Stars} alt='star' className='mx-5'/>
                </div>
                <div className='flex items-end'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white mr-2 mb-2"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section>
            <div className='h-auto w-auto group'>
                <div className='relative overflow-hidden'>
                <img src={Tractor} alt="Tractor" className='w-full h-auto' />
                <div className='absolute inset-0 bg-vert/75 rounded-lg opacity-0 group-hover:opacity-100 flex justify-between transition-opacity duration-300'>
                <div>
                <h1 className='text-white mx-5 mt-5 mb-2 text-3xl font-poppins font-bold'>
                Tractor
                </h1>
                <h1 className='text-white mx-5 mb-2 text-3xl font-poppins font-light'>
                $7500.00
                </h1>
                <img src={Stars} alt='star' className='mx-5'/>
                </div>
                <div className='flex items-end'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white mr-2 mb-2"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
                </div>
                </div>
            </div>
            </div>
        </section>  
        <section>
            <div className='h-auto w-auto group'>
                <div className='relative overflow-hidden'>
                <img src={Sheep} alt="Sheep" className='w-full h-auto' />
                <div className='absolute inset-0 bg-vert/75 rounded-lg opacity-0 group-hover:opacity-100 flex justify-between transition-opacity duration-300'>
                <div>
                <h1 className='text-white mx-5 mt-5 mb-2 text-3xl font-poppins font-bold'>
                Hay
                </h1>
                <h1 className='text-white mx-5 mb-2 text-3xl font-poppins font-light'>
                $120.00
                </h1>
                <img src={Stars} alt='star' className='mx-5'/>
                </div>
                <div className='flex items-end'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white mr-2 mb-2"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
                </div>
                </div>
            </div>
            </div>
        </section>    
        </div>
        <div className='flex justify-end mr-6 mt-5'>
        <Link  to='/Shop' className='underline text-secondary font-medium text-glow'>See More</Link>
        </div>
        </div>
        <div className='bg-vert h-[450px] mb-20'>
        <h1 className='text-brown text-center text-5xl font-poppins font-extrabold p-6 mb-8'>Testimonials</h1>
        <div className='flex justify-between items-center mx-5'>
            <div className='w-[440px] h-64 bg-white rounded-lg  shadow-custom z-0 '>
                <div className='flex ml-3 mt-3'>
                <div className='w-16 h-16 bg-slate-800 rounded-full relative overflow-hidden'>
                    <img src={Sold} alt='photo' className='absolute w-full h-full object-cover' />
                </div>
                <div className='mt-2 ml-4'>
                <h1 className='text-black font-poppins font-medium'>Seif Islem Benrabah</h1>
                <h1 className='font-poppins text-gray'>Islemsseeiiff@gmail.com</h1>
                </div>
                </div>
                <div className='flex justify-center'>
                    <img src={Rating} alt='Rating'/>
                </div>
                <div className='flex justify-start ml-2'>
                    <img src={Vector} alt='g'/>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-black font-poppins font-normal'>
                Pellentesque eu nibh eget mauris<br/> mattis nec tellus. Phasellus <br/>dictum, bibendum cursus velit sodales.<br/> Donec sed neque eget
                    </h1>
                </div>
                <div className='flex justify-end items-end mr-2'>
                    <img src={Vector} alt='g' className='rotate-180'/>
                </div>
            </div>
            <div className='w-[460px] h-64 bg-white rounded-lg shadow-custom z-10'>
                <div className='flex ml-3 mt-3'>
                <div className='w-16 h-16 bg-slate-800 rounded-full relative overflow-hidden'>
                    <img src={Sold} alt='photo' className='absolute w-full h-full object-cover' />
                </div>
                <div className='mt-2 ml-4'>
                <h1 className='text-black font-poppins font-medium'>Seif Islem Benrabah</h1>
                <h1 className='font-poppins text-gray'>Islemsseeiiff@gmail.com</h1>
                </div>
                </div>
                <div className='flex justify-center'>
                    <img src={Rating} alt='Rating'/>
                </div>
                <div className='flex justify-start ml-2'>
                    <img src={Vector} alt='g'/>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-black font-poppins font-normal ml-4'>
                Pellentesque eu nibh eget mauris congue mattis<br/> mattis nec tellus. Phasellus imperdiet  dictum, bibendum cursus velit sodales.<br/> Donec sed neque eget
                    </h1>
                </div>
                <div className='flex justify-end items-end mr-2'>
                    <img src={Vector} alt='g' className='rotate-180'/>
                </div>
            </div>
            <div className='w-[440px] h-64 bg-white rounded-lg shadow-custom z-0'>
                <div className='flex ml-3 mt-3'>
                <div className='w-16 h-16 bg-slate-800 rounded-full relative overflow-hidden'>
                    <img src={Sold} alt='photo' className='absolute w-full h-full object-cover' />
                </div>
                <div className='mt-2 ml-4'>
                <h1 className='text-black font-poppins font-medium'>Seif Islem Benrabah</h1>
                <h1 className='font-poppins text-gray'>Islemsseeiiff@gmail.com</h1>
                </div>
                </div>
                <div className='flex justify-center'>
                    <img src={Rating} alt='Rating'/>
                </div>
                <div className='flex justify-start ml-2'>
                    <img src={Vector} alt='g'/>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-black font-poppins font-normal'>
                Pellentesque eu nibh eget mauris congue mattis<br/> mattis nec tellus. Phasellus imperdiet elit  <br/>dictum, bibendum cursus velit sodales.<br/> Donec sed neque eget
                    </h1>
                </div>
                <div className='flex justify-end items-end mr-2'>
                    <img src={Vector} alt='g' className='rotate-180'/>
                </div>
            </div>  
        </div>
        </div>
        <div className='flex justify-around my-10'>
            <img src={landini} alt='landini logo' className='h-20 w-auto'/>
            <img src={newholland} alt='newholland logo' className='h-20 w-auto'/>
            <img src={agrale} alt='agrale logo'className='h-20 w-auto'/>
            <img src={caterpillar} alt='caterpillar logo'className='h-20 w-auto'/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
