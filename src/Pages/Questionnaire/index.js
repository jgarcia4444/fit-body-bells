import React, {useState} from 'react';
import { connect } from 'react-redux';

import InformationPrompt from '../../components/Questionnaire/InformationPrompt';
import QuestionnaireActionButtons from '../../components/Questionnaire/QuestionnaireActionButtons';

const Questionnaire = ({questions}) => {

    const {hasTrainerBefore} = questions;

    const [questionIndex, setQuestionIndex] = useState(0);
    const [showSubmit, setShowSubmit] = useState(false);

    const inputIconSize = 24;
    const inputIconColor = "#000";

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
        }
    };

    const handlePreviousPress = () => {
        if (questionIndex !== 0) {
            if (questionIndex === questionnaireInputs.length - 1) {
                setShowSubmit(false);
            }
            let previousIndex = questionIndex - 1;
            setQuestionIndex(previousIndex);
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
            <div className="w-1/2">
                <h1 className="text-3xl ">Starter Questionnaire</h1>
            </div>
            <div className="w-1/2">
                <InformationPrompt promptType={questionnaireInputs[questionIndex]} />
                <QuestionnaireActionButtons showSubmit={showSubmit} nextPress={handleNextPress} previousPress={handlePreviousPress}  />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

export default connect(
    mapStateToProps,
    null
)(Questionnaire);