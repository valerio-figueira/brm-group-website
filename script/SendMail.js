import Loader from "./Loader.js";
import MailMessage from "./MailMessage.js";

export default async function sendMail(mail) {
    Loader.run();
    MailMessage.deleteMessage();

    const body = {
        nome: mail.get('nome'),
        email: mail.get('email'),
        assunto: mail.get('assunto'),
        message: mail.get('message'),
    }

    await fetch("https://brmgroup-appserver-cce7c7.netlify.app/send", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(response => {
        MailMessage.createMessage(response.message, "alert-msg")
        Loader.stop();
    })
    .catch(error => {
        console.log(error);
        MailMessage.createMessage("Falha na conexão", "error-msg")
        Loader.stop();
    })
}