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
   * type annotations that explicitly describe the variable type.
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

  // typings:expect-error
  hello = 5;

  /*
   * Type annotations are useful because they allow us to
   * express our intent to TypeScript, so it can catch mistakes.
   */
  // typings:expect-error
  let shouldBeAString: string = true;
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

test("interfaces", () => {
  /*
   * Interfaces are another way to describe object types.
   * Functionally speaking, they operate just like a type
   * alias for an object. There are some subtle differences
   * in how error messages are formatted, and a few other
   * differences we'll touch on later, but for now you can
   * think of these syntaxes as interchangeable.
   */
  type FoodItemAlias = {
    name: string;
    cost: {
      dollars: number;
      cents: number;
    };
  };

  interface FoodItemInterface {
    name: string;
    cost: {
      dollars: number;
      cents: number;
    };
  }

  let muffin: FoodItemAlias = {
    cost: { cents: 50, dollars: 3 },
    name: "Muffin"
  };
  let altMuffin: FoodItemInterface = {
    cost: { cents: 50, dollars: 3 },
    name: "Muffin"
  };

  // typings:expect-error
  let notAFoodItem: FoodItemAlias = {
    name: "plate"
  };

  /*
   * Remember that you can use any kind of type definition
   * anywhere that you would use the others.
   */
  type Money = {
    dollars: number;
    cents: number;
  };

  type AltFoodItem = {
    name: string;
    cost: Money;
  };

  let altAltMuffin: AltFoodItem = {
    cost: { cents: 50, dollars: 3 },
    name: "Muffin"
  };
});

test("function types", () => {
  /*
   * Functions have types, too. Hover over "addOne."
   */
  function addOne(x: number) {
    return x + 1;
  }

  /*
   * And TypeScript knows the type of values returned from a function.
   */
  let four = addOne(3); // => 4

  /*
   * A JAVASCRIPT INTERLUDE!
   * In JavaScript, there are two main syntaxes for declaring
   * functions. The above is one. Call it a "function expression."
   * Below is another. We call this "fat arrow syntax."
   */
  let subtractOne = (x: number) => {
    return x - 1;
  };

  let two = subtractOne(3); // => 2

  /*
   * There are some subtle differences between these styles,
   * but we won't need to worry about them for this workshop.
   * Note that the subtractOne looks like a variable declaration-
   * functions are first-class objects in JavaScript, so we
   * can do all the same things with them that we would with
   * any other variable...
   */
  let subtractor = subtractOne;
  let adder = addOne;

  /*
   * ...including passing them as arguments to _other_ functions.
   */
  let doSomething = (func: (x: number) => number, y: number) => {
    return func(y);
  };

  let seven = doSomething(adder, 6); // => 7
  let five = doSomething(subtractor, 6); // => 5

  /*
   * In these tests, we can make assertions about values.
   */
  expect(seven).toEqual(7);
  expect(five).toEqual(5);

  /*
   * JavaScript also has a handy shorthand for "just return
   * this value": Remove the curly braces and the "return".
   */
  let shorthandFunction = (x: number) => x;

  /*
   * Note that if you're using this style to return an object,
   * you'll need to wrap the return value in parens.
   */
  let shorthandObjectReturner = () => ({ name: "Laura", style: "cozy" });

  expect(shorthandObjectReturner()).toEqual({ name: "Laura", style: "cozy" });

  /*
   * One last snippet of JavaScript syntax: we'll be using string
   * interpolation, which lets us refer to variables inside of
   * strings. This is handy for formatting.
   */
  let name = "Rachael";
  let greeting = `Hello, ${name}!`;
  expect(greeting).toEqual("Hello, Rachael!");

  /*
   * Okay, JS interlude done!
   * BACK TO TYPESCRIPT!
   * Type annotations get more powerful when we start using
   * them with functions. Check out the type of declareFavoriteFood.
   */
  function declareFavoriteFood(name: string, food: string): string {
    return `${name}'s favorite food is ${food}.`;
  }

  /*
   * As before, using a type annotation can protect us from making
   * mistakes- this time in a function implementation.
   */
  function bustedFunction(name: string, food: string): string {
    // typings:expect-error
    return 4;
  }

  /*
   * The same goes for function args- TypeScript won't let us pass
   * bad args into a function.
   */
  // typings:expect-error
  let invalidInput = declareFavoriteFood("Waldo", true);

  /*
   * As with the primitive and object types, we can manually
   * annotate the type of a function. The syntax looks a lot
   * like an arrow function:
   */
  let declarationFunction: (
    name: string,
    food: string
  ) => string = declareFavoriteFood;

  /*
   * And we can alias function types just like any other:
   */
  type ExplanationFunction = (name: string, food: string) => string;

  let declareNotLikeFood: ExplanationFunction = (name: string, food: string) =>
    `${name} doesn't like ${food}.`;

  // typings:expect-error
  let notAnExplanationFunction: ExplanationFunction = (num: number) => num;

  /*
   * Being able to describe function signatures as types
   * makes it much easier to treat functions like data safely.
   */
  function announce(foodFeelings: ExplanationFunction) {
    let result = foodFeelings("Rachael", "bell peppers");
    return `I asked, and ${result}`;
  }

  expect(announce(declareFavoriteFood)).toEqual(
    "I asked, and Rachael's favorite food is bell peppers."
  );
  expect(announce(declareNotLikeFood)).toEqual(
    "I asked, and Rachael doesn't like bell peppers."
  );

  /*
   * Remember that ONLY structural compatibility matters in TypeScript.
   */
  function pizzaRuiner(name: string, toppings: string) {
    return `${name} thinks that ${toppings} are the best way to ruin a pizza.`;
  }

  expect(announce(pizzaRuiner)).toEqual(
    "I asked, and Rachael thinks that bell peppers are the best way to ruin a pizza."
  );

  /*
   * And if a value isn't structurally compatible with a type,
   * we can't use it where we expect that type.
   */
  let foo = () => 5;

  // typings:expect-error
  announce(foo);
});

