import React from 'react';
import { FiInstagram } from "react-icons/fi";
import TikTokIcon from './TikTokIcon';

const Socials = () => {

    const iconColor = "#fff";
    const iconSize = 28;

    const iconClassName = "transition-all duration-300 hover:scale-110"

    const instagramIcon = (
        <a href="https://www.instagram.com/breemariebells?igsh=MTNmbXp10GpidXh5bA==" rel="noreferrer" target='_blank' className={iconClassName}>
            <FiInstagram color={iconColor} size={iconSize} />
        </a>
    )

    const tikTok = (
        <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@breannabell_?_t=8kXj1BTslxC&_r=1" className={iconClassName}>
            <TikTokIcon />
        </a>
    )

    return (
        <div className="flex flex-row w-full items-center justify-end gap-2">
            {instagramIcon}
            {tikTok}
        </div>
    )
}

export default Socials;