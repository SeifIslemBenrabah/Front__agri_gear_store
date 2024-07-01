import React from 'react'
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom'
import path from '../Assetes/Images/path.png'
import '../style.css'
import Footer from '../Components/Footer'
const ContactUs = () => {
  return (
    <div>
      <div className='relative'>
      <Nav openr={true}/>
      <img src={path} alt='path' className='-z-10 top-0 absolute mt-4'/>
      <div className='flex flex-row mt-0 mb-1'>
        <Link to='/' className='text-lg text-white p-1 ml-2 font-poppins font-light'>Home </Link>
        <h1 className='text-lg text-brown mr-2 font-poppins font-light p-1'> &gt; Contact Us</h1>
      </div>
    </div>
    <div className='flex flex-row mb-20'>
      <div className='shadow-custom bg-white h-[420px] w-72 ml-20 mt-3 rounded-xl'>
        <a href='https://www.google.com/maps/@35.7169487,4.5259821,12.42z?entry=ttu' target="_blank"> 
        <div className='flex flex-col items-center w-72 h-[135px] justify-center group '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 group-hover:text-primary">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
        <h1 className='text-black text-center font-poppins font-light group-hover:text-primary '>56 Agrigear, M'sila,<br/> M'sila, Algeria </h1>
      </div>
      </a>
      <a href='mailto:AgrigearStore@gmail.com' target="_blank">
      <div className='flex flex-col items-center w-72 h-[135px] justify-center group'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 group-hover:text-primary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
      <h1 className='text-black text-center font-poppins font-light group-hover:text-primary'>AgrigearStore@gmail.com</h1>
      </div>
      </a>
      <a href='tel:+21303404234'>
      <div className='flex flex-col items-center w-72 h-[135px] justify-center group'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 group-hover:text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
<h1 className='text-black text-center font-poppins font-light group-hover:text-primary'>(+213)03404234</h1>
      </div>
      </a>
      </div>
      <div className='shadow-custom bg-white h-[420px] w-[800px] ml-10 mt-3 rounded-xl'>
        <h1 className='text-4xl text-brown font-poppins font-bold ml-8 mt-3'>Hello!</h1>
        <p className='text-gray text-sm font-poppins font-light ml-8'>
        We're eager to hear from you and ready to assist. Please take a <br/>
        moment to share your thoughts, questions, or feedback using the<br/>
         form below. Thank you for reaching out to Agrigearstore!
        </p>
        <form>
          <div className='flex flex-col items-center'>
            <div className='flex flex-row mb-3'>
              <div className='group flex flex-col'>
                <p className='text-xs text-secondary font-poppins ml-5 opacity-0 group-focus-within:opacity-100 '>Full Name</p>
          <input type='text' placeholder='Full Name' className='w-[363px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg custom-placeholder focus:outline-none focus:border-secondary' required/>
              </div>
              <div className='group flex flex-col'>
              <p className='text-xs text-secondary font-poppins ml-5 opacity-0 group-focus-within:opacity-100 '>E-mail</p>
          <input type='text' placeholder='E-mail' className='w-[363px] h-[40px] bg-transparent border border-gray p-2 mx-3 rounded-lg custom-placeholder focus:outline-none focus:border-secondary'/>
          </div>
          </div>
          <div className='group flex flex-col'>
          <p className='text-xs text-secondary font-poppins ml-5 opacity-0 group-focus-within:opacity-100 '>Subject</p>
          <input type='text' placeholder='Subject' className='bg-gray h-[40px] w-[750px] mb-3 rounded-lg bg-transparent border border-gray p-2 mx-3 custome-placeholder focus:outline-none focus:border-secondary'/>
          </div>
          <div className='group felx flex-col'>
          <p className='text-xs text-secondary font-poppins ml-5 opacity-0 group-focus-within:opacity-100 '>Your message</p>
          <textarea type='comment' placeholder='message...' className='bg-gray w-[750px] h-[100px] rounded-xl bg-transparent border border-gray p-2 mx-3 custome-placeholder focus:outline-none focus:border-secondary'/>
          </div>
          </div>
          <div className='flex justify-end mr-7 mt-1'>
            <button type='submit'>
              <div className='flex flex-row bg-primary rounded-xl px-2 py-1'>
                <p className='text-lg text-white font-poppins'>Send</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ContactUs
