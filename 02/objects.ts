const user = {
    name: "fahad",
    email: "f@f.com",
    isPaid: true,
};

function createUser({ name: string, isPaid: boolean }) {


}


createUser({ name: "Fahad", isPaid: true });

export { }


type User = {
    name: string;
    email: string;
    isPaid: boolean;

}

function user1(user: User) {
}

user1({ name: "", email: "", isPaid: true });


type User2 = {
    readonly _id: number;
    //by this the id cannot be changed
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: number;
    //the question mark will make the credit card optional

}

let myUser: User2 = {
    _id: 1,
    name: "fahad",
    email: "rfgul@gmail.com",
    isActive: true
}


myUser.isActive = false;
// myUser._id = 2;
//this will show error as the id is readonly

type creditCardNumber={
    cardNumber:number;
}

type creditCardName={
    cardName:string;
}

type creditCardDetails=creditCardNumber & creditCardName & {
    cvv:number;
}

//thats how we can mix up the types 