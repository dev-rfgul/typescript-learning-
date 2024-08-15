var seatChoice;
(function (seatChoice) {
    //by default the first element is 0 and if we define the 1st number it will start the next number from the next number 
    // and if we set the first element to a string then we have to define every varaiable as string or number but cant be left empty 
    seatChoice[seatChoice["window"] = 10] = "window";
    seatChoice[seatChoice["aisle"] = 34] = "aisle";
    seatChoice[seatChoice["middle"] = 35] = "middle";
    seatChoice[seatChoice["emergency"] = 36] = "emergency";
    seatChoice[seatChoice["fourth"] = 37] = "fourth";
})(seatChoice || (seatChoice = {}));
var rfgulSeat = seatChoice.window;
