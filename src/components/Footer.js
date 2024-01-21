import React from 'react'
import logo1 from '../Assets/logo1.png';
import facebooklogo from '../Assets/facebooklogo.png';
import twitterlogo from '../Assets/twitterlogo.png';
import youtubelogo from '../Assets/youtubeLogo.png';
import linkedinlogo from '../Assets/linkedinlogo.png';
import instagramlogo from '../Assets/instagramlogo.png';
import ios from '../Assets/ios.png';
import android from '../Assets/android.png';
import languageLogo from '../Assets/LanguageLogo.png';
import indianFlag from '../Assets/indianFlag.png';


const Footer = () => {
  return (
    <div class="h-screen/2  mt-5">
        
        <div className='bg-gray-200'>
            <div className='flex justify-between '>
                <div>
                    <img className='h-[10rem] mx-[3rem] ' src={logo1}/>
                </div>
                
                <div>{/* FOR THE 3RD DIV TO MAINTAIN THE INDIAN AND LOGO*/}</div>
                <div className=' w-[20rem] flex items-center gap-x-2  justify-center '>
                    <div className='bg-white border-[1px] border-black h-[3rem] w-[8rem] text-center text-xl rounded-xl flex'>
                        <img className='h-6 m-1' src={indianFlag}/>India</div>
                    <div className='bg-white h-[3rem] border-[1px] border-black w-[8rem] text-center text-xl rounded-xl flex'>
                    <img className='h-6 m-1' src={languageLogo}/>English</div>
                </div>
            </div>

            <div className='h-full   grid grid-cols-5 '>
                <div className=''>
                    <div className=' text-center font-semibold'>ABOUT FRUITORA</div>
                   <div className='space-y-2 mt-3 mx-[5rem]'>
                   <div className=''>Who we are</div>
                    <div className=''>Blog</div>
                    <div className=''>Work With Us</div>
                    <div className=''>Report Fraud</div>
                    <div className=''>Contact Us</div>
                    
                   </div>
                </div>
                <div className=''>
                    <div className=' mx-[5rem] font-semibold'>FRUITVERSE</div>
                    <div  className='space-y-2 mt-3 mx-[5rem]' >
                    <div>FruiTora</div>
                    <div>Zomato</div>
                    <div>BlinKit</div>
                    <div>Feeding India</div>
                    </div>
                </div>
                <div className=''>
                <div className=' text-center  font-semibold'>FOR SHOPKEEPERS</div>
                        <div  className='space-y-2 mt-3 mx-[5rem]'>
                            <div>Be Shopkeeper</div>
                            <div >Partner With Us</div>
                            
                        </div>
                </div>
                <div className=''>
                <div className=' mx-[5rem] font-semibold'>LEARN MORE</div>
                <div className='space-y-2 mt-3 mx-[5rem]'>
                    <div>Privacy</div>
                    <div>Secuirity</div>
                    <div>Terms</div>
                    <div>SiteMap</div>
                </div>
                </div>
                <div className=''>
                <div className=' text-center font-semibold'>SOCIAL LINKS</div>
                <div className='w-full grid grid-cols-7  h-10'>
                    <div ></div>
                    <div ><img className='h-8 mt-2  items-center' src={instagramlogo}/></div>
                    <div ><img className='h-8 mt-2 items-center' src={facebooklogo}/></div>
                    <div ><img className='h-8 mt-2 items-center' src={twitterlogo}/></div>
                    <div ><img className='h-8 mt-2 items-center' src={youtubelogo}/></div>
                    <div ><img className='h-8 mt-2 items-center' src={linkedinlogo}/></div>
                    <div ></div>
                </div>

                <div className='h-auto w-full mt-[3rem]'>
                <div><img className='h-[3rem] mx-[3rem]' src={ios}/></div>
                <div><img className='h-[8rem] mt-[-2rem] mx-[3rem]' src={android}/></div>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}


export default Footer