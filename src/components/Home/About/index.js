import React from 'react'

const About = () => {

    const aboutInfo = [
        "Hi, I'm so glad you've decided to take this leap towards your life and fitness goals! Please fill out the application below and let's get going! (NOTE: I do not take on clients if I feel we wouldn't be the BEST fit for each other.)",
        "There is no better time than NOW to fully invest in yourself to become the strongest & most confident version of you! And that's exactly what 1:1 coaching is. An INVESTMENT. I want to work with clients who are fully committed to themselves and this program. If you know that you are ready to do so, then LET'S GET STARTED!",
        "Once filled out, I will reach out to you for the next steps of the process, which will be a 15-minute consult call. I can't wait to work with you!!"
    ]

    const renderAboutSections = () => {
        return aboutInfo.map((aboutDetails, i) => {
            return (
                <div key={`about details-${i}`} className=" px-2 py-2 w-full  md:w-60 h-48 md:h-96 lg:w-80 lg:h-60 xl:w-96 overflow-y-auto shadow-xl md:rounded-lg flex flex-col items-center justify-center md:justify-start bg-black my-2 md:my-0 transition-all duration-300">
                    <p className="text-white font-sans font-thin ">{aboutDetails}</p>
                </div>
            )
        })
    };

    return (
        <div className="flex flex-row flex-wrap items-center justify-around pt-4 pb-8 w-full ">
            {renderAboutSections()}
            <div className="w-full flex flex-row items-center justify-center mt-8">
                <p className="text-4xl mb-24">Let's Get Strong AF</p>
            </div>
        </div>
    )
}

export default About;