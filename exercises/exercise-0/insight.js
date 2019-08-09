
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

let thing = {
    foo: "bar"
};
// Here's another bug- it'd be nice to not have to 
// look for this kind of problem, right?
thing.bar;
