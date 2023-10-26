import React from 'react';
import Hero from '../../components/Hero/Hero';
import Chefs from '../../components/chefs';
import Tabs from '../../components/Tabs';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <>
        <Hero></Hero>
        <Chefs></Chefs>
        <Tabs></Tabs>
        <Slider></Slider>
        </>
    );
};

export default Home;