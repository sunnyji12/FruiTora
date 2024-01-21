import React from 'react'
import chef1 from '../Assets/chef1.png'
import searchIcon from '../Assets/searchIcon.png'
import SignIn from './SignIn'





const Navbar = () => {
  return (
    <div className='nav-container h-[45px] bg-fixed  bg-slate-300'>
      <div>
        <img  className='h-10  mx-5' src={chef1}/>
      </div>

      <div  className='  h-10 w-[25rem] border-2 rounded-xl flex border-black'>
        <div><img className='h-9 w-[2.3rem] bg-white rounded-l-xl  ' src={searchIcon}/></div>
       <div className=' h-10  w-[22.7rem]  '><input className='w-[22.7rem] h-9 rounded-r-xl' type='text' placeholder='Search Your Fav Fruit'></input></div>
        
      </div>


      <div className='nav-container-home mr-6 '>
        <h4 className='cursor-pointer hover:text-[#02652A] '>Home</h4>
        <h4 className='cursor-pointer hover:text-[#02652A] '>About</h4>
        <h4 className='cursor-pointer hover:text-[#02652A] '>Contact</h4>
        <h4 className='cursor-pointer hover:text-[#02652A] '>Product</h4>
        <h4 className='cursor-pointer border-[1px] border-black rounded-xl h-8 w-16 text-center hover:bg-[#02652A] hover:text-white '>LogIn</h4>
      </div>

     


    </div>
  
  )
}

export default Navbar;