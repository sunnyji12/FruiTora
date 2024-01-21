import React from 'react'
import fruitBasket from '../Assets/fruitBasket.png';
import f1 from  '../Assets/f1.png';
import f2 from '../Assets/f2.png';
import f9 from '../Assets/f9.png';
import flogo from '../Assets/flogo.png';
import tlogo from '../Assets/tlogo.png';

const LandingPage = () => {
  return (
    <div className='landing-page-container bg-white'>
        
    <div className='name-container  '>
        <div className=' mt-[50px]   web-name-container'>
            <img src={tlogo}/>
            <h2 className='bottom-name-text mx-[-5rem] mt-[3rem] '>rui</h2>
            {/* <img className='h-[15rem] w-[15rem]' src={flogo}/> */}
            <h1 className=' text-green-900 mx-[70px] mt-[50px]'>T</h1>
            <h2 className='bottom-name-text mx-[-5rem] mt-[3rem] '>ora</h2> 
        </div>

        <div className='mt-[-30px]  text-[30px] slogan-div'>
            <h1 className='slogan-text mx-[13rem] w-full'>Fresh Your Mood With Fresh Fruits</h1>
            
        </div>

        <div className='grid grid-cols-3 h-[150px] mt-[50px] mx-[11rem] w-full  '>
          <div  className='neumorphism h-[120px] w-[120px]  rounded-2xl self-center mx-10  '><img className='h-[120px]  ' src={f2}/></div>
          <div className='neumorphism h-[120px] w-[120px]  rounded-2xl self-center mx-10 '><img className='h-[120px]' src={f1}/></div>
          <div className='neumorphism h-[120px] w-[120px]  rounded-2xl self-center mx-10'><img className='h-[120px]' src={f9}/></div>
          
        </div>

    {/* <button className='h-[2.5rem] mt-[50px] w-auto rounded-[8px] text-center mx-[320px]  border-[1px] z-5 shadow-lg shadow-black border-black  font-bold'>BUY NOW</button> */}

    </div>
    <div className='image-container'><img className='landing-page-fruit-image mx-[5rem]  h-[28rem] ' src={fruitBasket} alt="BigCo Inc. logo"/> </div>


    </div>
  )
}

export default LandingPage;