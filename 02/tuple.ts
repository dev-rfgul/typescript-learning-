const user: (number | string)[] = ['John', 1];

let tUser: [string, number, boolean];

tUser = ['John', 1, true];

// we cant change the order of the tuple    
// rgb is the best example of tuple  

let rgb: [number, number, number] = [255, 0, 0];
type user = [number, string]
const newUser: user = [1, 'John'];



newUser[1] = 'fahad';

// its an edge case of a tuple that the tuple array being defined by the length of 02 can still perform push, pop and other array methords
newUser.push (1);