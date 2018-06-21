import { AssertAssignable } from "../util";

describe("composite types", () => {
  describe("unions", () => {
    test("union return types from functions", () => {
      // Unions arise naturally out of functions
      // with conditional returns.
      function classify(n: number) {
        if (n < 0) return "negative";
        if (n > 0) return "positive";
        return "zero";
      }
    });

    test("manually creating union types", () => {
      /**
       * We can also describe union types ourselves, and
       * we can union together any valid types. Update
       * FixThisType to allow strings or numbers. */
      type FixThisType = any;

      let aString: FixThisType = "hello";
      let anotherString: FixThisType = "world";
      let aNumber: FixThisType = 2;
      let anotherNumber: FixThisType = 4;

      // typings: expect-error
      let aBool: FixThisType = true;
    });

    test("this allows us to constrain types in interesting ways", () => {
      /**
       * Being able to union together any valid types means
       * literals, too. Update FixThisType to make this type
       * test pass.
       */
      type FixThisType = any;

      let aBool: FixThisType = true;

      let aString: FixThisType = "this string";

      // typings: expect-error
      let someOtherString: FixThisType = "not that string";
      // typings: expect-error
      let aNull: FixThisType = null;
    });

    test("unions can be between types of any shape", () => {
      type EarthlingsAndAliens = any;

      /**
       * Update EarthlingsAndAliens to allow these values... */
      let dog: EarthlingsAndAliens = { type: "animal", name: "Fido" };
      let cat: EarthlingsAndAliens = { type: "animal", name: "Suki" };
      let zucchini: EarthlingsAndAliens = {
        type: "vegetable",
        name: "Zucchini"
      };
      let rose: EarthlingsAndAliens = { type: "vegetable", name: "Rose" };
      let quartz: EarthlingsAndAliens = { type: "mineral", name: "Quartz" };
      let diamond: EarthlingsAndAliens = { type: "mineral", name: "Diamond" };
      let alienBlaxnor: EarthlingsAndAliens = {
        homePlanet: "Jupiter",
        phaser: true
      };
      let alienXanter: EarthlingsAndAliens = {
        homePlanet: "Mars",
        phaser: false
      };

      /**
       * ...But not these values */
      // typings:expect-error
      let star: EarthlingsAndAliens = "Sirius";

      // typings:expect-error
      let galaxy: EarthlingsAndAliens = {
        type: "LocalGalaxy",
        name: "Milky Way"
      };

      // typings:expect-error
      let asteroid: EarthlingsAndAliens = {
        homePlanet: false,
        name: "Asteroid"
      };
    });
  });

  describe("intersections", () => {
    test("basic intersection", () => {
      /**
       * Intersections allow us to combine type definitions to
       * create a single type with all the attributes of both types.
       * This is useful when we have some set of properties that are
       * shared among many different types. */
      type Cat = {
        animalType: "cat";
        breedName: string;
        coloration: "tabby" | "solid-colored" | "spotted";
      };
      type Dog = {
        animalType: "dog";
        breedName: string;
        size: "teacup" | "toy" | "standard";
      };
      type PetInfo = { name: string; familyName: string };

      type PetCat = PetInfo & Cat;
      type PetDog = PetInfo & Dog;

      /**
       * Describe a valid PetCat and PetDog below.
       * HINT: Use autocompletion to help you fill in the properties. */
      const sukiTheCat: PetCat = {};
      const finnTheDog: PetDog = {};

      function announcePet(pet: PetInfo) {
        return `This is ${pet.familyName} family pet, ${pet.name}.`;
      }
      /**
       * Notice that announcePet will take any object that's
       * structurally compatible with type Pet. */
      announcePet(sukiTheCat);
      announcePet(finnTheDog);
    });
    test("type narrowing and exhaustiveness", () => {
      function classify(n: number) {
        if (n < 0) return "negative";
        if (n > 0) return "positive";
        return "zero";
      }

      /**
       * TS can narrow types as we move through control flow.
       * This makes it easy to tell if we've handled all cases.
       * Try commenting out one of the return statements in
       * describeNumber and see what happens.
       */
      function describeNumber(num: number): string {
        const value = classify(3);

        if (value === "negative") {
          value;
          return `${num} is a negative number`;
        } else if (value === "positive") {
          value;
          return `${num} is a positive number`;
        } else {
          value;
          return `${num} is zero`;
        }
      }

      /**
       * Try changing the input FruitType to prove that the
       * function below will always return one of these two strings.*/
      type FruitType = string;

      function appleOrBanana(fruitColor: FruitType): "apple" | "banana" {
        switch (fruitColor) {
          case "red":
            return "apple";
          case "yellow":
            return "banana";
        }
      }

      /**
       * So, if we carefully constrain our input and output types,
       * TypeScript can do a lot of the work for us: no more
       * checking if a property exists, or for "this shouldn't happen"
       * states. We validate object shapes once - when we create them -
       * and TypeScript proves that our constraints are met throughout
       * the codebase.
       */
    });
    test("discriminated unions", () => {
      /**
       * TS can narrow types as we move through control flow. When
       * we're handling different cases of a union type, it's helpful
       * to have a single property that is shared between all the cases,
       * but has a different value for each case in the union. This allows
       * us to use type narrowing to determine which case we're dealing with.
       *
       * This is great for when we have a bunch of similar objects with
       * different constraints.
       *
       * Change FruitType so this test passes- so that it proves that
       * apples are red and can be polished, and bananas are yellow
       * and can be peeled.
       */
      type FruitType = {
        type: string;
        color: string;
        polish: () => {} | null;
        peel: () => {} | null;
      };

      function doSomething(fruit: FruitType) {
        switch (fruit.type) {
          case "apple":
            type _t1 = AssertAssignable<{ color: "red" }, typeof fruit>;
            // typings:expect-error
            type _t2 = AssertAssignable<{ color: "yellow" }, typeof fruit>;

            fruit.polish();
            // typings:expect-error
            fruit.peel();
            break;
          case "banana":
            fruit;
            type _t3 = AssertAssignable<{ color: "yellow" }, typeof fruit>;
            // typings:expect-error
            type _t4 = AssertAssignable<{ color: "red" }, typeof fruit>;

            fruit.peel();
            // typings:expect-error
            fruit.polish();
            break;
        }
      }
    });
  });
});
test("unions & intersections", () => {
  /**
   * Unions and intersections can be combined to make complex types.
   * Let's revisit our pet types.
   */
  type Cat = {
    animalType: "cat";
    breedName: string;
    coloration: "tabby" | "solid-colored" | "spotted";
  };
  type Dog = {
    animalType: "dog";
    breedName: string;
    size: "teacup" | "toy" | "standard";
  };
  type PetInfo = { name: string; familyName: string };

  /**
   * Write a type that describes both pet cats and pet dogs.
   */
  type Pet = any;

  /**
   * What if we want to be able to announce cats and dogs in more detail?
   * Write a function that takes pet cats and pet dogs and announces
   * them in detail. Use the tests below to drive your implementation.
   */
  function announcePetDetail(pet: Pet) {}

  expect(
    announcePetDetail({
      animalType: "cat",
      breedName: "American Shorthair",
      coloration: "tabby",
      name: "Isabow",
      familyName: "Robb"
    })
  ).toEqual(
    "This is the Robb family cat, Isabow the tabby American Shorthair."
  );
  expect(
    announcePetDetail({
      animalType: "dog",
      breedName: "Pitbull",
      size: "standard",
      name: "Stella",
      familyName: "Brockett"
    })
  ).toEqual("This is the Brockett family dog, Stella the standard Pitbull.");

  /** Extra credit: Find a different way to describe your Pet type. */
  // type AltPet = any;
  type AltPet = (PetInfo & Cat) | (PetInfo & Dog);
  type _t1 = AssertAssignable<AltPet, Pet>;
  type _t2 = AssertAssignable<Pet, AltPet>;
});

function describeNumber(value: "negative" | "positive" | "zero") {
  if (value === "negative") {
    return "that is a negative number";
  } else if (value === "positive") {
    return "that is a positive number";
  }
}
