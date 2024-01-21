import React from 'react'

const BuyerSeller = () => {
  return (
    <div className=' w-full h-screen  flex items-center justify-center'>
        <div className='h-[25rem] rounded-2xl z-20 w-72 bg-gradient-to-r from-green-200 from-10% via-sky-200  border-[1px] border-black grid grid-rows-2'  >
        <div className='flex items-center justify-center'>
            <div className='h-12 w-64 z-50 shadow-2xl shadow-black rounded-t-xl bg-white text-center align-text-bottom text-2xl border-[2px] border-black '>BUYER</div>
        </div>
        <div className='mx-4 '>
            <div className='h-12 w-64 z-50 shadow-2xl shadow-black rounded-t-xl bg-white text-center  text-2xl  border-[2px] border-black '>SELLER</div>
        </div>
        </div>
    </div>
  )
}

export default BuyerSeller;