import React from 'react'

const Products = () => {
  const Products = [
    {
      id: 12,
      name: 'Seif',
      Price: 100.00,
      Quantity: 5,
      Category:3456789.00
    },
    {
      id: 12,
      name: 'Seif',
      Price: 100.00,
      Quantity: 5,
      Category:3456789.00
    }]
  return (
    <div>
      <div className='flex flex-col h-[400px] w-[800px] rounded-xl gap-1'>
        <div className='flex flex-row items-center justify-between mt-2'>
        <h1 className='text-vertt text-xl mt-4 ml-[12px] mr-[12px] mb-2 font-poppins font-bold'>
        Products
        </h1>
        <div className='flex flex-row gap-1'>
        <div className='relative'>
  <input
    type='text'
    placeholder='Search...'
    className=' border border-vertt z-0 w-96 h-12 rounded-xl pl-12 pr-12 focus:outline-0 focus:ring-0 font-poppins font-medium '
  />

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-vertt">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

   </div>
<button className='flex justify-center items-center bg-vertt rounded-3xl text-white font-poppins font-medium text-xl p-2'>
  <h1>Filter</h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-white mt-[2px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
</button>
</div>
<div>
<div className='flex flex-row  gap-4 mr-2'>
    <button className='text-vertt font-semibold font-poppins text-lg'>
      Add Product
    </button>
    <button className='text-red-600 font-semibold font-poppins text-lg'>
      Delete
    </button>
    </div>
</div>
        </div>
        <div className='scroll-container w-[780px] max-h-[340px] overflow-auto ml-2'>
  <table className='table-auto w-full '>
        <thead className='sticky top-0 z-10 bg-white '>
    <tr>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Product ID</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Name</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Price</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Quantity</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Category</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay mt-7'></div></th>
    </tr>
  </thead>
  <tbody>
    {Products.map((Product,index)=>(
    <tr>
      <td className='text-lg font-poppins font-normal'>#{Product.id}</td>
      <td className='text-lg font-poppins font-light'>{Product.name}</td>
      <td className='text-lg font-poppins font-light'>{Product.Price}</td>
      <td className='text-lg font-poppins font-light'>{Product.Quantity}</td>
      <td className='text-lg font-poppins font-light'>{Product.Category}</td>
      <td className='text-gray text-xl font-poppins font-semibold'>View More</td>
    </tr>))}
  </tbody>
</table>
</div>
      </div>
    </div>
  )
}

export default Products
