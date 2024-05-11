
import React from 'react'

import QuestionnareCTA from '../../../shared/Buttons/QuestionnareCTA';

import Socials from '../../../shared/Socials';

import backPose from '../../../media/Bre/back-no-bg.png'

const Header = () => {

    return (
        <div className="w-full flex flex-row items-center justify-center relative py-12 px-4 md:m-4 rounded">
            <div className="w-1/3 flex flex-col items-center justify-center gap-6">
                <h1 className="text-6xl md:text-8xl text-white font-bold  text-left sm:text-left z-10">Strong AF Fitness</h1>
                <QuestionnareCTA />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
                <img src={backPose} alt="" className="" />
            </div>
            <div className="w-1/4 absolute bottom-2 right-2">
                <Socials />
            </div>
        </div>
    )
}

export default Header;