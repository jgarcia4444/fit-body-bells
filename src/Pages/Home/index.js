import React, {useState, useEffect} from 'react'

import Header from '../../components/Home/Header'
import About from '../../components/Home/About';
import HomeBottomCTA from '../../components/Home/HomeBottomCTA';

const Home = () => {

    const [viewOpacity, setViewOpacity] = useState("opacity-0")


    useEffect(() => {
        setTimeout(() => {
            setViewOpacity("opacity-100")
        }, 200);
    },[])

    return (
        <div className={`h-full w-full flex flex-row flex-wrap items-center justify-center duration-1000 transition-all overflow-y-auto ${viewOpacity} relative`}>
            <Header />
            <About />
            <HomeBottomCTA />
        </div>
    )
}

export default Home;