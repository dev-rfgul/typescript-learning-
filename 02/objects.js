"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "fahad",
    email: "f@f.com",
    isPaid: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Fahad", isPaid: true });
function user1(user) {
}
user1({ name: "", email: "", isPaid: true });
var myUser = {
    _id: 1,
    name: "fahad",
    email: "rfgul@gmail.com",
    isActive: true
};
myUser.isActive = false;
// myUser._id = 2;
//this will show error as the id is readonly
