import React, {useState} from 'react';
import { connect } from 'react-redux';

import InformationPrompt from '../../components/Questionnaire/InformationPrompt';
import QuestionnaireActionButtons from '../../components/Questionnaire/QuestionnaireActionButtons';

const Questionnaire = ({questions}) => {

    const {hasTrainerBefore} = questions;

    const [questionIndex, setQuestionIndex] = useState(0);

    const inputIconSize = 24;
    const inputIconColor = "#000";

    const questionnaireInputs = ["NAME", "AGE", "CONTACT", "TRAINER", "DURATION", "TIMES_PER_WEEK", "FOOD", "IMPROVE", "GOALS", "STRUGGLES"];

    const handleNextPress = () => {
        let nextIndex = questionIndex;
        if (questionIndex === 3 &&  (hasTrainerBefore === false || hasTrainerBefore === undefined)) {
            nextIndex = nextIndex + 2;
        } else {
            nextIndex = nextIndex + 1;
        }
        setQuestionIndex(nextIndex);
    };

    const handlePreviousPress = () => {
        let previousIndex = questionIndex - 1;
        setQuestionIndex(previousIndex);
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
            <div className="w-1/2">
                <h1 className="text-3xl ">Starter Questionnaire</h1>
            </div>
            <div className="w-1/2">
                <InformationPrompt promptType={questionnaireInputs[questionIndex]} />
                <QuestionnaireActionButtons nextPress={handleNextPress} previousPress={handlePreviousPress}  />
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