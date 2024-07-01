import React from 'react'
import Nav from '../Components/Nav'
import path from '../Assetes/Images/path.png'
import { Link } from 'react-router-dom'
import Aboutus1 from '../Assetes/Images/Aboutus1.jpg'
import Aboutus2 from '../Assetes/Images/Aboutus2.jpg'
import h from '../Assetes/Icons/h.png'
import fast from '../Assetes/Icons/fast.png'
import wallet from '../Assetes/Icons/wallet.png'
import Aboutus3 from '../Assetes/Images/Aboutus3.png'
import Footer from '../Components/Footer'
const AboutUs = () => {
  return (
    <div>
    <div className='relative'>
      <Nav openr={true}/>
      <img src={path} alt='path' className='-z-10 top-0 absolute mt-6'/>
      <div className='flex flex-row m-2'>
        <Link to='/' className='text-lg text-white p-1 ml-2 font-poppins font-light'>Home </Link>
        <h1 className='text-lg text-brown mr-2 font-poppins font-light p-1'> &gt; About Us</h1>
      </div>
    </div>
    <div className='flex justify-center mt-7'>
      <div className='h-[400px] w-[1200px] bg-gradient-to-l from-transparent via-white/70 to-white relative'>
        <img src={Aboutus1} className='h-full w-full object-cover absolute mix-blend-overlay rounded-xl'/>
        <div className='p-10 mt-5 my-10 z-10 relative'>
          <h1 className='text-5xl text-brown font-poppins font-bold mb-4'>
          100% Trusted Store for<br/> Agricultural Equipment<br/> and Gear
          </h1>
          <p className='text-black text-lg font-poppins font-light'>
          Welcome to Agrigearstor, where quality meets trust in <br/>agricultural equipment and gear. <br/>
          Our commitment to reliability and innovation ensures<br/>
           that you have the tools you need for a successful <br/>
           farming journey.
          </p>
        </div>
      </div>
    </div>
    <div className='flex justify-center mt-7'>
      <div className='h-[480px] w-[1200px] bg-gradient-to-l from-white via-white/70 to-transparent relative'>
        <img src={Aboutus2} className='h-full w-full object-cover absolute mix-blend-overlay rounded-xl'/>
        <div className='p-10 mt-5 z-10 relative pl-[580px]'>
          <h1 className='text-5xl text-brown font-poppins font-bold mb-4'>
          100% Premium Quality<br/> Agricultural Equipment <br/> and Gear
          </h1>
          <div className='ml-48 mt-10'>
          <div className='flex ml-3 mt-3'>
                <div className='w-16 h-16 bg-primary rounded-full flex justify-center items-center'>
                  <img src={wallet} alt='wallet' />
                </div>
                <div className='mt-2 ml-4'>
                <h1 className='text-black font-poppins font-semibold text-lg'>100% Sucure Payment</h1>
                <h1 className='font-poppins text-gray'>We ensure your money is save</h1>
                </div>
                </div>
                <div className='flex ml-3 mt-3'>
                <div className='w-16 h-16 bg-primary rounded-full flex justify-center items-center'>
                <img src={fast} alt='fast' />
                </div>
                <div className='mt-2 ml-4'>
                <h1 className='text-black font-poppins font-semibold text-lg'>Fast Shipping</h1>
                <h1 className='font-poppins text-gray'>Fast shipping with discount</h1>
                </div>
                </div>
                <div className='flex ml-3 mt-3'>
                <div className='w-16 h-16 bg-primary rounded-full flex justify-center items-center'>
                  <img src={h} alt='contact' /> 
                </div>
                <div className='mt-2 ml-4'>
                <h1 className='text-black font-poppins font-semibold text-lg'>Great Support 24/7</h1>
                <h1 className='font-poppins text-gray'>Instant access to Contact</h1>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center mt-7'>
    <div className='pl-10 mt-6 z-10'>
          <h1 className='text-5xl text-brown font-poppins font-bold mb-4'>
          We Strive to Exceed Your<br/> Expectations
          </h1>
          <p className='text-black text-xl font-poppins font-light'>
          At Agrigearstor, we aim to satisfy our customers by <br/>
          offering top-tier agricultural equipment at <br/>
          competitive prices. Rely on us for innovative and <br/>
          dependable tools that will enhance your farming <br/>
          operations
          </p>
          <div>
          <div className='flex ml-10 mt-5'>
                <div className='w-10 h-10 bg-primary rounded-full flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-vert">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                </div>
                <div className='mt-2 ml-2'>
                <h1 className='text-black font-poppins font-light text-xl'>High-quality agricultural equipment</h1>
                </div>
                </div>
                <div className='flex ml-10 mt-5'>
                <div className='w-10 h-10 bg-primary rounded-full flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-vert">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                </div>
                <div className='mt-2 ml-2'>
                <h1 className='text-black font-poppins font-light text-xl'>Competitive prices</h1>
                </div>
                </div>
                <div className='flex ml-10 mt-5'>
                <div className='w-10 h-10 bg-primary rounded-full flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-vert">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                </div>
                <div className='mt-2 ml-2'>
                <h1 className='text-black font-poppins font-light text-xl'>Reliable source for agricultural equipment</h1>
                </div>
                </div>
          </div>
        </div>
        <div>
          <img src={Aboutus3} alt='dilivre' className='-z-10'/>
        </div>
    </div>
    <div className='flex justify-center my-14'>
        <button className='bg-primary rounded-3xl text-left p-2 px-5 relative'>
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
    <Footer/>
    </div>
  )
}

export default AboutUs
