
const submitQuestionnaire = info => {

    let url = "https://api.emailjs.com/api/v1.0/email/send"

    let options = {
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            template_params: {
                from_name: "test",
                to_name: "test2",
                message: "This is a test"
            },
            service_id: "jgar_test",
            template: "template_tromgf5S",
        })
    };
    return async dispatch => {
        dispatch({type: "SUBMITTING_FORM"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => console.log(data))
        return dispatch({type: "SUBMIT_QUESTIONNAIRE"});
    }
}
// template_vkh2nxf

export default submitQuestionnaire;