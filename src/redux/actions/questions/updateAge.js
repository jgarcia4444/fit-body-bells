
const updateAge = newValue => {
    return {
        type: "UPDATE_AGE",
        newValue,
    }
}

export default updateAge;