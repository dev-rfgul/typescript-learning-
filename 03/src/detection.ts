function detectType(val: number | string) {
    if (typeof val === "number") {
        return val
    }
    return val.toLocaleLowerCase(val);

}

function ID(id: number | null) {
    if (!id) {
        console.log("No ID found");
    }
    return id?.toFixed(2);
}


function printAll(stars: string | string[] | null) {
    if (stars) {
        if (typeof stars === "object") {
            for (const s of stars) {
                console.log(s);
            }
        }
        else if (typeof stars === "string") {
            console.log(stars);
        }
    }
}


interface user {
    name: string;
    age: number;
    email: string;
}
interface admin {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}
function isAdmin(user: user | admin) {
    if ("isAdmin" in user) {
        return user.isAdmin;
    }
}


type fish = { swim: () => void }
type bird = { fly: () => void }


// the following function will identify if the pet is a fish 
function isFish(pet: fish | bird): pet is fish {

    // if i dont add a return type to the function it will give an error because it is not able to identify the return type of the function so the type casting is done by "pet is fish" 
    return (pet as fish).swim !== undefined;
}

// now we have figured out that the pet is fish or a bird

// for example i want to order food for the pet , and bird and fish have separate food to this we can do it like this 

function getFood(pet: fish | bird) {
    if (isFish(pet)) {
        pet
        return "fish food";

    }
    pet
    return "bird food";
}

interface circle {
    kind: "circle";
    radius: number;
}
interface square {
    kind: "square";
    side: number;
}
interface rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = circle | square | rectangle;
function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return shape.radius;
    }
    else if (shape.kind === "square") {
        return shape.side;
    }
    else if (shape.kind === "rectangle") {
        return shape.width && shape.height;

    }

}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _defaultCase: never = shape
            return _defaultCase;
    }

}

// adding a dummy comment for testing 
// adding a dummy comment for testing 
