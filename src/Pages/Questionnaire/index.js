import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import InformationPrompt from '../../components/Questionnaire/InformationPrompt';
import QuestionnaireActionButtons from '../../components/Questionnaire/QuestionnaireActionButtons';

import submitQuestionnaire from '../../redux/actions/questionnaire/submitQuestionnaire';

const Questionnaire = ({questions, submitQuestionnaire}) => {

    const {hasTrainerBefore, formSubmitted, name, age, contact, trainerDuration, sessionsPerWeek, foodRelation, areasOfImprovement, goals, struggles} = questions;
    const {fName, lName} = name;
    const {phone, instagramUsername} = contact;
    const {timeUnit, duration} = trainerDuration;

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

    const nameInfo = {key: "NAME", values: [fName, lName]};
    const ageInfo = {key: "AGE", values: [age]};
    const contactInfo = {key: "CONTACT", values: [phone, instagramUsername]};
    const trainerInfo = {key: "TRAINER", values: [hasTrainerBefore]};
    const durationInfo = {key: "DURATION", values: [timeUnit, duration]};
    const frequencyInfo = {key: "TIMES_PER_WEEK", values: [sessionsPerWeek]};
    const foodInfo = {key: "FOOD", values: [foodRelation]};
    const improvementInfo = {key: "IMPROVE", values: [areasOfImprovement]};
    const goalsInfo = {key: "GOALS", values: [goals]};
    const strugglesInfo = {key: "STRUGGLES", values: [struggles]}

    const questionnaireInputs = [nameInfo, ageInfo, contactInfo, trainerInfo, durationInfo, frequencyInfo, foodInfo, improvementInfo, goalsInfo, strugglesInfo];

    const checkValues = values => {
        console.log("Here are the values checked", values);
        let valuesPresent = true;
        values.forEach(promptValue => {
            if (promptValue === "") {
                valuesPresent = false;
            }
        });
        return valuesPresent;
    };

    const handleNextPress = () => {
        let nextIndex = questionIndex;
        if (checkValues(questionnaireInputs[questionIndex].values) === true) {
            if (nextIndex !== questionnaireInputs.length - 1) {
                if ((questionIndex === 3) && (hasTrainerBefore === false)) {
                    nextIndex = nextIndex + 3;
                } else {
                    nextIndex = nextIndex + 1;
                    if (nextIndex === questionnaireInputs.length - 1) {
                        setShowSubmit(true);
                    }
                }
                setQuestionIndex(nextIndex);
            } else {
                submitQuestionnaire(questions);
            }
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

    useEffect(() => {

    },[])

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            {formSubmitted === false ?
            (
                <div className="w-full flex flex-col items-center">
                    <div className="w-2/3">
                        <h1 className="text-3xl ">Starter Questionnaire</h1>
                    </div>
                    <div className="w-2/3">
                        <InformationPrompt label={labels[questionIndex]} promptType={questionnaireInputs[questionIndex].key} />
                        <QuestionnaireActionButtons showSubmit={showSubmit} nextPress={handleNextPress} previousPress={handlePreviousPress}  />
                    </div>
                </div>
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