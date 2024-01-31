
import React from 'react';
import { connect } from 'react-redux';

const RadioInput = ({label, updateHasTrainer}) => {

    const radioRowStyle = "flex flex-row items-center";
    const radioButtonStyle = "w-4 h-4"

    return (
        <div className="text-white">
            <h4 className="font-bold text-lg">{label}</h4>
            <div className="flex flex-row gap-4">
                <div className={radioRowStyle}>
                    <label className="mr-2" htmlFor="Yes">Yes</label>
                    <input className={radioButtonStyle} type="radio" name="Yes" id="" onClick={() => updateHasTrainer(true)} />
                </div>
                <div className={radioRowStyle}>
                    <label className="mr-2" htmlFor="No">No</label>
                    <input className={radioButtonStyle} type="radio" name="No" id="" onClick={() => updateHasTrainer(false)} />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateHasTrainer: valueToSet => dispatch({type: "UPDATE_HAS_TRAINER", valueToSet}),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(RadioInput);