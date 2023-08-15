import { AssertAssignable } from "../util";

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

test("and type annotations", () => {
  /*
   * Rather than letting TS infer the types, we can add
   * type annotations that explicitly describe the value type.
   */

  let hello: string = "hello world";

  let isTypeScriptTime: boolean = true;

  let oneAndAHalf: number = 1.5;

  let arrayOfFruits: string[] = ["apple", "orange", "pear"];

  let arrayOfBools: boolean[] = [true, false];
});

test("types enforce constraints", () => {
  /*
   * Once a variable has a type, the type checker will fail
   * if we try to assign it to a value of a different type.
   */
  let hello = "a string";

  /**
   * Throughout this workshop, we'll be playing with deliberately
   * creating TypeScript errors. Any time that you see the "@ts-expect-error"
   * annotation, the following line _should_ have a type error.
   */
  // @ts-expect-error
  hello = 5;

  /*
   * Type annotations are useful because they allow us to
   * express our intent to TypeScript, so it can catch mistakes.
   */
  // @ts-expect-error
  let shouldBeAString: string = true;
});

test("function types", () => {
  /*
   * Functions have types, too. Hover over "addOne."
   */
  function addOne(x: number) {
    return x + 1;
  }

  /**
   * And TypeScript knows the type of a value returned from a function.
   */
  let four = addOne(3);

  /**
   * Type annotations on function arguments are particularly
   * helpful, because they let the function implementor
   * know that they don't have to handle unsupported inputs;
   * TypeScript statically proves that nobody has called the
   * function with bad arguments.
   */
  // @ts-expect-error
  let notANumber = addOne("hello");

  /**
   * We're using a high TS strictness setting today. That means
   * that the type checker will insist that we type our arguments to functions.
   *
   * (This is a setting)
   */
  // @ts-expect-error
  function timesThree(x) {
    return x * 3;
  }

  timesThree("hello");

  /**
   * We can use (and tend to prefer) arrow function syntax in many cases:
   */
  let timesFour = (x: number) => x * 4;

  /**
   * Functions are values, so they can have type annotations just like
   * any other value.
   * The type of aNumberFunction is (x: number) => number, which is to say, a
   * function that takes a number and returns a number.
   */
  let aNumberFunction: (x: number) => number = timesFour;
});

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
  // @ts-expect-error
  apple.nooooo;

  /*
   * We can also define types inline. This variable is declared to have
   * a new, ad hoc object type before we even assign a value.
   *
   * Object type syntax looks a lot like object literal syntax:
   */
  let orange: { name: string; color: string } = {
    name: "orange",
    color: "orange",
  };

  // @ts-expect-error
  let notAFruit: { name: string; color: string } = { color: "red" };
  // @ts-expect-error
  let stillNotAFruit: { name: string; color: string } = "hello";
  // @ts-expect-error
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

  // @ts-expect-error
  let plate: Fruit = { size: "small", color: "blue" };

  /**
   * We can alias any valid type:
   */
  type AFunction = (x: number) => number;
  type APrimitive = string;
  type AFruit = Fruit;
});

test("compound types", () => {
  /**
   * Types can be constructed of other types.
   */

  type Fruit = {
    name: string;
    color: string;
  };

  /**
   * We can alias function types.
   */
  type JobDescriber = () => string;

  /**
   * We can assemble object types from any other simple or aliased types.
   */
  type Person = {
    name: string;
    favoriteFruit: Fruit;
    pets: string[];
    describeJob: JobDescriber;
  };

  let Kaitie: Person = {
    name: "Kaitie",
    favoriteFruit: {
      name: "papaya",
      color: "yellow",
    },
    pets: ["Friday", "Chili"],
    describeJob: () => {
      return "I teach kids about nature!";
    },
  };

  let Kaelynn: Person = {
    name: "Kaelynn",
    favoriteFruit: {
      name: "pear",
      color: "green",
    },
    pets: [],
    describeJob: () => {
      return "I build bridges!";
    },
  };
});

test("supersets and structural compatibility", () => {
  type FoodItem = {
    name: string;
    cost: number;
  };

  let apple = {
    name: "apple",
    cost: 2,
  };

  function priceStatement(item: FoodItem) {
    return `That ${item.name} will be $${item.cost}`;
  }

  priceStatement(apple);

  type FlavoredFoodItem = {
    name: string;
    cost: number;
    flavorProfile: string;
  };
  /*
   * The type FlavoredFoodItem has a superset of the properties
   * of FoodItem, so we can pass a FlavoredFoodItem anywhere
   * that we expect a FoodItem.
   */
  let cheezits: FlavoredFoodItem = {
    name: "Box of Cheezits",
    cost: 4,
    flavorProfile: "cheesy",
  };
  let cheesyCheezits = priceStatement(cheezits);

  /*
   * But, we can't pass a FoodItem where we expect a FlavoredFoodItem.
   */
  function flavoredFoodPriceStatement(item: FlavoredFoodItem) {
    return `That ${item.flavorProfile} ${item.name} will be $${item.cost}.`;
  }

  // But regular food isn't assignable to a type that expects flavored food
  // @ts-expect-error
  let noApples = flavoredFoodPriceStatement(apple);

  // In the future, we'll use AssertAssignable to prove structural compatibility or lack thereof:
  type _t1 = AssertAssignable<FoodItem, FlavoredFoodItem>;
  // @ts-expect-error
  type _t2 = AssertAssignable<FlavoredFoodItem, FoodItem>;
});

