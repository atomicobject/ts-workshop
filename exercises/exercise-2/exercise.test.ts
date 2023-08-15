import { AssertAssignable } from "../util";

/** npm run exercise-2
 * 
 * Just like at the end of exercise 2, work through this file by uncommenting
 * tests and changing the definition of `FixThisType` to make the type errors 
 * match the assertions.
 * 
 * Remember, any line that is preceded by a `@ts-expect-error` comment
 * should have a red squiggly/type error after you've defined the type properly.
 * 
 **/

test("literal types", () => {
  /* Type aliases get more useful when we move beyond primative types. */
  type ALiteralString = "just this one";

  /** We can assign the exact string to a variable of ALiteralString */
  let theRightLiteral: ALiteralString = "just this one";

  /** But we cannot assign any other string! */
  // @ts-expect-error
  let notThatLiteral: ALiteralString = "some other string";
});

test("infers different types based on keywords", () => {

  /** Since `regularString` is not a constant, TypeScript allows it to be any string */
  let regularString = "hello";

  /*
   * But check out the type of literalString! It's a string literal,
   * which means TS knows it can only be this exact value. It does this
   * since literalString is a constant and will never be anything else.
   */
  const literalString = "goodnight";

  /* This holds for other types of primatives, too. */
  const literalBool = true;
  const literalNumber = 2;
});


// /**************************************************************************/
// test("describes a literal", () => {
//   /*
//    * ======================================================
//    * TODO: Update FixThisType to allow only a single literal.
//    * ======================================================*/
//   type FixThisType = string;

//   let hello: FixThisType = "hello";

//   // @ts-expect-error
//   let world: FixThisType = "world";

//   // @ts-expect-error
//   let goodnight: FixThisType = "goodnight";

//   // @ts-expect-error
//   let moon: FixThisType = "moon";
// });
// /**************************************************************************/

// /**************************************************************************/
// test("manually creating union types", () => {
//   /*
//    * We can describe union types ourselves, and
//    * we can union together any valid types.
//    * ======================================================
//    * TODO: Update FixThisType to allow strings or numbers.
//    * Use the `|` character to union types together
//    * ======================================================*/
//   type FixThisType = any;

//   let aString: FixThisType = "hello";
//   let anotherString: FixThisType = "world";
//   let aNumber: FixThisType = 2;
//   let anotherNumber: FixThisType = 4;

//   // @ts-expect-error
//   let aBool: FixThisType = true;
// });
// /*************************************************************************/

// /**************************************************************************/
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

//   // @ts-expect-error
//   let someOtherString: FixThisType = "not that string";
//   // @ts-expect-error
//   let aNull: FixThisType = null;
//   // @ts-expect-error
//   let aFalse: FixThisType = false;
// });
// /**************************************************************************/

// /**************************************************************************/
// test("unions can be between types of any shape", () => {
//   /*
//    * ======================================================
//    * TODO: Update Earthlings to allow these values:
//    * ======================================================*/
//   type Earthling = {};
//   let dog: Earthling = { type: "animal", name: "Fido" };
//   let cat: Earthling = { type: "animal", name: "Suki" };
//   let zucchini: Earthling = {
//     type: "vegetable",
//     name: "Zucchini"
//   };
//   let rose: Earthling = { type: "vegetable", name: "Rose" };
//   let quartz: Earthling = { type: "mineral", name: "Quartz" };
//   let diamond: Earthling = { type: "mineral", name: "Diamond" };

//   /* @ts-expect-error */
//   const invalidEarthling: Earthling = { type: "martian", name: "Quux" }
//   /* @ts-expect-error */
//   const invalidEarthling2: Earthling = { type: "plutonian" }

//   /*
//    * ======================================================
//    * TODO: Update Aliens to allow these values:
//    * ======================================================*/
//   type Alien = {};

//   let alienBlaxnor: Alien = {
//     name: "Blaxnor",
//     homePlanet: "Jupiter",
//     phaser: true
//   };
//   let alienXanter: Alien = {
//     name: "Xanter",
//     homePlanet: "Mars",
//     phaser: false
//   };

//   /*
//    * ======================================================
//    * TODO: Confirm that EarthlingOrAlien allows and disallows 
//    * the following values
//    * ======================================================*/
//   type EarthlingOrAlien = Earthling | Alien;

//   let person: EarthlingOrAlien = { type: "animal", name: "Fernando" }
//   let alien: EarthlingOrAlien = { name: "Mac", homePlanet: "Pluto", phaser: true }

//   // @ts-expect-error
//   let star: EarthlingOrAlien = "Sirius";

//   // @ts-expect-error
//   let galaxy: EarthlingOrAlien = {
//     type: "LocalGalaxy",
//     name: "Milky Way"
//   };

//   // @ts-expect-error
//   let asteroid: EarthlingOrAlien = {
//     homePlanet: false,
//     name: "Asteroid"
//   };


//   /**
//    * If we have a value of a union type, we can access common properties
//    */
//   function printName(creature: EarthlingOrAlien){
//     console.log(creature.name)
//   }

//    /**
//     * But we cannot access properties that aren't common to all constituents
//     */
//   function printType(creature: EarthlingOrAlien) {
//     // @ts-expect-error
//     console.log(creature.type);
//   }

