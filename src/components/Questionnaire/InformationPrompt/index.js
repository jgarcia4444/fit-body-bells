import React from 'react';
import { connect } from 'react-redux';

import { FiUser, FiCalendar, FiInstagram, FiPhone } from 'react-icons/fi';

import TextInput from '../../../shared/inputs/TextInput';
import RadioInput from '../../../shared/inputs/RadioInput';

import updateFName from '../../../redux/actions/questions/updateFName';
import updateLName from '../../../redux/actions/questions/updateLName';
import updateAge from '../../../redux/actions/questions/updateAge';

const InformationPrompt = ({promptType, questions, updateLName, updateFName, updateAge}) => {

    const iconColor = "#fff";
    const iconSize= 20;

    const {name, age, contact} = questions;

    const questionnaireInputs = ["NAME", "AGE", "CONTACT", "TRAINER", "DURATION", "TIMES_PER_WEEK", "FOOD", "IMPROVE", "GOALS", "STRUGGLES"];

    const {fName, lName} = name;
    const {phone, instagramUsername} = contact;

    const inputWrapperStyle = "flex flex-row border-b-2 border-white pt-1 px-1";

    const namePrompts = 
    (
        <div className="flex flex-row w-full justify-evenly">
            <TextInput icon={<FiUser color={iconColor} size={iconSize} />} label="First" value={fName} changeFunc={(val) => updateFName(val.target.value)} placeholder="first name"  />
            <TextInput icon={<FiUser color={iconColor} size={iconSize} />} label="Last" value={lName} changeFunc={(val) => updateLName(val.target.value)} placeholder="last name" />
        </div>
    );

    const agePrompt = (
        <div className={inputWrapperStyle}>
            <FiCalendar color={iconColor} size={20} />
            <input className="bg-transparent ml-2" placeholder='Age' type="number" value={age} onChange={val => updateAge(val.target.value)}/>
        </div>
    )

    const contactPrompts = (
        <div className="flex flex-row w-full justify-evenly">
            <TextInput icon={<FiPhone color={iconColor} size={iconSize} />} label="Phone" value={phone} changeFunc={val => (val.target.value)} placeholder={"Phone Number"} />
            <TextInput icon={<FiInstagram color={iconColor} size={iconSize} />} label="Instagram" value={instagramUsername} changeFunc={val => (val.target.value)} placeholder={"Instagram Username"} />
        </div>
    );

    const trainerPrompt = (
        <div className="flex flex-row w-full justify-evenly">
            <RadioInput label="Have you worked with a trainer or coach before?" />
        </div>
    )

    const promptCypher = {
        "NAME": namePrompts,
        "AGE": agePrompt,
        "CONTACT": contactPrompts,
        "TRAINER": trainerPrompt,
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
        updateLName: (newVal) => dispatch(updateLName(newVal)),
        updateAge: newVal => dispatch(updateAge(newVal)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(InformationPrompt);