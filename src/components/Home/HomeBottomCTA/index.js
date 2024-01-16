
import React from 'react';
import QuestionnareCTA from '../../../shared/Buttons/QuestionnareCTA';

const HomeBottomCTA = () => {

    return (
        <div className="w-full py-6 px-4 bg-black flex flex-row justify-around items-center absolute bottom-0 left-0">
            <div className="w-1/2">
                <p className="text-white">I like to get to know what goals & struggles you have to better help you achieve those goals.</p>
            </div>
            <div className="w-1/2 flex flex-col items-center">
                <QuestionnareCTA />
            </div>
        </div>
    )
}

export default HomeBottomCTA;