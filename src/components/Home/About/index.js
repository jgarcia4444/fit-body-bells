import React from 'react'

const About = () => {

    const aboutInfo = [
        "Hi, I'm so glad you've decided to take this leap towards your life and fitness goals! Please fill out the application below and let's get going! (NOTE: I do not take on clients if I feel we wouldn't be the BEST fit for each other.)",
        "There is no better time than NOW to fully invest in yourself to become the strongest & most confident version of you! And that's exactly what 1:1 coaching is. An INVESTMENT. I want to work with clients who are fully committed to themselves and this program. If you know that you are ready to do so, then LET'S GET STARTED!",
        "Once filled out, I will reach out to you for the next steps of the process, which will be a 15-minute consult call. I can't wait to work with you!!"
    ]

    const renderAboutSections = () => {
        return aboutInfo.map((aboutDetails) => {
            return (
                <div className="px-4 py-2 w-96 h-96 overflow-y-auto shadow-lg rounded-lg flex flex-col items-center justify-center border-black border-2">
                    <p className="text-lg ">{aboutDetails}</p>
                </div>
            )
        })
    };

    return (
        <div className="flex flex-row flex-wrap items-center justify-around pt-4 pb-8">
            {renderAboutSections()}
            <div className="w-full flex flex-row items-center justify-center mt-8">
                <p className="text-4xl mb-24">Let's Get Strong AF</p>
            </div>
        </div>
    )
}

export default About;