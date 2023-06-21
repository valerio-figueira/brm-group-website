export default class CheckForm {
    emailRegex = /^[a-zA-Z0-9._-]{4,}@[a-zA-Z0-9.-]{2,}\.{1}[a-zA-Z]{2,}$/;
    nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/u;
    messageRegex = /^[\s\S]{5,500}$/;

    constructor (nameInput, emailInput, messageInput) {
        this.nameInput = nameInput;
        this.emailInput = emailInput;
        this.messageInput = messageInput;
    }

    validate() {
        if(!this.nameRegex.test(this.nameInput.value)) return false;
        if(!this.emailRegex.test(this.emailInput.value)) return false;
        if(!this.messageRegex.test(this.messageInput.value)) return false;
        if(this.nameInput.value.length > 40) return false;
        if(this.emailInput.value.length > 40) return false;
        if(this.nameInput.value.length < 10) return false;
        if(this.emailInput.value.length < 10) return false;
        if(this.messageInput.value.length > 500) return false;
        if(this.messageInput.value.length < 10) return false;

        return true;
    }
}