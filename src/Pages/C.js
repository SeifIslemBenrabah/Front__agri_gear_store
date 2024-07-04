import React ,{useState}from 'react'
import Nav from '../Components/Nav'
import { useNavigate, Outlet } from 'react-router-dom'
import '../style.css'
const C = () => {
  const [nav, setNav] = useState('Profile');
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    const value = e.target.value;
    setNav(value);
    navigate(`/C/${value}`);
  };
  return (
    <div>
      <Nav openr={false}/>
      <div className='flex flex-row mt-[40px] ml-[40px]'>
        <div className='flex flex-col border border-gray h-[400px] w-[350px] rounded-xl mr-7'>
          <h1 className='text-xl font-poppins font-semibold mt-6 ml-7 mb-11'>Navigation</h1>
          <div className='grid grid-cols-1 gap-5 w-full'>
            
  <div className='flex flex-row relative w-full h-8'>
    
    <input  id='profile'
                type='radio'
                name='nav'
                value='Profile'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='profile' className='h-full w-full peer-checked:border-l-2 border-secondary flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert text-gray peer-checked:text-black'>
    
      <div className='ml-8 flex flex-row gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <h1 className='text-lg font-poppins font-medium'>Profile</h1>
      </div>
      
    </label>
  </div>
  
  <div className='flex flex-row relative w-full h-8'>
    <input  id='order-history'
                type='radio'
                name='nav'
                value='OrderHistory'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='order-history' className='h-full w-full peer-checked:border-l-2 border-secondary flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert text-gray peer-checked:text-black'>
      
      <div className='ml-8 flex flex-row gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
        </svg>
        <h1 className='text-lg font-poppins font-medium'>Order History</h1>
      </div>
    </label>
  </div>

  <div className='flex flex-row relative w-full h-8'>
    <input id='shopping-cart'
                type='radio'
                name='nav'
                value='ShoppingCart'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='shopping-cart' className='h-full w-full peer-checked:border-l-2 border-secondary flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert text-gray peer-checked:text-black'>
      <div className='ml-8 flex flex-row gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <h1 className='text-lg font-poppins font-medium'>Shopping Cart</h1>
      </div>
    </label>
  </div>

  <div className='flex flex-row relative w-full h-8'>
    <input id='settings'
                type='radio'
                name='nav'
                value='Setting'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert peer-checked:border-l-2 border-secondary text-gray peer-checked:text-black'>
      <div className='ml-8 flex flex-row gap-3'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
        <h1 className='text-lg font-poppins font-medium'>Settings</h1>
      </div>
    </label>
  </div>
  <div className='flex flex-row relative w-full h-8'>
    <input id='logout'
                type='radio'
                name='nav'
                value='Logout'
                onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
    <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert peer-checked:border-l-2 border-secondary text-gray peer-checked:text-black'>
      <div className='ml-8 flex flex-row gap-3'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>
        <h1 className='text-lg font-poppins font-medium'>Log-out</h1>
      </div>
    </label>
  </div>
</div>
        </div>
        <div className='border border-gray h-[400px] w-[800px] rounded-xl'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default C
