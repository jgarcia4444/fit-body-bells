
import React from 'react';

const TextInput = ({icon, value, changeFunc, placeholder}) => {

    return (
        <div className="flex flex-row border-b-2 border-white bg-white bg-opacity-10 p-1 items-start">
            {icon}
            <input placeholder={placeholder} className="bg-transparent text-white" value={value} type="text" onChange={changeFunc} />
        </div>
    )
}

export default TextInput;