import Loader from "./Loader.js";

export default class RandomVideo {
    constructor(videos) {
        this.videos = videos;
    }

    run() {
        const randomVideo = Math.floor(Math.random() * this.videos.length);
        Loader.run('.media-container')
        this.searchForVideoTypes(randomVideo)
    }

    searchForVideoTypes(index) {
        const webm = this.videos[index]['webm'];
        const mp4 = this.videos[index]['mp4'];

        if (mp4) this.insertElements(mp4, 'video/mp4')
        if (webm) this.insertElements(webm, 'video/webm');
    }

    insertElements(videos, type) {
        const videoContainer = document.querySelector('#video-intro');

        for (let video of videos) {
            const element = this.createSourceElement(video, type);
            videoContainer.prepend(element);
        }
        Loader.stop();
    }

    createSourceElement(src, type) {
        const source = document.createElement('source');
        source.src = src;
        source.type = type;
        return source;
    }
}