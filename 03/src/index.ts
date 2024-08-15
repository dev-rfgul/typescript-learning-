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

    protected _courseCount = 1;
    city: string = "Lodhran";
    constructor(public name: string, public email: string) {

    }

    get AppleEmail(): string {
        return `apple${this.email}`
    }

    get CourseCount(): number {
        return this._courseCount

    }


    // there should be no return type in setter

    set courseCount(courseNum: number) {
        if (courseNum <= 0) {
            throw new Error("it shold not be 0")
        }
        this._courseCount = courseNum;

    }

    // like private properties we also have private methods

    private deleteToken() {
        console.log("Deleting Token")
        //now this can only be used in the class 
    }
}

// applying inheritence 


class subUser extends User {
    isFamily: boolean = true;
    // only the public properties and methords can be accessed in this class

    // but we can access the private properties in this way

    changeCourseCount (){
        // this.CourseCount=5

        // if the property is private it cant be accessed but if we change it with protected it will be accessed by the same class as well as the children class
        this._courseCount=5; 
    }
}