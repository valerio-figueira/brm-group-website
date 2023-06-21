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

    await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body)
    }).then((response) => {
        console.log(response)
        MailMessage.createMessage("Sua mensagem foi enviada!", "alert-msg")
        Loader.stop();
    }).catch(error => {
        console.error(error);
        MailMessage.createMessage("Falha na conexão", "error-msg")
        Loader.stop();
    })
}