import Loader from "./Loader.js";
import MailMessage from "./MailMessage.js";

export default async function sendMail(mail){
    Loader.run();
    MailMessage.deleteMessage();

    await fetch("http://localhost:3000/", {
        method: "POST",
        body: mail
    }).then((response) => {
        MailMessage.createMessage("Sua mensagem foi enviada!", "alert-msg")
        Loader.stop();
    }).catch(error => {
        MailMessage.createMessage("Falha na conexão", "error-msg")
        Loader.stop();
    })
}