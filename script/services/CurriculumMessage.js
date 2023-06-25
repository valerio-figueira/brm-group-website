export default class CurriculumMessage {
    static createMessage(message, className) {
        const form = document.querySelector("#work-with-us form");
        const p = document.createElement('p');
        p.className = className;
        p.innerHTML = message;

        if(!form.querySelector(`.${className}`)) {
            form.insertBefore(p, form.querySelector('button'));
        }
    }

    static deleteMessage() {
        const form = document.querySelector("#work-with-us form");
        const alert = form.querySelector('.alert-msg');
        const error = form.querySelector('.error-msg');
        const warning = form.querySelector('.warning-msg');
        const success = form.querySelector('.success-msg');

        if(alert) alert.remove();
        if(error) error.remove();
        if(warning) warning.remove();
        if(success) success.remove();
    }
}