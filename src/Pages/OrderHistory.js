import React from 'react'

const OrderHistory = () => {
  const Orders = [
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 12,
      date: '8 Sep, 2024',
      totle: 100.00,
      nomberpord: 5,
    },
    {
      id: 10,
      date: '8 Oct, 2024',
      totle: 400.00,
      nomberpord: 7,
    }]
  return (
    <div>
      <div className=' h-[400px] w-[800px] rounded-xl gap-1'>
        <h1 className='text-vertt text-xl mt-4 ml-4 mb-2 font-poppins font-bold'>
        Order History
        </h1>
        <div className='w-full flex justify-center'>
        <div className='scroll-container w-[780px] max-h-[340px] overflow-auto'>
  <table className='table-fixed w-full'>
        <thead className='sticky top-0 z-10 bg-white '>
    <tr>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Order ID</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Date</div></th>
      <th><div className='flex justify-start text-gray text-xl font-poppins border-b-2 border-graay'>Total</div></th>
    </tr>
  </thead>
  <tbody>
    {Orders.map((order,index)=>(
    <tr>
      <td className='text-lg font-poppins font-normal'>#{order.id}</td>
      <td className='text-lg font-poppins font-light'>{order.date}</td>
      <td className='text-lg font-poppins font-light'>{order.totle}<span className='font-medium'>({order.nomberpord} Products)</span></td>
    </tr>))}
  </tbody>
</table>
</div>
</div>
      </div>
    </div>
  )
}

export default OrderHistory
