export default async function sendMail(mail){
    const messageTag = document.querySelector('#contact-form .alert-msg');
    // REMOVE MESSAGE IF IT ALREADY EXISTS
    if(messageTag){
        messageTag.remove();
    }

    await fetch("http://localhost:3000/", {
        method: "post",
        body: mail
    }).then((response) => {
        const message = createMessageTag("Sua mensagem foi enviada!", "alert-msg");

        if(!document.querySelector('#contact-form .alert-msg')){
            form.appendChild(message);
            form.children[0].after(message);
        }
    })
}




function createMessageTag(text, messageType){
    const p = document.createElement('p');
    p.className = messageType;
    p.innerHTML = text;

    return p;
}