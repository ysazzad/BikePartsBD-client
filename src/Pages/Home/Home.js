import React from 'react';
import Review from '../Dashboard/Review';
import AllReview from './AllReview';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import Extra from './Extra';
import Parts from './Parts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra></Extra>
            <Parts></Parts>
            <Summary></Summary>
            <ChooseUs></ChooseUs>
            <AllReview></AllReview>
        </div>
    );
};

export default Home;