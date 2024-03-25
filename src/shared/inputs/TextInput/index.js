
import React from 'react';

const TextInput = ({icon, value, changeFunc, placeholder, label="", extraClassName="w-2/5"}) => {

    const computedType = () => {
        switch(label) {
            case "Phone":
                return "tel";
            case "Instagram":
                return "email";
            default:
                return "text";
        }
    }
    return (
        <div className={`flex flex-row border-b-2 border-white pt-1 px-1 items-start mb-2 w-full md:w-2/5 md:${extraClassName} transition-all duration-300`}> 
            {icon}
            <input placeholder={placeholder} className="bg-transparent text-white ml-2 w-full" value={value} type={computedType()} onChange={changeFunc} />
        </div>
    )
}

export default TextInput;