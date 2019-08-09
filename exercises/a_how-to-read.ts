import { AssertAssignable } from "./util";
// Let's talk about how to read TypeScript.

// First, we'll look at some plain JS.
describe("Reading code with TypeScript", () => {
    test("has type inference for primitives", () => {
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

        let aNumber = 5;

        // typings:expect-error
        hello = aNumber;
    });

})
describe("Type annotation", () => {
    test("primitive variable type annotations", () => {
        /*
         * Rather than letting TS infer the types, we can add
         * type annotations that explicitly describe the variable type.
         * TODO: Use the editor to help you annotate these variables.
         */

        let hello = "hello world";

        let isTypeScriptTime = true;

        let oneAndAHalf = 1.5;

        let arrayOfFruits = ["apple", "orange", "pear"];

        let arrayOfBools = [true, false];
    });

    test("breaking type annotations", () => {
        /*
         * Type annotations are useful because they allow us to
         * express our intent to TypeScript, so it can catch mistakes.
         */
        let isAString: string = "hello"
        // typings:expect-error
        let shouldBeAString: string = true;

        /*
        * This holds for anywhere that we can use type annotation, 
        * such as on function arguments.
        */
        function timesTwo(x: number) {
            return x * 2;
        }
        let six = timesTwo(3);

        // typings:expect-error
        let notANumber = timesTwo("hello");

        /*
        * We're using a high TS strictness setting today. That means
        * that the type checker will insist that we type our arguments.
        */
        // typings:expect-error
        function timesThree(x) {
            return x * 3;
        }

    });

    test("type annotations on function arguments", () => {
        /*
         * TODO: Annotate this function's arguments so that it can only 
         *       take a string and a number.
         */
        function sayNameAndAge(name, age) {
            return `${name} is ${age} years old.`
        }
        // Once you've annotated those arguments, you should see that these lines pass the type checker
        sayNameAndAge("Charlie", 26);
        sayNameAndAge("Qamar", 30);

        // These lines should fail the type checker.
        // typings:expect-error
        sayNameAndAge(15, "Jacqueline");
        // typings:expect-error
        sayNameAndAge(true, false);
    });

    test("function return type annotations", () => {
        /**
         * We can also annotate a function's return type.
         */
        function timesThree(x: number): number {
            return x * 3;
        }

        /**
         * This is a powerful way to ensure functions are returning
         * what we expect them to.
         * TODO: Check out the type error and fix this function 
         * implementation to make the error go away.
         */
        function classify(x: number): string {
            if (x > 0) return "positive";
            if (x < 0) return "negative";
        }
    })
});

describe("object types", () => {
    // Now that we have a feel for where we can use type annotations, 
    // let's see how they look when we're describing objects.
    test("object types", () => {
        /*
            * TypeScript gets more interesting when we introduce
            * structural typing. Object shapes are types.
            */
        let apple = { name: "apple", color: "red" };
        apple.color;

        /*
            * TypeScript knows what the properties on apple are, so
            * it will tell us if we ask for one that doesn't exist.
            */
        // typings:expect-error
        apple.nooooo;

        /*
            * We can also define types inline. This variable is declared to have
            * a new, ad hoc object type before we even assign a value.
            *
            * Object type syntax looks a lot like object literal syntax:
            */
        let orange: { name: string; color: string } = {
            name: "orange",
            color: "orange"
        };

        // typings:expect-error
        let notAFruit: { name: string; color: string } = { color: "red" };
        // typings:expect-error
        let stillNotAFruit: { name: string; color: string } = "hello";
        // typings:expect-error
        let reallyNotAFruit: { name: string; color: string } = { foo: false };
    });

    test("type aliases", () => {
        /*
            * These types are a little more complicated to write than the primatives.
            * What if we want to use them again? We can describe aliases for types,
            * and we can use them anywhere that we would use a type.
            */
        type Fruit = { name: string; color: string };

        let strawberry: Fruit = { color: "red", name: "Strawberry" };
        let lemon: Fruit = { color: "yellow", name: "Lemon" };

        // typings:expect-error
        let plate: Fruit = { size: "small", color: "blue" };
    });

    test("supersets and structural compatibility", () => {
        type FoodItem = {
            name: string;
            cost: number;
        }

        let apple = {
            name: "apple",
            cost: 2
        };

        function priceStatement(item: FoodItem) {
            return `That ${item.name} will be $${item.cost}`;
        }

        type FlavoredFoodItem = {
            name: string;
            cost: number;
            flavorProfile: string;
        }
        /*
            * The type FlavoredFoodItem has a superset of the properties
            * of FoodItem, so we can pass a FlavoredFoodItem anywhere
            * that we expect a FoodItem.
            */
        let cheezits: FlavoredFoodItem = {
            name: "Box of Cheezits",
            cost: 4,
            flavorProfile: "cheesy"
        };
        let cheesyCheezits = priceStatement(cheezits);

        /*
            * But, we can't pass a FoodItem where we expect a FlavoredFoodItem.
            */
        function flavoredFoodPriceStatement(item: FlavoredFoodItem) {
            return `That ${item.flavorProfile} ${item.name} will be $${item.cost}.`;
        }

        // But regular food isn't assignable to a type that expects flavored food
        // typings:expect-error
        let noApples = flavoredFoodPriceStatement(apple);

        // In the future, we'll use AssertAssignable to prove structural compatibility or lack thereof:
        type _t1 = AssertAssignable<FoodItem, FlavoredFoodItem>;
        // typings:expect-error
        type _t2 = AssertAssignable<FlavoredFoodItem, FoodItem>;
    });
});

/*  WHEN YOU UNCOMMENT THESE TESTS: 
*   To uncomment a single test, uncomment from one star-line to the next.
*   Have `npm run exercise-1` running in your terminal. When you uncomment
*   a test and save the file, you should see a test failure in your terminal.
*   Keep working until you save the file and see the tests pass in your terminal.
*   Good luck! 
*/
// /**************************************************************************/
// test("Writing our own types", () => {
//   /*
//    * ======================================================
//    * TODO: Update the definition of FixThisType to allow 
//    * strings only.
//    * ======================================================*/
//   type FixThisType = any;
//   let jaime: FixThisType = "Jaime"
//   let meredith: FixThisType = "Meredith"
//   // typings:expect-error
//   let no: FixThisType = false;
// })
// /**************************************************************************/

// /**************************************************************************/
// test("Writing some object types", () => {
//   /*
//    * ======================================================
//    * TODO: Update FixThisOneToo to allow objects with a kind
//    * and a disposition.
//    * ======================================================*/
//   type FixThisType = any;
//   let nellie: FixThisType = { kind: "dog", disposition: "good" }
//   let roxy: FixThisType = { kind: "dog", disposition: "aloof" }
//   // typings:expect-error
//   let friday: FixThisType = { kind: "cat", fluffy: "very" }
//   // typings:expect-error
//   let cauchy: FixThisType = { kind: "cat", fluffy: "not really" }
// })
// /**************************************************************************/

// /**************************************************************************/
// test("Writing some function types", ()=>{
//   /*
//    * ======================================================
//    * TODO: Update AndThisOne to allow a function that takes
//    * a string and returns a string.
//    * ======================================================*/
//   type FixThisType = any;
//   let sayHello: FixThisType = (name: string) => { return `Hello, ${name}.`}
//   let sayGoodbye: FixThisType = (name: string) => { return `Goodbye, ${name}.`}
//   // typings:expect-error
//   let isFido: FixThisType = (name: string) => { return name === "Fido"};
// })
// /**************************************************************************/

});