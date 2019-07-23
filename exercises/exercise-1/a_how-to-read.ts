// Let's talk about how to read TypeScript.

// First, we'll look at some plain JS.
describe("Reading TypeScript", () => {

    test("has type inference", () => {
        /*
         * TypeScript infers the types of variables.
         * Hover over these variable declarations to see them.
         */

        let hello = "hello world";

        let isTypeScriptTime = true;

        let oneAndAHalf = 1.5;

        let arrayOfFruits = ["apple", "orange", "pear"];

        let arrayOfBools = [true, false];
    });

    test("types enforce constraints", () => {
        /*
         * Once a variable has a type, the type checker will fail
         * if we try to assign it to a value of a different type.
         */
        let hello = "a string";

        // typings:expect-error
        hello = 5;

    });
})
describe("Type annotation", () => {
    test("basic variable type annotations", () => {
        /*
         * Rather than letting TS infer the types, we can add
         * type annotations that explicitly describe the variable type.
         */

        let hello: string = "hello world";

        let isTypeScriptTime: boolean = true;

        let oneAndAHalf: number = 1.5;

        let arrayOfFruits: string[] = ["apple", "orange", "pear"];

        let arrayOfBools: boolean[] = [true, false];
    })
    test("breaking type annotations", () => {
        /*
         * Type annotations are useful because they allow us to
         * express our intent to TypeScript, so it can catch mistakes.
         */
        // typings:expect-error
        let shouldBeAString: string = true;
    })
    test("where type annotations go", () => {
        // Type annotations show up after a colon to describe the type of a value. 
        let hello: string = "hello";

        // Today we're using a high strictness setting for TypeScript.
        // If the type checker can't infer a type, it will insist that we 
        // annotate it.
        // typings:expect-error
        let timesTwo = (x) => {
            return x * 2;
        }

        // Now the type checker knows that x should be a number.
        let timesTwoAnnotated = (x: number) => {
            return x * 2;
        }

        // Like before, if we try to use a string where TS expects a number, 
        // we get type errors:
        // typings:expect-error
        timesTwoAnnotated("hello")

        // Arugments aren't the only thing we can annotate, though.
        // We have here a function signature that takes a number and promises to 
        // return a string.
        let sayTimesTwo = (x: number): string => {
            return `${x} times two is ${timesTwoAnnotated(x)}`;
            /*
             * Try an alternate implementation of this function:
             * comment out the line above and uncomment the line below.
             * What error do you see
             */
            // return x;
        }
    })
});