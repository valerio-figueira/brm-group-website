import Loader from "../Utils/Loader.js";
import CurriculumMessage from "./CurriculumMessage.js";
import CheckForm from "../validation/CheckForm.js";

export default function addFormListener(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        CurriculumMessage.deleteMessage();

        const checkForm = new CheckForm(form[0], form[1], form[2]);
        const isValid = checkForm.validate();
        
        let formData = new FormData(form);
        // SEND FORM DATA
        if (isValid) sendCurriculum(formData);
        else CurriculumMessage.createMessage('Verifique seus dados', 'warning-msg');
    })
}

export async function sendCurriculum(formData) {
    Loader.run();
    CurriculumMessage.deleteMessage();

    const recaptcha = formData.get('g-recaptcha-response');

    if (recaptcha === null || recaptcha.length === 0) {
        CurriculumMessage.createMessage("Certifique-se de que é humano", "warning-msg");
        Loader.stop();
    } else {
        await createRequest(formData)
    }
}

async function createRequest(formData) {
    return fetch("https://server.groupbrm.com.br/curriculum", {
        method: "POST",
        body: formData
    })
        .then((response) => response.json())
        .then(response => {
            if (response.message) CurriculumMessage.createMessage(response.message, "alert-msg");
            if (response.error) CurriculumMessage.createMessage(response.error, "error-msg");

            Loader.stop();
        })
        .catch(error => {
            console.error(error);
            CurriculumMessage.createMessage("Falha na conexão", "error-msg")
            Loader.stop();
        })
}