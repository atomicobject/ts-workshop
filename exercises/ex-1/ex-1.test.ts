describe("TypeScript Basics", () => {
  it("has a few primative types", () => {
    let hello: string = "hello world";

    let isTypeScriptTime: boolean = true;

    let oneAndAHalf: number = 1.5;
  });
  it("as well as some collection types", () => {
    let fruits: string[] = ["apple", "orange", "pear"];

    let votes: boolean[] = [true, false, true];

    let oneAndAHalf: number = 1.5;
  });
  it("infers the type of a value if you don't specify a type", () => {
    let hello = "hello world";

    let isTypeScriptTime = true;

    let oneAndAHalf = 1.5;
  });
  it("discourages you from changing types", () => {
    let hello = "the string";

    // typings:expect-error
    hello = 5;
  });
});

describe("typed functions", () => {
  it("asks us to be explicit about our arguments", () => {
    // typings:expect-error
    function declareFavoriteFood(name, food) {
      return `${name}'s favorite food is ${food}`;
    }

    function typedDeclareFavoriteFood(name: string, food: string) {
      return `${name}'s favorite food is ${food}`;
    }
  });
  it("infers the return type of a function", () => {
    function typedDeclareFavoriteFood(name: string, food: string) {
      return `${name}'s favorite food is ${food}`;
    }
  });
});

describe("tinkering with annotations", () => {
  it("allows just one primitive", () => {
    type FixThisType = any;

    let aBool: FixThisType = true;

    // typings: expect-error
    let aString: FixThisType = "whatever";
  });

  it("allows unions of primitives", () => {
    type FixThisType = any;

    let aBool: FixThisType = true;

    let aString: FixThisType = "whatever";

    // typings: expect-error
    let aNull: FixThisType = null
  });

  it("describes a literal", () => {
    type FixThisType = any;

    let hello: FixThisType = "hello";

    // typings: expect-error
    let world: FixThisType = "world";

    // typings: expect-error
    let goodnight: FixThisType = "goodnight";

    // typings: expect-error
    let moon: FixThisType = "moon";
  })

  it("can union whatever you want", () => {
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
  })


});

describe("having a hard time demonstrating features without unions", () => {
  it("allows unions", () => {
    let stringOrNumber: string | number = "the string";

    stringOrNumber = 5;
  });
  it("can follow control flow", () => {
    let thing = Math.random() >= 0.5;
    let stringOrNumber: string | number = thing ? "a string" : 5;
    if (thing) {
      stringOrNumber;
    }
  });
});

describe("Literal types", () => {
  it("can follow control flow", () => {
    let fruit = "orange";
    // fruit: string
    if (fruit === "orange") {
      // fruit: "orange"
      fruit;
    } else {
      // fruit: string
      fruit;
    }
  });
  it("", () => {
    // Array, of...whatever
    let things = ["apple", 4, true];
    things.push(null); // Oh no! TypeScript has inferred that things can only be of a few types

    let anyThings: any[] = ["apple", 4, true];
    anyThings.push(["hello"]); // If TS isn't quite right about its inference, we can tell it what we meant

    function pickFruit(fruits: string[]) {
      return fruits[Math.random() * fruits.length];
    }
  });
  it("infers types for normal JS", () => {
    let orange = "orange";
    const apple = "apple";
  });
});

// Here's a function, here are some tests, convert it to ts, make the hate go away
// Using types to guide writing new code
// make this code increasingly typescripty
