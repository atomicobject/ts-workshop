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

  let aNull = null;

  let anUndefined = undefined;
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

  let aNull: null = null;

  let anUndefined: undefined = undefined;
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
  let orange: { name: string; color: string } = { name: "orange", color: "orange" };

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
   * Type annotations get more powerful when we start using
   * them with functions. Check out the type of declareFavoriteFood.
   */
  function declareFavoriteFood(name: string, food: string): string {
    return `${name}'s favorite food is ${food}.`;
  }
  /* TS knows the return type of declareFavoriteFood. */
  let waldosFavorite = declareFavoriteFood("Waldo", "chips");
  /*
   * If we try to pass a value of the wrong type as an arg, we'll 
   * get an error- just like we did when assigning a variable 
   * to the wrong type.
   */
  // typings:expect-error
  let invalidInput = declareFavoriteFood("Waldo", true);

  /*
   * We can describe the type of the _function_, too. The syntax 
   * looks a lot like an arrow function:
   */
  let declarationFunction: (name: string, food: string) => string = declareFavoriteFood;


  /*
  * And we can alias function types just like any other:
  */
  type ExplanationFunction = (name: string, food: string) => string;

  /*
  * When TypeScript sees a lambda in a position where it knows the exact type,
  * type annotations on the function arguments aren't necessary.
  */
  let declareNotLikeFood: ExplanationFunction = (name, food) => 
    `${name} doesn't like ${food}.`;
   
  /*
   * Being able to describe function signatures as types
   * makes it much easier to treat functions like data. 
   */
  function announceFeelings(foodFeelings: ExplanationFunction) {
    const result = foodFeelings("Rachael", "bell peppers");
    return `I asked, and ${result}`;
  }

  expect(announceFeelings(declareFavoriteFood)).toEqual(
    "I asked, and Rachael's favorite food is bell peppers."
  );
  expect(announceFeelings(declareNotLikeFood)).toEqual(
    "I asked, and Rachael doesn't like bell peppers."
  );
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
  * so JavaScript-style functions aren't allowed. (This is a
  * setting.)
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
  expect(() => { let thisWillBlowUp = typedDeclareFavoriteFood(null, 2); }).toThrowError()

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

// test("Writing our own types", () => {
//   /* 
//    * ======================================================
//    * TODO: Update FixThisType to allow strings or numbers.
//    * ======================================================*/
//   type FixThisType = any;
//   const jaime: FixThisType = "Jaime"
//   const meredith: FixThisType = "Meredith"
//   // typings:expect-error
//   const yes: FixThisType = true;
// })

// test("Writing some object types", () => {
//   /*
//    * ======================================================
//    * TODO: Update FixThisOneToo to allow objects with a type
//    * and a disposition.
//    * ======================================================*/
//   type FixThisOneToo = any;
//   const nellie = { type: "dog", disposition: "good" }
//   const roxy = { type: "dog", disposition: "aloof" }
//   // typings:expect-error
//   const friday = { type: "cat", fluffy: "very" }
//   // typings:expect-error
//   const cauchy = { type: "cat", fluffy: "not really" }
// })

// test("Writing some function types", ()=>{
//   /*
//    * ======================================================
//    * TODO: Update AndThisOne to allow a function that takes
//    * a string and returns a string.
//    * ======================================================*/
//   type AndThisOne = any;
//   const sayHello: AndThisOne = (name: string) => { return `Hello, ${name}.`}
//   const sayGoodbye: AndThisOne = (name: string) => { return `Goodbye, ${name}.`}
//   // typings:expect-error
//   const isFido: AndThisOne = (name: string) => { return name === "Fido"};
// })
