import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import FruitsList from './FruitsList';
import Footer from './Footer'
import ChoiseSection from './ChoiseSection';
import Imagecarousel from './Imagecarousel';
import Slider from './Slider';
import FruitsCard from './FruitsCard';
import ProductCard from './ProductCard';
import BuyerSeller from './BuyerSeller';
import SignIn from './SignIn';
import LogIn from './LogIn';

const Home = () => {
  return (
    <div className='home-container bg-white'>
        <Navbar/>
        <LandingPage/>
        <Imagecarousel/>
        <div className='text-5xl mb-5 bg-white text-center'>Fruits</div>
        <FruitsCard/>
        <Slider/>
        <Footer/>
    </div>
  )
};
export default Home;