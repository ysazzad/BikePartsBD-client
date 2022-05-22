import React from 'react';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import Extra from './Extra';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Extra></Extra>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;