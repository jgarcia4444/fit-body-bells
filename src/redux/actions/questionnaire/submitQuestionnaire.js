import emailjs from '@emailjs/browser';
const submitQuestionnaire = info => {

    let serviceID = "jgar_test";
    let templateID = "template_1";
    let publicKey = "rqyV6YA0V16NPoeVX";

    let templateParams = {
        name: info.name.fName + " " + info.name.lName,
        age: info.age,
        phone: info.contact.phone,
        instagramUsername: info.contact.instagramUsername,
        workedWithCoach: info.hasTrainerBefore === true ? "Yes" : "No",
        duration: info.trainerDuration.duration,
        timeUnit: info.trainerDuration.timeUnit,
        sessionsPerWeek: info.sessionsPerWeek,
        foodRelation: info.foodRelation,
        areasOfImprovement: info.areasOfImprovement,
        goals: info.goals,
        struggles: info.struggles,
    }

    return async dispatch => {
        dispatch({type: "SUBMITTING_FORM"});
        emailjs.send(
            serviceID,
            templateID,
            templateParams,
            {
                publicKey: publicKey,
            }
        )
        .then((res) => {
            console.log("Success!", res.status, res.text);
            return dispatch({type: "QUESTIONNAIRE_SUBMITTED"});
        },
        (err) => {
            console.log("Failed...", err)
        }
        )
        
    }
}
// public key = rqyV6YA0V16NPoeVX

export default submitQuestionnaire;