/*
Question: What is the purpose of the compose and pipe functions in JavaScript?

Explanation:
- compose and pipe are higher-order functions used for function composition in JavaScript.
- compose takes multiple functions as arguments and returns a new function that applies these functions from right to left.
- pipe, on the other hand, applies the functions from left to right.
- Both compose and pipe are commonly used in functional programming to create new functions by combining existing ones in a specific order.

*/

//?Question understanding
//in compose start from right to left => mutliplyFour take 5 as intial value = 20 then 20 goes subtract 18 and 18 goes to addFive = 23
//so compose do all this function reduced to one value. this topic called is function composition
//also the compose create n NUMBER of function

const addFive = (num) => {
    return num + 5;
};
const subtractTwo = (num) => {
    return num - 2;
}
const mutliplyFour = (num) => {
    return num * 4;
}
const evaluate = compose(addFive, subtractTwo, mutliplyFour);
console.log(evaluate(5)); //23

const evaluatePipe = pipe(addFive, subtractTwo, mutliplyFour);
console.log(evaluatePipe(5)); //32


//?code understanding
//step:1 compose create
//s-2- taking n number of function = ...fns
//s-3 compose give another function in evaluate.which can take intial value here intial value is 5
// console.log(fns, intial) => workinmg fine check it
//so we get our compose function
//s-4- now first we want the mutliply four function so we do like this =>
// return fns[0](fns[1](fns[2](intial)))
//but we cant do because there n number of function so for that means loop => for loop

function compose(...fns) {
    return function (intial) {
        let result = intial;
        for (let i = fns.length - 1; i >= 0; i--) {
            result = fns[i](result)
        }
        return result;
    };
}

//?DO THIS WITH JS IN BUILT FUNCTION
//- we use reduce but reduce goes from left to right
//- but we want right to left so we use reduceRight =>same syntax just do calculation from right to left
//?CODE
// function compose(...fns) {
//     return function (intial) {
//         return fns.reduceRight((acc,curr) => {
//                 return curr(acc)
//         },intial)
//     };
// }

//! for the  in Normal

function pipe(...fns) {
    return function (intial) {
        let result = intial;
        for (let i = 0; i < fns.length; i++) {
            result = fns[i](result)
        }
        return result;
    };
}

//! for the  in js built in function

// function pipe(...fns) {
//     return function (intial) {
//         return fns.reduce((acc,curr) => {
//                 return curr(acc)
//         },intial)
//     };
// }