test("the 'any' type", () => {
  /*
   * TS uses the keyword 'any' for a type that could be anything.
   *
   * Values of this type are just like JavaScript. There's no compile-
   * time constraints on what can be done with them.
   */
  let anything: any = "foo";
  anything = true;
  anything = 5;

  /*
   * Our strictness level doesn't let variables explicitly be any,
   * so JavaScript-style function declarations aren't allowed.
   * (This is a setting.)
   */
  // typings:expect-error
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

  /* We'll come back to 'any' in the next exercise. */
});

test("supersets and structural compatibility", () => {
  interface FoodItem {
    name: string;
    cost: number;
  }

  let apple: FoodItem = {
    name: "apple",
    cost: 2
  };
  function priceStatement(item: FoodItem) {
    return `That ${item.name} will be $${item.cost}`;
  }

  interface FlavoredFoodItem {
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

// /**************************************************************************/
// test("Writing our own types", () => {
//   /*
//    * ======================================================
//    * TODO: Update FixThisType to allow strings only.
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
//   type FixThisOneToo = any;
//   let nellie: FixThisOneToo = { kind: "dog", disposition: "good" }
//   let roxy: FixThisOneToo = { kind: "dog", disposition: "aloof" }
//   // typings:expect-error
//   let friday: FixThisOneToo = { kind: "cat", fluffy: "very" }
//   // typings:expect-error
//   let cauchy: FixThisOneToo = { kind: "cat", fluffy: "not really" }
// })
// /**************************************************************************/

// /**************************************************************************/
// test("Writing some function types", ()=>{
//   /*
//    * ======================================================
//    * TODO: Update AndThisOne to allow a function that takes
//    * a string and returns a string.
//    * ======================================================*/
//   type AndThisOne = any;
//   let sayHello: AndThisOne = (name: string) => { return `Hello, ${name}.`}
//   let sayGoodbye: AndThisOne = (name: string) => { return `Goodbye, ${name}.`}
//   // typings:expect-error
//   let isFido: AndThisOne = (name: string) => { return name === "Fido"};
// })
