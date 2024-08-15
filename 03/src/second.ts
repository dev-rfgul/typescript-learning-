interface TakePhoto {
    cameraMode: string;
    fiter: string;
    burst: number;
}

interface story {
    createStory(): void;
}
class instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public fiter: string,
        public burst: number
    ) { }
}

class youtube implements TakePhoto, story {
    constructor(
        public cameraMode: string,
        public fiter: string,
        public burst: number,
        public videoQuality: string
    ) {

    }
    createStory(): void {
        console.log("Creating Story")
    }
}
