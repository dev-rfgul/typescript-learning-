abstract class TakePhoto {
    constructor(
        public fiter: string,
        public cameraMode: string,
    ) {

    }

    // getSepia():void
}

// if the class is normal it following line will give no error, if we add abstract keyword in front of class it will give error and it can be resolved by this methord

//const fahad= new TakePhoto("Normal", "Portrait");



class Instagram extends TakePhoto {
    constructor(
        public fiter: string,
        public cameraMode: string,
    ) {
        super(fiter, cameraMode);
    }


}

const fahad = new Instagram("Normal", "Portrait");

//added a dummy comment