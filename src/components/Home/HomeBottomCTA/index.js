
import React from 'react';
import QuestionnareCTA from '../../../shared/Buttons/QuestionnareCTA';

const HomeBottomCTA = () => {


    return (
        <div className="w-full py-2 px-4 flex flex-row justify-around items-center fixed bottom-0 left-0 bg-white border-black border-t-2">
            <div className="w-1/2">
                <p className="text-sm font-bold">I like to get to know what goals & struggles you have to better help you achieve those goals.</p>
            </div>
            <div className="w-1/2 flex flex-col items-center">
                <QuestionnareCTA />
            </div>
        </div>
    )
}

export default HomeBottomCTA;