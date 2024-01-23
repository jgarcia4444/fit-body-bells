import React from 'react'

const Questionnaire = () => {

    const questions = [
        {titleMessage: "Hi I'm Breanna Bell, what's you name?", inputs: []},
        {titleMessage: "Age? (This helps tailor your experience)", inputs: []},
        {titleMessage: "Contact Info", inputs: []},
        {titleMessage: "Have you worked with a personal trainer or coach?", inputs: []},
        {titleMessage: "How long have you been on your fitness journey?", inputs: []},
        {titleMessage: "", inputs: []},
        {titleMessage: "", inputs: []},
        {titleMessage: "", inputs: []},
        {titleMessage: "", inputs: []},
        {titleMessage: "", inputs: []}
    ]

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
            <h1 className="text-3xl ">Starter Questionnaire</h1>
            <QuestionCard />
        </div>
    )
}

export default Questionnaire;