describe("TypeScript Basics", () => {
  test("has a few primative types", () => {
    let hello: string = "hello world";

    let isTypeScriptTime: boolean = true;

    let oneAndAHalf: number = 1.5;
  });
  test("as well as some collection types", () => {
    let fruits: string[] = ["apple", "orange", "pear"];

    let votes: boolean[] = [true, false, true];

    let oneAndAHalf: number = 1.5;
  });
  test("infers the type of a value if you don't specify a type", () => {
    let hello = "hello world";

    let isTypeScriptTime = true;

    let oneAndAHalf = 1.5;
  });
  test("discourages you from changing types", () => {
    let hello = "the string";

    // typings:expect-error
    hello = 5;
  });
});

describe("typed functions", () => {
  test("asks us to be explicit about our arguments", () => {
    // typings:expect-error
    function declareFavoriteFood(name, food) {
      return `${name}'s favorite food is ${food}`;
    }

    function typedDeclareFavoriteFood(name: string, food: string) {
      return `${name}'s favorite food is ${food}`;
    }
  });
  test("infers the return type of a function", () => {
    function typedDeclareFavoriteFood(name: string, food: string) {
      return `${name}'s favorite food is ${food}`;
    }
  });
});

describe("type guards", () => {
  test("checks whether a thing is a type", () => {});
});

describe("tinkering with annotations", () => {
  test("we can declare our own types made up of primitives", () => {
    type MySpecialString = string;

    function sayHello(name: string) {
      console.log(`Hello, ${name}!`);
    }
    // And we can use them where they're compatible with other types
    let specialName: MySpecialString = "Dixie the Good";
    sayHello(specialName);

    // But, notice that declaring a named type doesn't inherently change the way the type operates
    function specialSayHello(name: MySpecialString) {
      console.log(`Hello, ${specialName}, Your Excellence.`);
    }

    let aCommonerName: string = "John";
    specialSayHello(aCommonerName); // No type error
  });

  test("allows just one primitive", () => {
    type FixThisType = any;

    let aBool: FixThisType = true;

    // typings: expect-error
    let aString: FixThisType = "whatever";
  });

  test("Those types can also be literals", () => {
    type ALiteralString = "just this one";

    // typings: expect-error
    let notThatLiteral: ALiteralString = "some other string";
  });

  test("describes a literal", () => {
    type FixThisType = any;

    let hello: FixThisType = "hello";

    // typings: expect-error
    let world: FixThisType = "world";

    // typings: expect-error
    let goodnight: FixThisType = "goodnight";

    // typings: expect-error
    let moon: FixThisType = "moon";
  });

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

  test("infers different types based on the keywords you use to declare variables", () => {
    let mutable = "hello";
    if (mutable !== "world") {
      mutable.slice(1);
    }

    const immutable = "goodnight";
    if (immutable !== "goodnight") {
      // typings: expect-error
      immutable.slice(1);
    }
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

describe("Literal types", () => {
  test("can follow control flow", () => {
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

// Here's a function, here are some tests, convert it to ts, make the hate go away
// Using types to guide writing new code
// make this code increasingly typescripty

describe("Object types", () => {
  test("interfaces describe objects", () => {
    interface FoodItem {}
  });
});
