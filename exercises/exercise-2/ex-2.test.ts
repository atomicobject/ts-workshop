
// Unions arise naturally out of functions
// with conditional returns.
function classify(n: number) {
  if (n < 0) return 'negative';
  if (n > 0) return 'positive';
  return 'zero'
}

describe("unions", () => {
  

  test("and more interestingly, we can describe new types by unioning primatives together!", () => {
    type AStringOrANumber = string | number;
    let aString: AStringOrANumber = "hello";
    let aNumber: AStringOrANumber = 2;

    // typings: expect-error
    let aBool: AStringOrANumber = true;
  });

  test("this allows us to constrain types in interesting ways", () => {
    type FixThisType = any;

    let aBool: FixThisType = true;

    let aString: FixThisType = "whatever";

    // typings: expect-error
    let aNull: FixThisType = null;
  });
})
describe("Unions and intersections", () => {
  test("can union different types together", () => {
    type FixThisType = any;

    let hello: FixThisType = "hello";
    let apples: FixThisType = 4;
    let pears: FixThisType = 1.5;

    // typings: expect-error
    let world: FixThisType = "world";

    // typings: expect-error
    let goodnight: FixThisType = "goodnight";

    // typings: expect-error
    let moon: FixThisType = "moon";
  });


describe("Literal types", () => {
  test("", () => {
    // Array, of...whatever
    let things = ["apple", 4, true];
    things.push(null); // Oh no! TypeScript has inferred that things can only be of a few types

    let anyThings: any[] = ["apple", 4, true];
    anyThings.push(["hello"]); // If TS isn't quite right about its inference, we can tell it what we meant

    function pickFrutest(fruits: string[]) {
      return fruits[Math.random() * fruits.length];
    }
  });
  test("infers types for normal JS", () => {
    let orange = "orange";
    const apple = "apple";
  });
});
describe("having a hard time demonstrating features without unions", () => {
  test("allows unions", () => {
    let stringOrNumber: string | number = "the string";

    stringOrNumber = 5;
  });
  test("can follow control flow", () => {
    let thing = Math.random() >= 0.5;
    let stringOrNumber: string | number = thing ? "a string" : 5;
    if (thing) {
      stringOrNumber;
    }
  });
});
})
