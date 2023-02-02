export default async function sendMail(mail){
    const messageTag = document.querySelector('#contact-form .alert-msg');
    const errorMessageTag = document.querySelector('#contact-form .error-msg');
    const loader = document.querySelector('.loader-container');
    // REMOVE MESSAGE IF IT ALREADY EXISTS
    if(messageTag){
        messageTag.remove();
    }
    if(errorMessageTag){
        errorMessageTag.remove()
    }

    if(!loader){
        document.body.appendChild(createloader());
    }

    document.body.style.overflowY = "hidden";

    await fetch("http://localhost:3000/", {
        method: "post",
        body: mail
    }).then((response) => {
        const message = createMessageTag("Sua mensagem foi enviada!", "alert-msg");

        addMessageTagIfNotExists(message);
        removeLoaderTagIfExists();

        document.body.style.overflowY = "scroll";
    }).catch(error => {
        const message = createMessageTag("Falha ao enviar!", "error-msg");

        addMessageTagIfNotExists(message);
        removeLoaderTagIfExists();

        document.body.style.overflowY = "scroll";
    })
}

function addMessageTagIfNotExists(message){
    const form = document.querySelector("#contact-form");
    if(!document.querySelector('#contact-form .alert-msg')){
        form.appendChild(message);
        form.children[0].after(message);
    }
}

function removeLoaderTagIfExists(){
    const loader = document.querySelector('.loader-container');

    if(loader){
        loader.remove();
    }
}



function createMessageTag(text, messageType){
    const p = document.createElement('p');
    p.className = messageType;
    p.innerHTML = text;

    return p;
}


function createloader(){
    const loaderContainer = document.createElement("div");
    const loader = document.createElement("div");

    loaderContainer.className = "loader-container";
    loader.className = "loader";

    loaderContainer.appendChild(loader);

    return loaderContainer;
}