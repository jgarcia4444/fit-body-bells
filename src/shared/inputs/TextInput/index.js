
import React from 'react';

const TextInput = ({icon, value, changeFunc, placeholder, label=""}) => {

    const computedType = () => {
        switch(label) {
            case "Phone":
                return "tel";
            default:
                return "text"
        }
    }

    return (
        <div className="flex flex-row border-b-2 border-white pt-1 px-1 items-start">
            {icon}
            <input placeholder={placeholder} className="bg-transparent text-white ml-2" value={value} type={computedType()} onChange={changeFunc} />
        </div>
    )
}

export default TextInput;