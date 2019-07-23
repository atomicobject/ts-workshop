
const subtractOne = (n) => {
    if (n > 0) return n - 1;
};

const foo = subtractOne(0);

// There's a bug here. Do you see it? TypeScript does.
console.log(foo.toString());

// (Yes, of course you see it because you're an infinitely
// aware and wise programmer. Let's suspend disbelief for
// a moment and pretend we're fallible humans who sometimes 
// miss cases.)

  
const bar = subtractOne("hello");


// I don't know what I can pass to this function
// I don't know what this function returns
// I don't know what fields exist on this object
// I don't know if I am covering all cases

// export function describeNumber(x: number) {
//     if (x > 0) { return "positive" }
//     if (x < 0) { return "negative" }
// }

// const three = 3;

// const descriptionOne = describeNumber(three);
// const descriptionTwo = describeNumber("three");

// console.log(`${three} is ${describeNumber(three)}`);

// console.log(`${three} times two is ${timesTwo(three)}`);