import { AssertAssignable } from "../util";

test("literal types", () => {
  /* Type aliases get more useful when we move beyond primative types. */
  type ALiteralString = "just this one";

  let theRightLiteral: ALiteralString = "just this one";

  // typings:expect-error
  let notThatLiteral: ALiteralString = "some other string";
});

test("infers different types based on keywords", () => {
  let regularString = "hello";

  /*
   * ======================================================
   * TODO: Check out the type of literalString! It's a string literal,
   * which means TS knows it can only be this exact value.
   * ======================================================*/
  const literalString = "goodnight";

  /* This holds for other types of primatives, too. */
  const literalBool = true;
  const literalNumber = 2;
});

test("describes a literal", () => {
  /*
   * ====================================================== 
   * TODO: Update FixThisType to allow only a single literal.
   * ======================================================*/
  type FixThisType = "hello";

  let hello: FixThisType = "hello";

  // typings:expect-error
  let world: FixThisType = "world";

  // typings:expect-error
  let goodnight: FixThisType = "goodnight";

  // typings:expect-error
  let moon: FixThisType = "moon";
});

// test("literals in control flow", () => {
//   /*
//    * TS understands control flow. 
//    * ======================================================
//    * TODO: Take a look at the type of 'fruit' inside of these blocks.
//    * ======================================================*/
//   function isBanana(fruit: string) {
//     if (fruit === "banana") {
//       return `${fruit} is a banana`;
//     } else {
//       return ` ${fruit} is not a banana`;
//     }
//   }
// });

// test("manually creating union types", () => {
//   /*
//    * We can describe union types ourselves, and
//    * we can union together any valid types. 
//    * ======================================================
//    * TODO: Update FixThisType to allow strings or numbers.    
//    * ======================================================*/
//   type FixThisType = any;

//   let aString: FixThisType = "hello";
//   let anotherString: FixThisType = "world";
//   let aNumber: FixThisType = 2;
//   let anotherNumber: FixThisType = 4;

//   // typings:expect-error
//   let aBool: FixThisType = true;
// });

// test("this allows us to constrain types in interesting ways", () => {
//   /*
//    * Being able to union together any valid types means
//    * literals, too. 
//    * ======================================================
//    * TODO: Update FixThisType to make this type test pass.
//    * ======================================================*/
//   type FixThisType = any;

//   let aTrue: FixThisType = true;

//   let aString: FixThisType = "this string";

//   // typings:expect-error
//   let someOtherString: FixThisType = "not that string";
//   // typings:expect-error
//   let aNull: FixThisType = null;
//   // typings:expect-error
//   let aFalse: FixThisType = false;
// });

// test("unions can be between types of any shape", () => {
//   /*
//    * ======================================================
//    * TODO: Update Earthlings to allow these values:
//    * ======================================================*/
//   type Earthlings = { type: "animal" | "vegetable" | "mineral"; name: string };
//   let dog: Earthlings = { type: "animal", name: "Fido" };
//   let cat: Earthlings = { type: "animal", name: "Suki" };
//   let zucchini: Earthlings = {
//     type: "vegetable",
//     name: "Zucchini"
//   };
//   let rose: Earthlings = { type: "vegetable", name: "Rose" };
//   let quartz: Earthlings = { type: "mineral", name: "Quartz" };
//   let diamond: Earthlings = { type: "mineral", name: "Diamond" };

//   /*
//    * ======================================================
//    * TODO: Update Earthlings to allow these values:
//    * ======================================================*/
//   type Aliens = { homePlanet: string; phaser: boolean };

//   let alienBlaxnor: Aliens = {
//     homePlanet: "Jupiter",
//     phaser: true
//   };
//   let alienXanter: Aliens = {
//     homePlanet: "Mars",
//     phaser: false
//   };

