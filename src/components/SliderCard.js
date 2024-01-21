import React from 'react'
import sl1 from '../Assets/sl1.jpg'

const SliderCard = () => {
  return (
    <div>
        <div className='h-full w-full rounded-2xl  '><div className='w-full h-[14rem]  rounded-2xl'><img className='border-[2px] z-30 border-black rounded-2xl' src={sl1}/></div><div className='w-full h-full  grid grid-cols-2'>
            <div className='  h-[3rem] mx-4 text-center rounded-2xl border-2 mt-2 w-[10rem] border-black'><h1 className='mt-2' >Apple</h1></div>
            <div className=' grid-rows-2 '>
                <div>$ 20</div>
                <div className='border-[1px] border-black mx-14 mt-2 shadow-2xl  w-[7rem] rounded-2xl  shadow-black cursor-pointer'>Add to Cart</div>
            </div>
            </div></div>
    </div>
  )
}

export default SliderCard;