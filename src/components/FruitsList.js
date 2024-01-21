import React from 'react';
import NearestStore1 from '../Assets/NearestStore1.jpg'
import dryfruits1 from '../Assets/dryfruits1.jpg';
import Biggestoffer from '../Assets/BiggestOffer.jpg';
import SeasonalFruits from '../Assets/SeasonalFruits.png'
const FruitsList = () => {
  return (
    <div className='h-screen/2 w-full mb-12 '>
        <div className=' grid grid-cols-4'>
          <div ><div className='border-[1px] border-black w-[15rem] mx-4 mt-[3rem]  newmorphismTwo'>
            <div className='text-center font-semibold'>Nearest Store</div>
            <div className=''><img className='h-[15rem] mx-9 rounded-xl border-[1px] border-black z-10  shadow-xl shadow-gray-600 cursor-pointer' src={NearestStore1}/></div>
            <div className='text-center font-semibold'>Explore</div>
          </div></div>
          <div ><div className='border-[1px] border-black mt-[3rem] w-[15rem] newmorphismTwo'>
          <div className='text-center font-semibold'>Biggest Offer</div>
            <div className=''><img className='h-[15rem] mx-9 rounded-xl border-[1px] border-black z-10  shadow-xl shadow-gray-600 cursor-pointer' src={Biggestoffer}/></div>
            <div className='text-center font-semibold'>Grab Now</div></div></div>
          <div ><div className='border-[1px] border-black mt-[3rem] w-[15rem] newmorphismTwo'> 
          <div className='text-center font-semibold'>Seasonal Fruits</div>
            <div className=''><img className='h-[15rem] mx-6 rounded-xl border-[1px] border-black z-10  shadow-xl shadow-gray-600 cursor-pointer' src={SeasonalFruits}  /></div>
            <div className='text-center font-semibold'>Be Healthy</div></div></div>
          <div ><div className='border-[1px] border-black mt-[3rem] w-[15rem] newmorphismTwo'>
          <div className='text-center font-semibold'>Dry Fruits</div>
            <div className=''><img className='h-[15rem] mx-9 rounded-xl border-[1px] border-black z-10  shadow-xl shadow-gray-600 cursor-pointer' src={dryfruits1}/></div>
            <div className='text-center font-semibold'> Be Energetic</div>
            </div></div>
        </div>

      {/*This is for the fruit carousel/slider section */}
        <div className='bg-green-400 '>




          
        </div>
    </div>
  )
}

export default FruitsList;