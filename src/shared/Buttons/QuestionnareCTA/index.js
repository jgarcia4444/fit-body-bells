
import React from 'react';

import { Link } from 'react-router-dom';

const QuestionnareCTA = () => {

    return (
        
            <Link to="info-form" className="text-xs md:text-sm text-center font-bold w-1/2 py-1 rounded bg-yellow-300 hover:cursor-pointer transition-all duration-300 animate-pulse hover:animate-none hover:scale-105 hover:bg-yellow-400">
                    Start Your Journey!
            </Link>
    )
};

export default QuestionnareCTA;