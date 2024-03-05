import emailjs from '@emailjs/browser';
const submitQuestionnaire = info => {

    let serviceID = "jgar_test";
    let templateID = "template_1";
    let publicKey = "rqyV6YA0V16NPoeVX";

    let templateParams = {
        name: info.name.fName + " " + info.name.lName,
        age: info.age,
        phone: info.contact.phoneNumber,
        instagramUsername: info.contact.instagramUsername,
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
            console.log("Success!", res.status, res.text)
        },
        (err) => {
            console.log("Failed...", err)
        }
        )
        return dispatch({type: "SUBMIT_QUESTIONNAIRE"});
    }
}
// public key = rqyV6YA0V16NPoeVX

export default submitQuestionnaire;