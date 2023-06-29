export default class Loader {
    static run(element) {
        const loaderContainer = document.createElement('div');
        loaderContainer.className = 'loader-container';

        const spinner = document.createElement('div');
        spinner.className = 'loader';

        loaderContainer.appendChild(spinner);

        const container = document.querySelector(element)
        if(container) container.appendChild(loaderContainer);
        if(element.match('body')) {
            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
        }
    }

    static stop() {
        const loader = document.querySelector('.loader-container');
        if (loader) {
            document.body.style.height = 'auto';
            document.body.style.overflow = 'scroll';
            loader.remove();
        }
    }
}