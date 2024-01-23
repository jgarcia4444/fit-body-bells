import React, {useState} from 'react';
import InformationPrompt from '../../components/Questionnaire/InformationPrompt';

const Questionnaire = () => {

    const [questionIndex, setQuestionIndex] = useState(0);

    const inputIconSize = 24;
    const inputIconColor = "#000";

    const questions = [
        {
            titleMessage: "Hi I'm Breanna Bell, what's you name?", 
            inputs: [
                {
                    label: "First", 
                    placeholder: "first name" , 
                    icon: "", 
                    value: "", 
                    type: "text"
                }, 
                {
                    label: "Last", 
                    placeholder: "last name" , 
                    icon: "", 
                    value: "", 
                    type: "text"
                }
            ]
        },
        {
            titleMessage: "Age? (This helps tailor your experience)", 
            inputs: [
                {
                    label: "Age", 
                    placeholder: "Age" , 
                    icon: "", 
                    value: "", 
                    type: "number"
                }
            ]
        },
        {
            titleMessage: "Contact Info", 
            inputs: [
                {
                    label: "Instagram", 
                    placeholder: "username" , 
                    icon: "", 
                    value: "", 
                    type: "text"
                },
                {
                    label: "Phone", 
                    placeholder: "phone number" , 
                    icon: "", 
                    value: "", 
                    type: "text"
                }
            ]
        },
        {
            titleMessage: "Have you worked with a personal trainer or coach?", 
            inputs: [{label: "If yes, to what capacity?", placeholder: "message" , icon: "", value: "", type: "text"},]
        },
        {
            titleMessage: "How long have you been on your fitness journey?", 
            inputs: [{label: "", placeholder: "Write your answer here..." , icon: "", value: "", type: "text"}]
        },
        {
            titleMessage: "How many times a week do you exercise?", 
            inputs: [{label: "Days per Week", placeholder: "How many days do you exercise?" , icon: "", value: "", type: "text"}]
        },
        {
            titleMessage: "Food", 
            inputs: [{label: "What is you relationship with Food?", placeholder: "message" , icon: "", value: "", type: "text"}]
        },
        {
            titleMessage: "Improvement", 
            inputs: [{label: "What would you like to improve?", placeholder: "message" , icon: "", value: "", type: "text"}]
        },
        {
            titleMessage: "", 
            inputs: [{label: "", placeholder: "" , icon: "", value: "", type: ""}]
        },
        {
            titleMessage: "", 
            inputs: [
                {label: "", placeholder: "" , icon: "", value: "", type: ""}
            ]
        }
    ]

    const questionnaireInputs = ["NAME", "AGE", "CONTACT", "TRAINER", "DURATION", "TIMES_PER_WEEK", "FOOD", "IMPROVE", "GOALS", "STRUGGLES"];

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
            <h1 className="text-3xl ">Starter Questionnaire</h1>
            <InformationPrompt promptType={""} />
        </div>
    )
}

export default Questionnaire;