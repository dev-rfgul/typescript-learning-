"use strict";
// class User {
//     email: string;
//     name: string;
//     city: string= "";
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
// }
// const fahad = new User('Fahad','rfgul@gmail.com' )
// fahad.city="Lodhran"
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "Lodhran";
    }
    get AppleEmail() {
        return `apple${this.email}`;
    }
    get CourseCount() {
        return this._courseCount;
    }
    // there should be no return type in setter
    set courseCount(courseNum) {
        if (courseNum <= 0) {
            throw new Error("it shold not be 0");
        }
        this._courseCount = courseNum;
    }
    // like private properties we also have private methods
    deleteToken() {
        console.log("Deleting Token");
        //now this can only be used in the class 
    }
}
// applying inheritence 
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    // only the public properties and methords can be accessed in this class
    // but we can access the private properties in this way
    changeCourseCount() {
        // this.CourseCount=5
        // if the property is private it cant be accessed but if we change it with protected it will be accessed by the same class as well as the children class
        this._courseCount = 5;
    }
}
