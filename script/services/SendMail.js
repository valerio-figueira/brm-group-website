import Loader from "../Utils/Loader.js";
import MailMessage from "./CreateMailMessage.js";

export default async function sendMail(mail) {
    Loader.run();
    MailMessage.deleteMessage();

    const body = {
        nome: mail.get('nome'),
        email: mail.get('email'),
        assunto: mail.get('assunto'),
        message: mail.get('message'),
        recaptchaResponse: mail.get('g-recaptcha-response')
    }

    if (body.recaptchaResponse.length === 0) {
        MailMessage.createMessage("Marque o CAPTCHA antes de enviar sua mensagem", "warning-msg");
        Loader.stop();
    } else {
        await fetch("https://brmgroup-appserver-cce7c7.netlify.app/send", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(body)
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
}