//   /*
//    * ======================================================
//    * TODO: Confirm that EarthlingsAndAliens disallows these types
//    * ======================================================*/
//   type EarthlingsAndAliens = Earthlings & Aliens;
//   // typings:expect-error
//   let star: EarthlingsAndAliens = "Sirius";

//   // typings:expect-error
//   let galaxy: EarthlingsAndAliens = {
//     type: "LocalGalaxy",
//     name: "Milky Way"
//   };

//   // typings:expect-error
//   let asteroid: EarthlingsAndAliens = {
//     homePlanet: false,
//     name: "Asteroid"
//   };
// });

// test("basic intersection", () => {
//   /*
//    * Intersections allow us to combine type definitions to
//    * create a single type with all the attributes of both types.
//    * This is useful when we have some set of properties that are
//    * shared among many different types. */
//   type Cat = {
//     animalType: "cat";
//     breedName: string;
//     coloration: "tabby" | "solid-colored" | "spotted";
//   };
//   type Dog = {
//     animalType: "dog";
//     breedName: string;
//     size: "teacup" | "toy" | "standard" | "huge";
//   };
//   type PetInfo = { name: string; familyName: string };

//   type PetCat = PetInfo & Cat;
//   type PetDog = PetInfo & Dog;

//   /*
//    * ======================================================
//    * TODO: Describe a valid PetCat and PetDog below.
//    * HINT: Use autocompletion to help you fill in the properties. 
//    * ======================================================*/
//   const sukiTheCat: PetCat = {};
//   const finnTheDog: PetDog = {};

//   function announcePet(pet: PetInfo) {
//     return `This is ${pet.familyName} family pet, ${pet.name}.`;
//   }

//   /*
//    * Notice that announcePet will take any object that's
//    * structurally compatible with type Pet. */
//   announcePet(sukiTheCat);
//   announcePet(finnTheDog);
// });

// test("type narrowing and exhaustiveness", () => {
//   function classify(n: number) {
//     if (n < 0) return "negative";
//     if (n > 0) return "positive";
//     return "zero";
//   }

//   /*
//    * TS can narrow types as we move through control flow.
//    * This makes it easy to tell if we've handled all cases.
//    * 
//    * ======================================================
//    * TODO: Try commenting out one of the return statements in
//    *       describeNumber and see what happens.
//    * ======================================================*/
//   function describeNumber(num: number): string {
//     const value = classify(3);

//     if (value === "negative") {
//       value;
//       return `${num} is a negative number`;
//     } else if (value === "positive") {
//       value;
//       return `${num} is a positive number`;
//     } else {
//       value;
//       return `${num} is zero`;
//     }
//   }

//   /*
//    * ======================================================
//    * TODO: Change ONLY the input FruitColor to prove that the
//    * function below will always return one of these two strings.
//    * ======================================================*/
//   type FruitColor = string;

//   function appleOrBanana(fruitColor: FruitColor): "apple" | "banana" {
//     switch (fruitColor) {
//       case "red":
//         return "apple";
//       case "yellow":
//         return "banana";
//     }
//   }

//   /*
//    * So, if we carefully constrain our input and output types,
//    * TypeScript can do a lot of the work for us: no more
//    * checking if a property exists, or for "this shouldn't happen"
//    * states. We validate object shapes once - when we create them -
//    * and TypeScript proves that our constraints are met throughout
//    * the codebase.
//    */
// });

// test("working with discriminated unions", () => {
//   /*
//    * Let's take a look at the HotDrink type described in the slides.
//    */
//   type Tea = {
//     type: "tea"; // Discriminant field
//     style: "green" | "black" | "herbal";
//     name: string;
//   };
//   type Coffee = {
//     type: "coffee"; // Discriminant field
//     roast: "dark" | "medium" | "light";
//     name: string;
//   };

//   type HotDrink = Tea | Coffee;

//   /*
//    * ======================================================
//    * TODO: Write a function that takes a HotDrink and 
//    * returns the style, for tea, or the roast, for coffee.
//    * ======================================================
//    */
//   function describe(
//     drink: HotDrink
//   ): "green" | "black" | "herbal" | "dark" | "medium" | "light" {}

