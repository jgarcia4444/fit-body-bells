
import React from 'react';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const QuestionnaireActionButtons = ({nextPress, previousPress, showSubmit}) => {

    const iconColor = "#000";
    const iconSize = 20

    const iconButtonStyle = `p-2 bg-white rounded-full hover:scale-110 hover:bg-yellow-500 hover:cursor-pointer hover:shadow-black hover:shadow active:shadow-none transition-all duration-300`

    const nextButton = (
        <div onClick={nextPress} className={iconButtonStyle}>
            {showSubmit === true ?
                <p className="text-white font-bold">Submit</p>
                :
                <FiArrowRight size={iconSize} color={iconColor}  />
            }
        </div>

    )

    const previousButton = (
        <div onClick={previousPress} className={iconButtonStyle}>
            <FiArrowLeft size={iconSize} color={iconColor} />
        </div>
    ) 

    return (
        <div className=" flex flex-row justify-end gap-2 mt-1">
            {previousButton}
            {nextButton}
        </div>
    )
}

export default QuestionnaireActionButtons;