import Loader from "../Utils/Loader.js";
import MailMessage from "./CreateMailMessage.js";

export default async function sendMail(mail) {
    Loader.run();
    MailMessage.deleteMessage();

    const body = {
        name: mail.get('name'),
        email: mail.get('email'),
        subject: mail.get('subject'),
        message: mail.get('message'),
    }

    if (body.recaptchaResponse.length === 0) {
        MailMessage.createMessage("Marque o CAPTCHA antes de enviar sua mensagem", "warning-msg");
        Loader.stop();
    } else {
        await fetch("https://brm-group-serverside.vercel.app/send", {
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