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
    hasTrainerBefore: false,
    trainerDuration: {
        timeUnit: "",
        duration: "",
    },
    sessionsPerWeek: "",
    foodRelation: "",
    areasOfImprovement: "",
    goals: "",
    struggles: "",
    formSubmitted: false,
}


const questionsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "UPDATE_TIME_UNIT":
            return {
                ...state,
                trainerDuration: {
                    ...state.trainerDuration,
                    timeUnit: action.newValue,
                }
            }
        case "SUBMIT_QUESTIONNAIRE":
            return {
                ...state,
                formSubmitted: true,
            }
        case "UPDATE_STRUGGLES":
            return {
                ...state,
                struggles: action.newVal,
            }
        case "UPDATE_GOALS":
            return {
                ...state,
                goals: action.newVal,
            }
        case "UPDATE_IMPROVEMENT":
            return {
                ...state,
                areasOfImprovement: action.newVal,
            }
        case "UPDATE_FOOD_RELATION":
            return {
                ...state,
                foodRelation: action.newVal,
            }
        case "UPDATE_PHONE":
            return {
                ...state,
                contact: {
                    ...state.contact,
                    phone: action.newVal
                }
            }
        case "UPDATE_INSTAGRAM":
            return {
                ...state,
                contact: {
                    ...state.contact,
                    instagramUsername: action.newVal
                }
            }
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
        case "UPDATE_L_NAME":
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