import React, { useState ,useEffect} from 'react'
import Nav from '../Components/Nav'
import path from '../Assetes/Images/path.png'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import '../style.css'
import Rating5 from '../Assetes/Icons/Rating5.png'
import Rating4 from '../Assetes/Icons/Rating4.png'
import Rating3 from '../Assetes/Icons/Rating3.png'
import Rating2 from '../Assetes/Icons/Rating2.png'
import Rating1 from '../Assetes/Icons/Rating1.png'
import Hose from '../Assetes/Images/Hose.jpg'
import Harvester from '../Assetes/Images/Harvester.jpg'
const Shop = () => {
  const [cat,setcat]=useState(false)
  const [price,setprice]=useState(false)
  const [rating,setrating]=useState(false)
  const [filter,setfileter]=useState(false)
  const [cart,setcart]=useState(false)
  const handldisplayfilter =()=>{
    setfileter(!filter)
  }
  const handldisplaycart =() =>{
    setcart(!cart)
  }
  const handldisplayprice = () =>{
    setprice(!price)
  }
  const handldisplaycat = () =>{
    setcat(!cat)
  }
  const handldisplayrating = () =>{
    setrating(!rating)
  }
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(12000);
  const [minInput, setMinInput] = useState(null);
  const [maxInput, setMaxInput] = useState(12000);
  const sliderMinValue = 0;
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
    if (value - minGap >= minVal && value <= sliderMaxValue) {
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
  const products = [
    {
      img: Hose,
      name: 'Hose',
      price: 100.00,
      ratingImage: Rating5,
    },
    {
      img: Hose,
      name: 'Hose',
      price: 80.99,
      ratingImage: Rating2,
    },
    {
      img: Harvester,
      name: 'Harvester',
      price: 1500.00,
      ratingImage: Rating3,
    },
    {
      img: Harvester,
      name: 'Harvester',
      price: 1500.00,
      ratingImage: Rating3,
    },
    {
      img: Harvester,
      name: 'Harvester',
      price: 1500.00,
      ratingImage: Rating3,
    },
    {
      img: Harvester,
      name: 'Harvester',
      price: 1500.00,
      ratingImage: Rating3,
    },
  ];
  
  return (
    <div>
      <div className='relative'>
        <Nav openr={true}/>
        <img src={path} alt='path' className='-z-10 top-0 absolute mt-5'/>
        <div className='flex flex-row mt-[6px] mb-1 mx-2'>
            <Link to='/' className='text-lg text-white p-1 ml-2 font-poppins font-light'>Home</Link>
            <h1 className='text-lg text-brown mr-2 font-poppins font-light p-1'>&gt; Shop</h1>
        </div>
        
           <div className='flex flex-row'>
            <div className='flex flex-col  w-72'>
              <button className={`flex mr-8  bg-vertt justify-center py-[2px] rounded-r-2xl ${filter?'w-full':'w-28'}`} onClick={handldisplayfilter}>
                
                <div className='flex flex-row items-center'>
                    <h1 className='text-white text-lg font-poppins font-normal mr-1'>
                        Filter
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-white mt-[2px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                </div>
             </button>
             <div className={`w-72 ${filter ? 'block ':'hidden'}`}>
              <div className='flex flex-col'>
                <div className={`flex flex-row justify-between ${cat?'mb-3':'mb-0 '}`}>
                  <h1 className='text-lg font-poppins font-semibold  ml-7'>
                  All Categories
                  </h1>
                  <button onClick={handldisplaycat}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6  ${cat?'rotate-180':'rotate-0'}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </button>
                </div>
                <div className={`${cat ? 'hidden':'block mx-10'}`}>
                <form>
  <div className="radio-group">
    <input className='accent-green-600 size-[10px]' type="radio" id="all" name="Categories" value="All"/>
    <label htmlFor="all" className='font-poppins font-normal text-sm ml-2'>All</label>
  </div>
  <div className="radio-group">
    <input className='accent-green-600 size-[10px]' type="radio" id="seeds" name="Categories" value="Seeds & Plants"/>
    <label htmlFor="seeds" className='font-poppins font-normal text-sm ml-2'>Seeds & Plants</label>
  </div>
  <div className="radio-group">
    <input className='accent-green-600 size-[10px]' type="radio" id="machinery" name="Categories" value="Farm Machinery"/>
    <label htmlFor="machinery" className='font-poppins font-normal text-sm ml-2'>Farm Machinery</label>
  </div>
  <div className="radio-group">
    <input className='accent-green-600 size-[10px]' type="radio" id="fertilizers" name="Categories" value="Fertilizers & Soil"/>
    <label htmlFor="fertilizers" className='font-poppins font-normal text-sm ml-2'>Fertilizers & Soil</label>
  </div>
  <div className="radio-group">
    <input className='accent-green-600 size-[10px]' type="radio" id="fodder" name="Categories" value="Fodder"/>
    <label htmlFor="fodder" className='font-poppins font-normal text-sm ml-2'>Fodder</label>
  </div>
</form>
                </div>
              </div>
              <div className='flex flex-col mb-1'>
                <div className={`flex flex-row justify-between ${price?'mb-3':'mb-0'}`}>
                  <h1 className='text-lg font-poppins font-semibold ml-7 '>
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
    <div className='flex flex-row items-center m-0 w-1/2'>
      <span className='text-base text-black font-poppins font-medium'>Min:</span>
    <div className='w-2/3  border rounded-md border-vertt flex flex-row justify-center items-center'>
    <span className='font-poppins font-normal text-sm'>$</span>
        <input
          type='text'
          name='min_input'
          className='w-10/12  p-1  focus:outline-0 focus:ring-0 font-poppins font-normal'
          value={minInput}
          onChange={handleMin}
        />
    </div>
    </div>
    <div className='flex flex-row items-center m-0 w-1/2'>
      <span className='text-base text-black font-poppins font-medium'>Max:</span>
    <div className='w-2/3  border rounded-md border-vertt flex flex-row justify-center items-center'>
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
              <div className='flex flex-col'>
                <div className={`flex flex-row justify-between ${rating?'mb-3':'mb-0'}`}>
                  <h1 className='text-lg font-poppins font-semibold  ml-7'>
                  Rating
                  </h1>
                  <button onClick={handldisplayrating}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6  ${rating?'rotate-180':'rotate-0'}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </button>
                </div>
                <div className={`${rating ? 'hidden':'block mx-10'}`}>
                <form>
  <div className="checkbox-group flex flex-row items-center ">
    <input className='accent-green-600 ' type="checkbox" id="all" name="Categories" value="All"/>
    <label htmlFor="all" className='font-poppins font-normal text-sm ml-2'>
      <div className='flex flex-row items-center'>
        <div>
      <img src={Rating5} alt='five'/>
      </div>
      <p className='font-poppins font-light ml-2 text-base'>5.0</p>
      </div>
    </label>
  </div>
  <div className="checkbox-group flex flex-row items-center ">
    <input className='accent-green-600 ' type="checkbox" id="all" name="Categories" value="All"/>
    <label htmlFor="all" className='font-poppins font-normal text-sm ml-2'>
      <div className='flex flex-row items-center'>
        <div>
      <img src={Rating4} alt='four'/>
      </div>
      <p className='font-poppins font-light ml-2 text-base'>4.0 & up</p>
      </div>
    </label>
  </div>
  <div className="checkbox-group flex flex-row items-center">
    <input className='accent-green-600' type="checkbox" id="all" name="Categories" value="All"/>
    <label htmlFor="all" className='font-poppins font-normal text-sm ml-2'>
      <div className='flex flex-row items-center'>
        <div>
      <img src={Rating3} alt='three'/>
      </div>
      <p className='font-poppins font-light ml-2 text-base'>3.0 & up</p>
      </div>
    </label>
  </div>
  <div className="checkbox-group flex flex-row items-center">
    <input className='accent-green-600' type="checkbox" id="all" name="Categories" value="All"/>
    <label htmlFor="all" className='font-poppins font-normal text-sm ml-2'>
      <div className='flex flex-row items-center'>
        <div>
      <img src={Rating2} alt='two'/>
      </div>
      <p className='font-poppins font-light ml-2 text-base'>2.0 & up</p>
      </div>
    </label>
  </div>
  <div className="checkbox-group flex flex-row items-center">
    <input className='accent-green-600' type="checkbox" id="all" name="Categories" value="All"/>
    <label htmlFor="all" className='font-poppins font-normal text-sm ml-2'>
      <div className='flex flex-row items-center'>
        <div>
      <img src={Rating1} alt='one'/>
      </div>
      <p className='font-poppins font-light ml-2 text-base'>1.0 & up</p>
      </div>
    </label>
  </div>
</form>
                </div>
              </div>
              </div>
            </div>
            <div className='flex flex-center my-6 ml-2'>
            <div className="w-[0.5px] bg-gray h-full items-center">
            </div>
            </div>
            <div className='flex flex-col w-full items-center '>
            <div className='ml-7 mt-2 flex flex-col justify-around h-12 w-[900px]'>
            <div className=' flex flex-row justify-between items-center'>
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
<button className='mr-10' onClick={handldisplaycart}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</button>
           </div>
            </div>
            <div className=' w-[900px] h-10/12 mt-5 mb-2 ml-7'>
            <div className='grid grid-cols-4 gap-x-0 gap-y-8'>
              {products.map((product,index)=>(
              <div className='rounded-lg w-48 h-64 bg-white border border-gray relative'>
              <div className='w-full h-3/4  rounded-t-lg relative overflow-hidden'>
                    <img src={product.img} alt='photo' className='absolute w-full h-full object-cover' />
                    <div className='absolute  opacity-0 hover:opacity-100 bg-transparent h-full w-full inset-0 flex justify-end'>
                  <button className='bg-white w-[34px] h-[34px] rounded-full top-0 right-0 flex justify-center items-center mt-1 mr-[6px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                </button> 
                </div>
                </div>
                <div className='flex flex-row'>
                <div className='flex flex-col ml-2 h-1/4'>
                  <h1 className='text-base font-poppins font-semibold'>
                    {product.name}
                  </h1>
                  <p className='font-poppins font-light'>
                    ${product.price}
                  </p>
                  <div className='m-0 p-0 w-16'>
                  <img src={product.ratingImage} alt='rating5'/>
                  </div>
                </div>
                <div className='flex  w-full justify-end items-end mb-2 mr-2'>
                  <button className='rounded-full bg-primary p-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  </button>
                </div>
                </div>
                
              </div>))}

            </div>
            </div>
            </div>
            </div>   
            <div className={`absolute top-0 flex justify-center items-center  w-full ${cart ? 'block ':'hidden'}`}>
        <div className='bg-vertt w-full bottom-0 '>
          cart rapide
        </div>
      </div>
      </div>
    </div>
  )
}

export default Shop
