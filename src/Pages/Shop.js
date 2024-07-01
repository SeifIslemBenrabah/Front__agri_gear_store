import React, { useState ,useEffect} from 'react'
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
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(12000);
  const [minInput, setMinInput] = useState(null);
  const [maxInput, setMaxInput] = useState(12000);
  const sliderMinValue = 1;
  const sliderMaxValue = 12000;
  const minGap = 0;

  useEffect(() => {
    setArea();
  }, [minVal, maxVal]);

  const handleMin = (e) => {
    let value = parseInt(e.target.value)||0;
    if (value + minGap <= maxVal) {
      setMinVal(value);
      setMinInput(value);
    }
  };

  const handleMax = (e) => {
    let value = parseInt(e.target.value)||0;
    if (value - minGap >= minVal) {
      setMaxVal(value);
      setMaxInput(value);
    }
  };


  const setArea = () => {
    const range = document.querySelector('.slider-track');
    const minTooltip = document.querySelector('.min-tooltip');
    const maxTooltip = document.querySelector('.max-tooltip');

    range.style.left = `${((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100}%`;
    minTooltip.style.left = `${(minVal / sliderMaxValue) * 100}%`;
    range.style.right = `${100 - ((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100}%`;
    maxTooltip.style.right = `${100 - (maxVal / sliderMaxValue) * 100}%`;
  };
  
  
  return (
    <div>
      <div className='relative'>
        <Nav openr={true}/>
        <img src={path} alt='path' className='-z-10 top-0 absolute mt-6'/>
        <div className='flex flex-row m-2'>
            <Link to='/' className='text-lg text-white p-1 ml-2 font-poppins font-light'>Home</Link>
            <h1 className='text-lg text-brown mr-2 font-poppins font-light p-1'>&gt; Shop</h1>
        </div>
        
           <div className='flex flex-row'>
            <div className='flex flex-col mt-2 w-72'>
              <div className='flex justify-end mr-8 mb-1'>
            <button className='bg-vertt rounded-3xl flex justify-center w-[90px] py-1'>
                <div className='flex flex-row items-center'>
                    <h1 className='text-white text-lg font-poppins font-normal mr-1'>
                        Filter
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-white mt-[2px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                </div>
             </button>
             </div>
              <div className='flex flex-col'>
                <div className={`flex flex-row justify-between ${cat?'mb-3':'mb-0'}`}>
                  <h1 className='text-xl font-poppins font-semibold  ml-7'>
                  All Categories
                  </h1>
                  <button onClick={handldisplaycat}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6  ${cat?'rotate-180':'rotate-0'}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </button>
                </div>
                <div className={`${cat ? 'hidden':'block mx-10 mt-[2px]'}`}>
                <form >
                  <input className='my-1 accent-green-600 size-[10px] ' type="radio" id="html" name="Categories" value="HTML" />
                  <label for="html" className='font-poppins font-normal text-sm ml-2'>All</label><br></br>
                  <input className='my-1 accent-green-600 size-[10px]' type="radio" id="html" name="Categories" value="HTML"/>
                  <label for="html" className='font-poppins font-normal text-sm ml-2'>Seeds & Plants</label><br></br>
                  <input className='my-1 accent-green-600 size-[10px]' type="radio" id="html" name="Categories" value="HTML"/>
                  <label for="html" className='font-poppins font-normal text-sm ml-2'>Farm Machinery</label><br></br>
                  <input className='my-1 accent-green-600 size-[10px]' type="radio" id="html" name="Categories" value="HTML"/>
                  <label for="html" className='font-poppins font-normal text-sm ml-2'>Fertilizers & Soil</label><br></br>
                  <input className='my-1 accent-green-600 size-[10px]' type="radio" id="html" name="Categories" value="HTML"/>
                  <label for="html" className='font-poppins font-normal text-sm ml-2'>Fodder</label>
                </form>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row justify-between'>
                  <h1 className='text-xl font-poppins font-semibold ml-7 '>
                  Prices
                  </h1>
                  <button onClick={handldisplayprice}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6  ${price?'rotate-180':'rotate-0'}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </button>
                </div>
                <div className={`${price ? 'hidden':'block mx-10 mt-2'}`}>
                <div className='w-56'>
  <div className='range-slider'>
    <span className='slider-track'></span>
    <input
      type='range'
      name='min_val'
      className='min-val'
      min={sliderMinValue}
      max={sliderMaxValue}
      value={minVal}
      onChange={handleMin}
    />
    <input
      type='range'
      name='max_val'
      className='max-val'
      min={sliderMinValue}
      max={sliderMaxValue}
      value={maxVal}
      onChange={handleMax}
    />
    <div className='tooltip min-tooltip font-poppins font-normal text-sm'>{minVal}</div>
    <div className='tooltip max-tooltip font-poppins font-normal text-sm'>{maxVal}</div>
  </div>
  <div className='flex flex-row w-full'>
    <div className='w-1/2 m-1 border rounded-md border-vertt flex flex-row justify-center items-center'>
    <span className='font-poppins font-normal text-sm'>$</span>
        <input
          type='text'
          name='min_input'
          className='w-10/12  p-1  focus:outline-0 focus:ring-0 font-poppins font-normal'
          value={minInput}
          onChange={handleMin}
        />
    </div>
    <div className='w-1/2 m-1 border rounded-md border-vertt flex flex-row justify-center items-center'>
    <span className='font-poppins font-normal text-sm'>$</span>
        <input
          type='text'
          name='max_input'
          className='w-10/12 p-1 font-poppins font-normal  focus:outline-0 focus:ring-0'
          value={maxInput}
          onChange={handleMax}
        />
    </div>
  </div>
</div>

                </div>
              </div>
            </div>
            <div className='ml-5'>
            <div className='flex flex-row justify-around'>
             
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
            </div>
            </div>   
      </div>
    </div>
  )
}

export default Shop
