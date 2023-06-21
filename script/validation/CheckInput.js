export default class CheckInput {
    constructor (input, regex, valueLength) {
        this.input = input;
        this.regex = regex;
        this.valueLength = valueLength;
        this.redColor = "#ffcece";
        this.whiteColor = "#FFFFFF";
    }

    validate() {
        this.input.addEventListener('keypress', (e) => {
            if(e.target.value.length > this.valueLength) e.preventDefault();

            if(!this.regex.test(e.key)){
                e.preventDefault();
                this.input.style.backgroundColor = this.redColor;
            } else {
                this.input.style.backgroundColor = this.whiteColor;
            }

            this.input.addEventListener("focusout", (e) => {
                e.target.style.backgroundColor = this.whiteColor;
            })
        })
    }
}