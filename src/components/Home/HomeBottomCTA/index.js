
import React from 'react';
import QuestionnareCTA from '../../../shared/Buttons/QuestionnareCTA';

const HomeBottomCTA = () => {


    return (
        <div className="w-full py-2 px-4 flex flex-row justify-around items-center sticky bottom-0 left-0 bg-black z-10 ">
            <div className="w-1/2">
                <p className="text-white text-xs md:text-sm font-thin transition-all duration-300">Strong AF Fitness &copy; 2024</p>
            </div>
            <div className="w-1/2 flex flex-col items-end">
                <QuestionnareCTA />
            </div>
        </div>
    )
}

export default HomeBottomCTA;