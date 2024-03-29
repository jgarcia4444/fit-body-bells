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
        timeUnit: "Weeks",
        duration: "",
    },
    sessionsPerWeek: "",
    foodRelation: "",
    areasOfImprovement: "",
    goals: "",
    struggles: "",
    formSubmitted: false,
    loading: false,
}


const questionsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SUBMITTING_FORM":
            return {
                ...state,
                loading: true,
            }
        case "UPDATE_TIME_UNIT":
            return {
                ...state,
                trainerDuration: {
                    ...state.trainerDuration,
                    timeUnit: action.newValue,
                }
            }
        case "QUESTIONNAIRE_SUBMITTED":
            return {
                ...state,
                formSubmitted: true,
                loading: false,
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
                age: action.newValue,
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