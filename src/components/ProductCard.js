import React from 'react'
import f5 from '../Assets/f5.png'
import plusIcon from '../Assets/plusIcon.png';

const ProductCard = ({ Image, Name, Price }) => {
  return (
    <div>
      <div className='h-[15rem] w-[13rem] border-[1px] border-black rounded-2xl mx-16'>
        <div>
          <img className='h-[10rem]' src={Image} alt={Name} />
        </div>
        <div className='text-xl font-serif text-center'>{Name}</div>
        <div className='text-xl font-serif text-center'>${Price}</div>
        <div className='w-8 h-8 rounded-full cursor-pointer bg-red-200 overflow-visible mx-[10rem] m-[-1rem]'>
          {/* Assuming plusIcon is an image */}
          <img src={plusIcon} alt="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
