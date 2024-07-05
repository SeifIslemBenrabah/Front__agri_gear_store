
import React ,{useState}from 'react'
import Nav from '../Components/Nav'
import { useNavigate, Outlet } from 'react-router-dom'
import '../style.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
const A = () => {
    const [nav, setNav] = useState('Profile');
    const navigate = useNavigate();
  
    const handleNavigation = (e) => {
      const value = e.target.value;
      setNav(value);
      navigate(`/A/${value}`);
    };
    return (
      <div>
        <Nav openr={false}/>
        <div className='flex flex-row mt-[40px] ml-[40px]'>
          <div className='flex flex-col border border-gray h-[400px] w-[350px] rounded-xl mr-7'>
            <h1 className='text-xl font-poppins font-semibold mt-6 ml-7 mb-7'>Navigation</h1>
            <div className='grid grid-cols-1 gap-5 w-full'>
              
    <div className='flex flex-row relative w-full h-8'>
      
      <input  id='profile'
                  type='radio'
                  name='nav'
                  value='Dashboard'
                  onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
      <label htmlFor='profile' className='h-full w-full peer-checked:border-l-2 border-secondary flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert text-gray peer-checked:text-black'>
      
        <div className='ml-8 flex flex-row gap-3'>
        <DashboardIcon />
          <h1 className='text-lg font-poppins font-medium'>Dashboard</h1>
        </div>
        
      </label>
    </div>
    
    <div className='flex flex-row relative w-full h-8'>
      <input  id='order-history'
                  type='radio'
                  name='nav'
                  value='Orders'
                  onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
      <label htmlFor='order-history' className='h-full w-full peer-checked:border-l-2 border-secondary flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert text-gray peer-checked:text-black'>
        
        <div className='ml-8 flex flex-row gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
          </svg>
          <h1 className='text-lg font-poppins font-medium'>Orders</h1>
        </div>
      </label>
    </div>
  
    <div className='flex flex-row relative w-full h-8'>
      <input id='shopping-cart'
                  type='radio'
                  name='nav'
                  value='Categories'
                  onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
      <label htmlFor='shopping-cart' className='h-full w-full peer-checked:border-l-2 border-secondary flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert text-gray peer-checked:text-black'>
        <div className='ml-8 flex flex-row gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>

          <h1 className='text-lg font-poppins font-medium'>Categories</h1>
        </div>
      </label>
    </div>
    
    <div className='flex flex-row relative w-full h-8'>
      <input id='shopping-cart'
                  type='radio'
                  name='nav'
                  value='Products'
                  onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
      <label htmlFor='shopping-cart' className='h-full w-full peer-checked:border-l-2 border-secondary flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert text-gray peer-checked:text-black'>
        <div className='ml-8 flex flex-row gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <h1 className='text-lg font-poppins font-medium'>Products</h1>
        </div>
      </label>
    </div>

    <div className='flex flex-row relative w-full h-8'>
      <input id='settings'
                  type='radio'
                  name='nav'
                  value='Users'
                  onChange={handleNavigation} className='absolute h-full w-full m-0 cursor-pointer z-20 opacity-0 peer'/>
      <label htmlFor='settings' className='h-full w-full  flex items-center transition-all duration-300 ease-in-out radio-tile peer-checked:bg-vert peer-checked:border-l-2 border-secondary text-gray peer-checked:text-black'>
        <div className='ml-8 flex flex-row gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

          <h1 className='text-lg font-poppins font-medium'>Users</h1>
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

export default A

