import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../../../components/CardSection/Products';
import Reviews from '../../../components/Reviews/Reviews';
import MovingSec from '../../../components/Maquee/MovingSec';
import Featured from '../../../components/Featured/Featured';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
               <title>UOS | Home</title> 
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
            <Products></Products>
            {/* <Reviews></Reviews>
            <Featured></Featured> */}
            <MovingSec></MovingSec>
        </div>
    );
};

export default Home;