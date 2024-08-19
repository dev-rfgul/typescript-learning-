const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}
function identityThree<Type>(val: Type): Type {
    // the diff btw the above and this is that this is a generic function and function2  will return take any type of value and return any type of value for example it can take a number and return a string

    // but this function will take a number and return a number it will be saved and will return the same type of value
    return val;
}

identityThree(3);
// this will give error because it is expecting a number if i make it a string and it will return a string

// this function can be written as following

function identityFour<T>(val: T): T {
    return val;
}

interface bottle {
    brand: string;
    size: number;
}

function identityFive<bottle>({ brand = "fahad", size = 2 }) {
    return { brand, size };
}

function searchProduct<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

// this is replica of the above code

// to avoid the mistake between jsx and a generic  most coder add a comma after the generic as follows

const searchProductTwo = <T>(products: T[]): T => {
    const myIndex = 3;
    return products[myIndex];
};

interface Product {
    brand: string;
    size: number;
    qunatity: number;
    available: boolean;
}
function anotherFunction<T, U extends Product>(val1: T, val2: U): object {
    return {
        val1,
        val2,
    };
}

// if we give 11 as a string it will give error because it is expecting a number
// it can be resolved by adding an interface
anotherFunction(3, { brand: "fahad", size: 2, qunatity: 3, available: true });