// });
// /**************************************************************************/

// /**************************************************************************/
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

//   // We can define types that are both pet and Cat (or Dog) by intersecting
//   // the PetInfo type with the species type.
//   type PetCat = PetInfo & Cat;
//   type PetDog = PetInfo & Dog;

//   /*
//    * ======================================================
//    * TODO: Describe a valid PetCat and PetDog below.
//    * HINT: Use autocompletion (ctrl-space) to help you fill in the properties.
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
// /**************************************************************************/

// /**************************************************************************/
// test("type narrowing and exhaustiveness", () => {
//   /* ======================================================
//    * TS understands control flow.
//    * 
//    * TODO: Take a look at the type of 'fruit' each time it's referenced in
//    * isBanana below.
//    * ====================================================== */
//   function isBanana(fruit: 'banana' | 'apple' | 'pear') {
//     if (fruit === "banana") {
//       return `${fruit} is a banana`;
//     } else {
//       return ` ${fruit} is not a banana`;
//     }
//   }

//   /* ======================================================
//    * TODO: Check out the return type of classify. TS has figured out
//    * which specific strings can possibly be returned.
//    * ====================================================== */
//   function classify(n: number) {
//     if (n < 0) return "negative";
//     if (n > 0) return "positive";
//     return "zero";
//   }

//   /*
//    * TS checks our declared return type against the inferred type
//    * from all code paths in a function.
//    * 
//    * This makes it easy to tell if we've handled all cases.
//    *
//    * ======================================================
//    * TODO: Try commenting out one of the return statements in
//    *       describeNumber and see what happens.
//    * ======================================================*/
//   function describeNumber(num: number): string {
//     const value = classify(num);

//     if (value === "negative") {
//       return `${num} is a negative number`;
//     } else if (value === "positive") {
//       return `${num} is a positive number`;
//     } else {
//       return `${num} is zero`;
//     }
//   }

  
//   /*
//    * ======================================================
//    * TODO: Change ONLY the input type FruitColor so that the
//    * function below will only accept inputs it is able to classify
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
// /**************************************************************************/

// /**************************************************************************/
// test("working with discriminated unions", () => {
//   /*
//    * Let's take a look at the HotDrink type described in the slides.
//    *
//    * TS can narrow types as we move through control flow. When
//    * we're handling different cases of a union type, it's helpful
//    * to have a single property that is shared between all the cases,
//    * but has a different literal value for each case in the union. This allows
//    * us to use type narrowing to determine which case we're dealing with.
//    *
//    * This is great for when we have a bunch of similar objects with
//    * different constraints
//    * 
//    * This technique - uninioning object types together with a shared, discriminating field - 
//    * is called a "discriminated union"
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

//   /**
//    * Since type is common to both Tea and Coffee, we can test it to
//    * figure out which we're dealing with.
//    * 
//    * ======================================================
//    * TODO: Write a function that takes a HotDrink and
//    * returns the style, for tea, or the roast, for coffee.
//    * ======================================================
//    */
//   function describe(
//     drink: HotDrink
//   ): "green" | "black" | "herbal" | "dark" | "medium" | "light" {}

//   const rachaelsDrink: Tea = {name: "Chamomile", style: "herbal", type: "tea"}
//   const drewsDrink: Coffee = {name: "Onyx Columbia San Jose", roast: "light", type: "coffee"}

//   expect(describe(rachaelsDrink)).toEqual("herbal");
//   expect(describe(drewsDrink)).toEqual("light");
// });
// /**************************************************************************/

// /**************************************************************************/
// test("build a discriminated union", () => {
//   /*
//    * ======================================================
//    * TODO: Define FruitType as a discriminated union so that
//    * the type proves that apples are red and can be polished,
//    * and bananas are yellow and can be peeled.
//    * ======================================================
//    */

//   type FruitType = any;

//   // Hint: To define a function property within an object, write something like:
//   // type SomeObject = {
//   //   myFunc: () => void
//   // };

//   function doSomething(fruit: FruitType) {
//     // FruitType must have a `type` field as a discriminant
//     switch (fruit.type) {
//       case "apple":
//         // Apples must be the color red in this example
//         type _t1 = AssertAssignable<{ color: "red" }, typeof fruit>;

//         // For this example, apples MUST NOT be yellow
//         // @ts-expect-error
//         type _t2 = AssertAssignable<{ color: "yellow" }, typeof fruit>;

//         // Apples must have a polish function property
//         fruit.polish();

//         // Apples must not have a peel function property
//         // @ts-expect-error
//         fruit.peel();

//         break;

//       case "banana":
//         // Bananas must be yellow in our example
//         type _t3 = AssertAssignable<{ color: "yellow" }, typeof fruit>;

//         // Bananas must not be red.
//         // @ts-expect-error
//         type _t4 = AssertAssignable<{ color: "red" }, typeof fruit>;

//         // We can peel a banana
//         fruit.peel();

//         // But polishing a banana would be silly.
//         // @ts-expect-error
//         fruit.polish();

//         break;
//     }
//   }
// });
// /**************************************************************************/

// /**************************************************************************/
// test("combining unions & intersections", () => {
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
// /**************************************************************************/
