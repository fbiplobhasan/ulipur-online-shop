import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../../../components/CardSection/Products';
import Reviews from '../../../components/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;