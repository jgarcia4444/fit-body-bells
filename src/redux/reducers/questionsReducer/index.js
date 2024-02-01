const questionnaireInputs = ["NAME", "AGE", "CONTACT", "TRAINER", "DURATION", "TIMES_PER_WEEK", "FOOD", "IMPROVE", "GOALS", "STRUGGLES"]
const initialState = {
    name: {
        fName: "",
        lName: "",
    },
    age: "",
    contact: {
        phone: "",
        instagramUsername: ""
    },
    hasTrainerBefore: undefined,
    trainerDuration: {
        timeUnit: "",
        duration: 0,
    },
    sessionsPerWeek: 0,
    foodRelation: "",
    areasOfImprovement: "",
    goals: "",
    struggles: ""
}


const questionsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "UPDATE_SESSIONS_PER_WEEK":
            return {
                ...state,
                sessionsPerWeek: action.newValue,
            }
        case "UPDATE_DURATION":
            return {
                ...state,
                trainerDuration: {
                    ...state.trainerDuration,
                    duration: action.newValue,
                }
            }
        case "UPDATE_HAS_TRAINER":
            return {
                ...state,
                hasTrainerBefore: action.valueToSet,
            }
        case "UPDATE_AGE":
            return {
                ...state,
                age: action.newVal,
            }
        case "UPDATE_F_NAME":
            return {
                ...state,
                name: {
                    ...state.name,
                    fName: action.newValue,
                }
            }
        case "UPDATE_LNAME":
            return {
                ...state,
                name: {
                    ...state.name,
                    lName: action.newValue
                }
            }
        default:
            return state;
    }
}

export default questionsReducer;