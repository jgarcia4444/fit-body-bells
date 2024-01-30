import React from 'react';
import { connect } from 'react-redux';

import { FiUser } from 'react-icons/fi';

import TextInput from '../../../shared/inputs/TextInput';

import updateFName from '../../../redux/actions/questions/updateFName';
import updateLName from '../../../redux/actions/questions/updateLName';

const InformationPrompt = ({promptType, questions, updateLName, updateFName}) => {

    const iconColor = "#fff";
    const iconSize= 20;

    const {name} = questions;

    const questionnaireInputs = ["NAME", "AGE", "CONTACT", "TRAINER", "DURATION", "TIMES_PER_WEEK", "FOOD", "IMPROVE", "GOALS", "STRUGGLES"];

    const {fName, lName} = name;
    const namePrompts = 
    (
        <div className="flex flex-row w-full justify-evenly">
            <TextInput icon={<FiUser color={iconColor} size={iconSize} />} label="First" value={fName} changeFunc={(val) => updateFName(val.target.value)} placeholder="first name"  />
            <TextInput icon={<FiUser color={iconColor} size={iconSize} />} label="Last" value={lName} changeFunc={(val) => updateLName(val.target.value)} placeholder="last name" />
        </div>
    )

    const promptCypher = {
        "NAME": namePrompts,
    };

    
    

    const renderPrompt = () => {
        return promptCypher[promptType];
    }

    return (
        <div className="text-white w-full border-2 border-white rounded-lg px-2 py-10 flex flex-row justify-center">
            {renderPrompt()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFName: (newVal) => dispatch(updateFName(newVal)),
        updateLName: (newVal) => dispatch(updateLName(newVal))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(InformationPrompt);