//   const rachaelsDrink: Tea = {name: "Chamomile", style: "herbal", type: "tea"}
//   const drewsDrink: Coffee = {name: "Sparrows Blend", roast: "light", type: "coffee"}

//   expect(describe(rachaelsDrink)).toEqual("herbal");
//   expect(describe(drewsDrink)).toEqual("light");
// });

// test("build a discriminated union", () => {
//   /*
//    * TS can narrow types as we move through control flow. When
//    * we're handling different cases of a union type, it's helpful
//    * to have a single property that is shared between all the cases,
//    * but has a different value for each case in the union. This allows
//    * us to use type narrowing to determine which case we're dealing with.
//    *
//    * This is great for when we have a bunch of similar objects with
//    * different constraints.
//    *
//    * ======================================================
//    * TODO: Change FruitType so this test passes- so that 
//    * the type proves that apples are red and can be polished, 
//    * and bananas are yellow and can be peeled.
//    * ======================================================
//    */
//   type FruitType = any;

//   function doSomething(fruit: FruitType) {
//     switch (fruit.type) {
//       case "apple":
//         // NOTE: typeof fruit is the type representing the type of the fruit variable.
//         // We'll be using this to check that variables are inferred to the right type.

//         // Assert that fruit is statically known to have the color "red"
//         type _t1 = AssertAssignable<{ color: "red" }, typeof fruit>;
//         // typings:expect-error
//         type _t2 = AssertAssignable<{ color: "yellow" }, typeof fruit>;

//         fruit.polish();
//         // typings:expect-error
//         fruit.peel();
//         break;
//       case "banana":
//         fruit;
//         type _t3 = AssertAssignable<{ color: "yellow" }, typeof fruit>;
//         // typings:expect-error
//         type _t4 = AssertAssignable<{ color: "red" }, typeof fruit>;

//         fruit.peel();
//         // typings:expect-error
//         fruit.polish();
//         break;
//     }
//   }
// });

// test("unions & intersections", () => {
//   /*
//    * Unions and intersections can be combined to make complex types.
//    * Let's revisit our pet types.
//    */
//   type Cat = {
//     animalType: "cat";
//     breedName: string;
//     coloration: "tabby" | "solid-colored" | "spotted";
//   };
//   type Dog = {
//     animalType: "dog";
//     breedName: string;
//     size: "teacup" | "toy" | "standard" | "huge";
//   };
//   type PetInfo = { name: string; familyName: string };

//   /*
//    * ====================================================== 
//    * TODO: Write a type that describes both pet cats and pet dogs.
//    * ======================================================
//    */
//   type Pet = any;

//   /*
//    * What if we want to be able to announce cats and dogs in more detail?
//    * ======================================================
//    * TODO: Write a function that takes pet cats and pet dogs and announces
//    * them in detail. Use the tests below to drive your implementation.
//    * ======================================================
//    */
//   function announcePetDetail(pet: Pet) {}

//   expect(
//     announcePetDetail({
//       animalType: "cat",
//       breedName: "American Shorthair",
//       coloration: "tabby",
//       name: "Isabow",
//       familyName: "Robb"
//     })
//   ).toEqual(
//     "This is the Robb family cat, Isabow the tabby American Shorthair."
//   );
//   expect(
//     announcePetDetail({
//       animalType: "dog",
//       breedName: "Pitbull",
//       size: "standard",
//       name: "Stella",
//       familyName: "Brockett"
//     })
//   ).toEqual("This is the Brockett family dog, Stella the standard Pitbull.");

//   /* Extra credit: Find a different way to describe your Pet type. */
//   type AltPet = any;

//   type _t1 = AssertAssignable<AltPet, Pet>;
//   type _t2 = AssertAssignable<Pet, AltPet>;
// });
