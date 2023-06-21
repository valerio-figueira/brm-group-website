export default class Loader {
    static run() {
        const loaderContainer = document.createElement('div');
        loaderContainer.className = 'loader-container';

        const spinner = document.createElement('div');
        spinner.className = 'loader';

        loaderContainer.appendChild(spinner);

        document.body.appendChild(loaderContainer);
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
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