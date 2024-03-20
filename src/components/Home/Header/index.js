
import React from 'react'

import Socials from '../../../shared/Socials';

const Header = () => {

    return (
        <div className="h-56 w-full flex flex-col justify-center relative ">
            <div className="w-full">
                <h1 className="text-6xl font-bold font-serif text-left sm:text-left">Strong AF Fitness</h1>
            </div>
            <div className="w-1/4 absolute bottom-2 right-2">
                <Socials />
            </div>
        </div>
    )
}

export default Header;