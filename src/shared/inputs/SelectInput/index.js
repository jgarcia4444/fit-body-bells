import React from 'react';
import { connect } from 'react-redux';

import { FiCalendar } from 'react-icons/fi';

import updateTimeUnit from '../../../redux/actions/questions/updateTimeUnit';

const SelectInput = ({options, updateTimeUnit}) => {

    return (
        <div className="flex flex-row border-b-2 border-white pt-1 px-1">
            <FiCalendar color={"#fff"} size={20} />
            <select onChange={val => updateTimeUnit(val.target.value)} className="bg-transparent" name="duration">
                {options.map((option, i) => <option className="text-black" value={option}>{option}</option>)}
            </select>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateTimeUnit: newVal => dispatch(updateTimeUnit(newVal))
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(SelectInput);