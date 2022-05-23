import React from 'react';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import Extra from './Extra';
import Parts from './Parts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Extra></Extra>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;