test("classes", () => {
  class Point {
    constructor(public readonly x: number, public readonly y: number) {}

    toString() {
      return `(${this.x}, ${this.y})`;
    }
  }

  // A class gives us a runtime object we can use to construct points with the new keyword
  const origin = new Point(0, 0);
  expect(origin.x).toEqual(0);
  expect(origin.y).toEqual(0);
  expect(origin.toString()).toEqual("(0, 0)");

  // We can also do a runtime test to see if an object was constructed with Point
  expect(origin instanceof Point).toBeTruthy();

  // TypeScript also gives us a type that describes the shape of valid Point instances.
  // This type does not require object be constructed with the class, only that they're
  // structurally compatible, just like in the example above.
  const aPointLikeThing: Point = {
    x: 1,
    y: 1,
    toString: () => "(1,1)",
  };
  // As you'd expect, TypeScript isn't happy if you try to claim incompatible objects are Point.
  const aNotPointLikeThing: Point = {
    // @ts-expect-error
    x: "1",
    y: 1,
    // @ts-expect-error
    toString: () => null,
  };

  // But things that are valid Point are not necessarily instances of the class.
  // The type and the runtime machinery are separate in TypeScript!
  expect(aPointLikeThing instanceof Point).toBeFalsy();
});

test("the 'any' type", () => {
  /*
   * TS uses the type 'any' for a type that could be anything.
   *
   * Values of this type are just like JavaScript. There are no static
   * constraints on what can be done with them, and no assistance
   * from the IDE
   */
  let anything: any = "foo";
  anything = true;
  anything = 5;

  /*
   * Our strictness level doesn't let variables implicitly be any.
   * Untyped parameters in TypeScript implicitly get the type `any`.
   * Thus, we've configured TypeScript in a way that disallows normal
   * JavaScript function declaration, but this is a team choice.
   */
  // @ts-expect-error
  function declareFavoriteFood(name, food) {
    return `${name}'s favorite food is ${food}`;
  }

  /* But it does allow _explicit_ any for function args: */
  function typedDeclareFavoriteFood(name: any, food: any) {
    return `${name}'s favorite food is ${food.toLocaleUpperCase()}`;
  }
  /*
   * Using 'any' is risky, because it effectively disables
   * type checking:
   */
  expect(() => {
    let thisWillBlowUp = typedDeclareFavoriteFood(null, 2);
  }).toThrowError();
});

/**  🚨 WHEN YOU UNCOMMENT THESE TESTS: 🚨
 *   To uncomment a single test, uncomment from one star-line to the next.
 *   Have `npm run exercise-1` running in your terminal. When you uncomment
 *   a test and save the file, you should see a test failure in your terminal.
 *   Keep working until you save the file and see the tests pass in your terminal.
 *   Good luck!
 *
 *  VS Code shortcut: mac: cmd-/    linux/windows: ctrl-/
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
//   // @ts-expect-error
//   let no: FixThisType = false;
// })
// /**************************************************************************/

// /**************************************************************************/
// test("Writing some function types", ()=>{
//   /*
//    * ======================================================
//    * TODO: Change FixThisType from "any" to a type that allows 
//    * a function that takes a string and returns a string.
//    * ======================================================*/
//   type FixThisType = any;
//   let sayHello: FixThisType = (name: string) => { return `Hello, ${name}.`}
//   let sayGoodbye: FixThisType = (name: string) => { return `Goodbye, ${name}.`}
//   // @ts-expect-error
//   let isFido: FixThisType = (name: string) => { return name === "Fido"};
// })
// /**************************************************************************/

/**************************************************************************/
// test("Writing a function with help from TS", () => {
//   /*
//    * ======================================================
//    * TODO: Implement classifyFruit to return the following when
//    * color is:
//    *     "red"    => "apple"
//    *     "yellow" => "banana"
//    *     "orange" => "orange"
//    *     other    => "I don't know that fruit"
//    * Take note of when the type error goes away!
//    * ======================================================*/
//   function classifyFruit(color: string): string {
//   }

//   expect(classifyFruit("red")).toEqual("apple")
//   expect(classifyFruit("yellow")).toEqual("banana")
//   expect(classifyFruit("orange")).toEqual("orange")
//   expect(classifyFruit("purple")).toEqual("I don't know that fruit")
// });

// /**************************************************************************/
// test("Writing some object types", () => {
//   /*
//    * ======================================================
//    * TODO: Update FixThisType to allow objects with a kind
//    * and a disposition.
//    * ======================================================*/
//   type FixThisType = any;
//   let nellie: FixThisType = { kind: "dog", disposition: "good" }
//   let roxy: FixThisType = { kind: "dog", disposition: "aloof" }
//   // @ts-expect-error
//   let friday: FixThisType = { kind: "cat", fluffy: "very" }
//   // @ts-expect-error
//   let cauchy: FixThisType = { kind: "cat", fluffy: "not really" }
// })
// /**************************************************************************/

// /**************************************************************************/
// test("Structural compatibility", () => {
//   /*
//    * ======================================================
//    * TODO: Define a Pet and a Cat type such that Cat is
//    * assignable to Pet, but Pet isn't assignable to
//    * Cat. Use whatever properties you like!
//    * ======================================================*/
//   type Pet = {};
//   type Cat = {};

//   type _t1 = AssertAssignable<Pet, Cat>;
//   // @ts-expect-error
//   type _t2 = AssertAssignable<Cat, Pet>;
// })
// /**************************************************************************/
