import React, { useState } from 'react'
import Nav from '../Components/Nav'
import path from '../Assetes/Images/path.png'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import '../style.css'
const Shop = () => {
  const [cat,setcat]=useState(false)
  const [price,setprice]=useState(false)
  const handldisplayprice = () =>{
    setprice(!price)
  }
  const handldisplaycat = () =>{
    setcat(!cat)
  }
  const [minp,setminp]=useState(0)
  const [maxp,setmaxp]=useState(12000)
  return (
    <div>
      <div className='relative'>
        <Nav openr={true}/>
        <img src={path} alt='path' className='-z-10 top-0 absolute mt-6'/>
        <div className='flex flex-row m-2'>
            <Link to='/' className='text-lg text-white p-1 ml-2 font-poppins font-light'>Home</Link>
            <h1 className='text-lg text-brown mr-2 font-poppins font-light p-1'>&gt; Shop</h1>
        </div>
        <div className='flex flex-row justify-around'>
             <button className='bg-vertt rounded-3xl p-2 px-4'>
                <div className='flex flex-row'>
                    <h1 className='text-white text-xl font-poppins font-normal mr-1'>
                        Filter
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white mt-[2px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                </div>
             </button>
             <div className='relative'>
  <input
    type='text'
    placeholder='Search...'
    className='bg-white border border-gray bg-opacity-25 z-0 w-96 h-12 rounded-xl pl-12 pr-12 focus:outline-0 focus:ring-0 text-gray font-poppins font-medium placeholder-gray placeholder-opacity-100'
  />
  <button
    type='submit'
    className='absolute right-0 top-0 h-full bg-vertt rounded-xl px-5 py-1 text-white z-10 text-lg'
  >
    Search
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
</div>
<button>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</button>
           </div>
           <div className='flex flex-row'>
            <div className='flex flex-col mt-5'>
              <div className='flex flex-col'>
                <div className={`flex flex-row ${cat?'mb-3':'mb-0'}`}>
                  <h1 className='text-2xl font-poppins font-semibold mr-14 mx-7'>
                  All Categories
                  </h1>
                  <button onClick={handldisplaycat}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 rotate-180 ${cat?'rotate-180':'rotate-0'}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </button>
                </div>
                <div className={`${cat ? 'hidden':'block mx-10 mt-2'}`}>
                <form >
                  <input className='my-2 accent-green-600 ' type="radio" id="html" name="Categories" value="HTML" />
                  <label for="html" className='font-poppins font-normal text-base ml-2'>All</label><br></br>
                  <input className='my-2 accent-green-600' type="radio" id="html" name="Categories" value="HTML"/>
                  <label for="html" className='font-poppins font-normal text-base ml-2'>Seeds & Plants</label><br></br>
                  <input className='my-2 accent-green-600' type="radio" id="html" name="Categories" value="HTML"/>
                  <label for="html" className='font-poppins font-normal text-base ml-2'>Farm Machinery</label><br></br>
                  <input className='my-2 accent-green-600' type="radio" id="html" name="Categories" value="HTML"/>
                  <label for="html" className='font-poppins font-normal text-base ml-2'>Fertilizers & Soil</label><br></br>
                  <input className='my-2 accent-green-600' type="radio" id="html" name="Categories" value="HTML"/>
                  <label for="html" className='font-poppins font-normal text-base ml-2'>Fodder</label>
                </form>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row'>
                  <h1 className='text-2xl font-poppins font-semibold mr-[150px] mx-7 '>
                  Prices
                  </h1>
                  <button onClick={handldisplayprice}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 rotate-180 ${cat?'rotate-180':'rotate-0'}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </button>
                </div>
                <div className={`${price ? 'hidden':'block mx-10 mt-2'}`}>
                <div className='relative w-full h-1 my-8 mx-0 bg-gray '>
                  <span className='h-full absolute bg-green-600'></span>
                <input type="range" name='min_val' className='absolute w-full bg-transparent pointer-events-none top-1/2 transform -translate-y-1/2 appearance-none' min={minp} max={maxp} value={1000}/>
                <input type="range" name='max_val' className='absolute w-full bg-transparent pointer-events-none top-1/2 transform -translate-y-1/2 appearance-none' min={minp} max={maxp} value={9000}/>
                <div className='border-0 py-1 px-2 bg-black text-white text-lg rounded bottom-full block absolute text-center text-nowrap left-1/2 transform translate-x-1/4 -translate-y-full '></div>
                <div className='border-0 py-1 px-2 bg-black text-white text-lg rounded bottom-full block absolute text-center text-nowrap right-1/2 transform -translate-x-1 -translate-y-full'></div>
                </div>
                <div className='flex'>
                  <div className='w-20 mr-6'>
                    <div className='input-wrap'>
                      <span className='input-addon'>$</span>
                      <input type='text' name='min-input' className='input-field min-input'>
                      </input>
                    </div>
                  </div>
                  <div className='w-20'>
                    <div className='input-wrap'>
                      <span className='input-addon'>$</span>
                      <input type='text' name='max-input' className='input-field max-input'>
                      </input>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            </div>   
      </div>
    </div>
  )
}

export default Shop
