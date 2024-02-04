import React from 'react';
import { connect } from 'react-redux';

import { FiUser, FiCalendar, FiInstagram, FiPhone, FiSmile } from 'react-icons/fi';

import TextInput from '../../../shared/inputs/TextInput';
import RadioInput from '../../../shared/inputs/RadioInput';
import SelectInput from '../../../shared/inputs/SelectInput';

import updateFName from '../../../redux/actions/questions/updateFName';
import updateLName from '../../../redux/actions/questions/updateLName';
import updateAge from '../../../redux/actions/questions/updateAge';
import updateDuration from '../../../redux/actions/questions/updateDuration';
import updateSessionsPerWeek from '../../../redux/actions/questions/updateSessionsPerWeek';

const InformationPrompt = ({promptType, questions, updateLName, updateFName, updateAge, updateDuration, updateSessionsPerWeek, updateFoodRelation}) => {

    const iconColor = "#fff";
    const iconSize= 20;

    const {name, age, contact, trainerDuration, sessionsPerWeek, foodRelation} = questions;

    const questionnaireInputs = ["NAME", "AGE", "CONTACT", "TRAINER", "DURATION", "TIMES_PER_WEEK", "FOOD", "IMPROVE", "GOALS", "STRUGGLES"];

    const {fName, lName} = name;
    const {phone, instagramUsername} = contact;
    const {duration, timeUnit} = trainerDuration;

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

    const durationPrompts = (
        <div className="flex flex-row w-full justify-evenly">
            <SelectInput options={["Weeks", "Months", "Years"]} />
            <div className={inputWrapperStyle}>
                <FiCalendar color={iconColor} size={iconSize} />
                <input className="bg-transparent ml-2" placeholder='Duration' type="number" value={duration} onChange={val => updateDuration(val.target.value)}/>
            </div>
        </div>
    )

    const timesPerWeekPrompt = (
        <div className={inputWrapperStyle}>
            <FiCalendar color={iconColor} size={iconSize} />
            <input className="bg-transparent ml-2" type="number" value={sessionsPerWeek} onChange={val => updateSessionsPerWeek(val.target.value)} />
        </div>
    );

    const foodPrompt = (
        <div className={inputWrapperStyle}>
            <TextInput 
                icon={<FiSmile color={iconColor} size={iconSize} />}
                label="What's your relationship with food?" 
                value={foodRelation}
                changeFunc={val => updateFoodRelation(val.target.value)}
            />
        </div>
    )

    const promptCypher = {
        "NAME": namePrompts,
        "AGE": agePrompt,
        "CONTACT": contactPrompts,
        "TRAINER": trainerPrompt,
        "DURATION": durationPrompts,
        "TIMES_PER_WEEK": timesPerWeekPrompt,
        "FOOD": foodPrompt,
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
        updateDuration: newVal => dispatch(updateDuration(newVal)),
        updateSessionsPerWeek: newVal => dispatch(updateSessionsPerWeek(newVal)),
        updateFoodRelation: val => dispatch(updateFoodRelation(val))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(InformationPrompt);