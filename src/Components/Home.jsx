import React from 'react';
import Banner from './Banner';
import Books from './Books';

const Home = () => {
    return (
        <div className='my-2 grid gap-10'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;