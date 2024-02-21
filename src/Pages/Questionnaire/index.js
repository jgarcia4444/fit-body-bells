import React, {useState} from 'react';
import { connect } from 'react-redux';

import InformationPrompt from '../../components/Questionnaire/InformationPrompt';
import QuestionnaireActionButtons from '../../components/Questionnaire/QuestionnaireActionButtons';

import submitQuestionnaire from '../../redux/actions/questionnaire/submitQuestionnaire';

const Questionnaire = ({questions, submitQuestionnaire}) => {

    const {hasTrainerBefore, formSubmitted} = questions;

    const [questionIndex, setQuestionIndex] = useState(0);
    const [showSubmit, setShowSubmit] = useState(false);

    const labels = [
        "Hi i'm Breanna, what is your name?",
        "How old are you? This will help me tailor a workout plan specifically for you.",
        "Contact info? So we can communicate through this process.",
        "Have you worked with a trainer or coach before?",
        "How long did you work with them?",
        "How many times a week did you exercise?",
        "What is your relationship with food like?",
        "What areas of your fitness would you like to improve?",
        "What are your goals?",
        "What do you struggle with?",
    ];

    const questionnaireInputs = ["NAME", "AGE", "CONTACT", "TRAINER", "DURATION", "TIMES_PER_WEEK", "FOOD", "IMPROVE", "GOALS", "STRUGGLES"];

    const handleNextPress = () => {
        let nextIndex = questionIndex;
        if (nextIndex !== questionnaireInputs.length - 1) {
            if (questionIndex === 3 &&  (hasTrainerBefore === false || hasTrainerBefore === undefined)) {
                nextIndex = nextIndex + 2;
            } else {
                nextIndex = nextIndex + 1;
                if (nextIndex === questionnaireInputs.length - 1) {
                    setShowSubmit(true);
                }
            }
            setQuestionIndex(nextIndex);
        } else {
            // submit the form 
            console.log(questions);
            submitQuestionnaire(questions);
        }
    };

    const handlePreviousPress = () => {
        if (questionIndex !== 0) {
            if (questionIndex === questionnaireInputs.length - 1) {
                setShowSubmit(false);
            }
            let previousIndex = questionIndex - 1;
            if (questionIndex === 5) {
                if (hasTrainerBefore === false || hasTrainerBefore === undefined) {
                    previousIndex -= 1;
                }
            }
            setQuestionIndex(previousIndex);
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
            {formSubmitted === false ?
            (
                <>
                    <div className="w-1/2">
                    <h1 className="text-3xl ">Starter Questionnaire</h1>
                    </div>
                    <div className="w-1/2">
                        <InformationPrompt label={labels[questionIndex]} promptType={questionnaireInputs[questionIndex]} />
                        <QuestionnaireActionButtons showSubmit={showSubmit} nextPress={handleNextPress} previousPress={handlePreviousPress}  />
                    </div>
                </>
            )
            :
            (
                <>
                    <h3 className="text-white text-2xl font-bold">Thanks for Completing the Form</h3>
                    <p className="text-white">Look out for a confirmation email that this form was received. I will be in contact with you as soon as possible.</p>
                </>
            )
            }
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitQuestionnaire: info => dispatch(submitQuestionnaire(info)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Questionnaire);