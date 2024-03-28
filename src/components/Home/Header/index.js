
import React from 'react'

import Socials from '../../../shared/Socials';

const Header = () => {

    return (
        <div className="w-full flex flex-col justify-center relative py-12 px-4 border-2 border-white  md:m-4 rounded">
            <div className="w-full py-2">
                <h1 className="text-6xl text-white font-bold font-serif text-left sm:text-left">Strong AF Fitness</h1>
            </div>
            <div className="w-1/4 absolute bottom-2 right-2">
                <Socials />
            </div>
        </div>
    )
}

export default Header;