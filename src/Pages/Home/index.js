import React from 'react'

import Header from '../../components/Home/Header'
import About from '../../components/Home/About';
import HomeBottomCTA from '../../components/Home/HomeBottomCTA';

const Home = () => {
    return (
        <div className="">
            <Header />
            <About />
            <HomeBottomCTA />
        </div>
    )
}

export default Home;