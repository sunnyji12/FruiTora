import React from 'react'
import ProductCard from './ProductCard';
import f5 from '../Assets/f5.png'
import f10 from '../Assets/f10.png'
import f2 from '../Assets/f2.png'
import f3 from '../Assets/f3.png'
import f8 from '../Assets/f8.png'
import f6 from '../Assets/f6.png'
import f7 from '../Assets/f7.png'
import f9 from '../Assets/f9.png'

const FruitsCard = () => {
  return (
    <div className='h-screen w-full bg-white grid grid-row-2 px-20'>
        <div className=' grid grid-cols-4 justify-between'>
            <div > 
            <ProductCard Image={f5} Name="Strawberry" Price={20}/>
            </div>
            <div><ProductCard Image={f10} Name="Strawberry" Price={20}/></div>
            <div ><ProductCard Image={f2} Name="Strawberry" Price={20}/></div>
            <div ><ProductCard Image={f3} Name="Strawberry" Price={20}/></div>
        </div>
        <div className='  grid grid-cols-4'>
            <div><ProductCard Image={f8} Name="Strawberry" Price={20}/></div>
            <div><ProductCard Image={f6} Name="Strawberry" Price={20}/></div>
            <div ><ProductCard Image={f7} Name="Strawberry" Price={20}/></div>
            <div><ProductCard Image={f9} Name="Strawberry" Price={20}/></div>
        </div>
        
    </div>
  )
}

export default FruitsCard;