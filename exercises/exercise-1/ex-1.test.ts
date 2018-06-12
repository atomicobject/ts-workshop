import { AssertAssignable } from "../util";

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
    interface FoodItem {
      name: string,
      cost: number
    }
    
    let muffin: FoodItem = {
      cost: 2, name: "Muffin"
    }
  });
  
  test("structural compatibility", () => {
    // Type annotations are just there to help us describe object shapes
    interface DeliItem {
      name: string,
      cost: number
    }
    interface BakeryItem {
      name: string,
      cost: number,
    }

    let lunchMeat: DeliItem = {
      name: "Sliced Turkey",
      cost: 3
    }

    let croissant: BakeryItem = {
      name: "Croissant",
      cost: 2
    }

    function bakeryPriceStatement(item: BakeryItem) {
      return `That fresh-baked ${item.name} will be $${item.cost}.`
    }

    function deliPriceStatement(item: DeliItem){
      return `That juicy ${item.name} will be $${item.cost}.`
    }

    // We can substitute one type for another anytime they're structurally compatible
    let freshBakedCheese = bakeryPriceStatement(lunchMeat)
    let juicyCroissant = deliPriceStatement(croissant)

    // Or even anonymous types
    let mysteryMeat = deliPriceStatement({name: "Mystery Meat", cost: 1})

    
    enum Flavor {
      Sweet = "sweet", Sour = "sour", Salty = "salty", Bitter="bitter", Savory = "savory"
    }
    interface FlavoredFoodItem {
      name: string,
      cost: number,
      flavorProfile: Flavor
    }

    let cheezits: FlavoredFoodItem = {name: "Box of Cheezits", cost: 4, flavorProfile: Flavor.Salty}

    // Flavored food is structurally compatible with regular food
    let freshBakedCheezits = bakeryPriceStatement(cheezits)

    function flavoredFoodPriceStatement(item: FlavoredFoodItem){
      return `That ${item.flavorProfile} ${item.name} will be ${item.cost}.`
    }

    // But regular food isn't assignable to a type that expects flavored food
    // typings:expect-error
    let noCroissants = flavoredFoodPriceStatement(croissant)

    // In the future, we'll use AssertAssignable to prove structural compatibility or lack thereof:
    type _t1 = AssertAssignable<BakeryItem, FlavoredFoodItem>
    // typings:excpect-error
    type _t2 = AssertAssignable<BakeryItem, FlavoredFoodItem>
  })
});
