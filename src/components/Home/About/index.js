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
                <div key={`about details-${i}`} className=" px-4 py-2 w-full  md:w-1/3  overflow-y-auto md:rounded-lg flex flex-col items-center justify-center md:justify-start my-2 md:my-0 transition-all duration-300 ">
                    <p className="text-white font-sans font-thin text-lg md:text-lg ">{aboutDetails}</p>
                </div>
            )
        })
    };

    return (
        <div className="flex flex-row flex-wrap items-start justify-around py-8 w-full mb-24 md:m-4 md:mb-12 rounded">
            <div className="w-full px-4 flex flex-row mt-8 ">
                <p className="text-4xl text-white text-left">Let's Get Strong AF</p>
            </div>
            {renderAboutSections()}
        </div>
    )
}

export default About;