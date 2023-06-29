import Loader from "../Utils/Loader.js";
import MailMessage from "./CreateMailMessage.js";

export default async function sendMail(formData) {
    Loader.run('body');
    MailMessage.deleteMessage();

    const recaptcha = formData.get('g-recaptcha-response');

    if (recaptcha === null || recaptcha.length === 0) {
        MailMessage.createMessage("Marque o CAPTCHA antes de enviar sua mensagem", "warning-msg");
        Loader.stop();
    } else {
        await createRequest(formData)
    }
}

async function createRequest(formData) {
    return fetch("https://server.groupbrm.com.br/contact", {
        method: "POST",
        body: formData
    })
        .then((response) => response.json())
        .then(response => {
            if (response.message) MailMessage.createMessage(response.message, "alert-msg");
            if (response.error) MailMessage.createMessage(response.error, "error-msg");

            Loader.stop();
        })
        .catch(error => {
            console.error(error);
            MailMessage.createMessage("Falha na conexão", "error-msg")
            Loader.stop();
        })
}