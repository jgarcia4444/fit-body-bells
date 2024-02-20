
import React from 'react';
import { connect } from 'react-redux';

const RadioInput = ({label, updateHasTrainer, hasTrainerBefore}) => {

    const radioRowStyle = "flex flex-row items-center";
    const radioButtonStyle = "w-4 h-4"

    return (
        <div className="text-white">
            <h4 className="font-bold text-lg">{label}</h4>
            <div className="flex flex-row gap-4">
                <div className={radioRowStyle}>
                    <label className="mr-2" htmlFor="Yes">Yes</label>
                    <input checked={hasTrainerBefore === true ? true : false} className={radioButtonStyle} type="radio" name="trainer" id="" onClick={() => updateHasTrainer(true)} value={true} />
                </div>
                <div className={radioRowStyle}>
                    <label className="mr-2" htmlFor="No">No</label>
                    <input checked={(hasTrainerBefore === false || hasTrainerBefore === undefined) ? true : false} className={radioButtonStyle} type="radio" name="trainer" id="" onClick={() => updateHasTrainer(false)} value={false} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        hasTrainerBefore: state.questions.hasTrainerBefore,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateHasTrainer: valueToSet => dispatch({type: "UPDATE_HAS_TRAINER", valueToSet}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RadioInput);