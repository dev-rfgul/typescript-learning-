// function addTwo(num) {
//     return num + 2;
// }

// addTwo(5);


//in the above function the type by default will be any and we can pass any type of value to the function, to avoid this we can pass number to num



function addTwo(num: number) {
    return num + 2;
}

addTwo(5);


function toUpperCase(val: string) {
    return val.toUpperCase();
}

toUpperCase("hello world");

// console.log(toUpperCase(5));


function isSignUp(name: string, email: string, isPaid: boolean) {
    console.log(`name: ${name} email: ${email} isPaid: ${isPaid}`);
}
let isLogin = (name: string, email: string, isPaid: boolean) => {
    console.log(`name: ${name} email: ${email} isPaid: ${isPaid}`);
}


// isSignUp(123,"123",true);
//the above line will show one error at a time 


isSignUp("fahad", "fahad@gmail.com", true);
isLogin("fahad", "f@f.com", false);