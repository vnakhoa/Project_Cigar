import React from 'react';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Shipping from './component_Home/Shipping';
import TopCategori from './component_Home/TopCategori';
import DealOfWeek from './component_Home/DealOfWeek';
import BannerArea from './component_Home/BannerArea';
import ProductArea from './component_Home/ProductArea';
import ConsoleGame from './component_Home/ConsoleGame';
import CameraPhoto from './component_Home/CameraPhoto';
import CustomProduct from './component_Home/CustomProduct';
import Footer from '../component/Footer';
import Newsletter from '../component/Newsletter';

function Home() {
  return (
    <>
        <Header />

        <Slider></Slider>
        <Shipping />
        <TopCategori />
        <DealOfWeek />
        <BannerArea />
        <ProductArea />
        <ConsoleGame />
        <CameraPhoto />
        <CustomProduct />

        <Newsletter />
        <Footer />
    </>
  )
}

export default Home;