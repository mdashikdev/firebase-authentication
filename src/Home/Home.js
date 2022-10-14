import React from 'react';
import Hotel from '../Hotel/Hotel'

const Home = () => {
    return (
        <div className='w-full mt-11 flex gap-3'>
            <Hotel/>
            <Hotel/>
            <Hotel/>
        </div>
    );
};

export default Home;