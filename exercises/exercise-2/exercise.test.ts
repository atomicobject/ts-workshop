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
      /** We can also describe union types ourselves, and we can union together any valid types. */
      type FixThisType = any;
      let aString: FixThisType = "hello";
      let anotherString: FixThisType = "world";
      let aNumber: FixThisType = 2;
      let anotherNumber: FixThisType = 4;

      // typings: expect-error
      let aBool: FixThisType = true;
    });

    test("this allows us to constrain types in interesting ways", () => {
      type FixThisType = any;

      let aBool: FixThisType = true;

      let aString: FixThisType = "this string";

      // typings: expect-error
      let someOtherString: FixThisType = "not that string";
      // typings: expect-error
      let aNull: FixThisType = null;
    });
    test("unions can be between types of any shape", () => {
      type AnObjectOrAString =
        | {
            type: "animal" | "mineral" | "vegetable";
            name: string;
          }
        | "NOT OF EARTH";

      let fido: AnObjectOrAString = { type: "animal", name: "Fido" };
      let zucchini: AnObjectOrAString = { type: "vegetable", name: "Zucchini" };
      let quartz: AnObjectOrAString = { type: "mineral", name: "Quartz" };
      let nebula: AnObjectOrAString = "NOT OF EARTH";

      // typings:expect-error
      let neon: AnObjectOrAString = { type: "gas", name: "Neon" };

      // typings:expect-error
      let noneOfTheAbove: AnObjectOrAString = "this is just a string";
    });
    test("type narrowing", () => {
      function classify(n: number) {
        if (n < 0) return "negative";
        if (n > 0) return "positive";
        return "zero";
      }

      /**TS can narrow types as we move through control flow.*/
      function describeNumber(num: number) {
        // The type of "value" indicates that it will be one of three literals.
        const value = classify(3);

        if (value === "negative") {
          return `${num} is a negative number`;
        } else if (value === "positive") {
          return `${num} is a positive number`;
        } else {
          type _t1 = AssertAssignable<"zero", typeof value>;
        }
      }

      // Try changing this type to prove that the function below will always
      // return one of these two strings.
      type FixThisType = any;

      function appleOrBanana(fruitColor: FixThisType): "apple" | "banana" {
        switch (fruitColor) {
          case "red":
            return "apple";
          case "yellow":
            return "banana";
        }
      }
    });
    test("discriminated unions", () => {
      /**
       * TS can narrow types as we move through control flow. This gives
       * us a way to prove that we're not going to accidentally pass around
       * invalid objects.
       */
      type FixThisType = any;

      function doSomething(fruit: FixThisType) {
        switch (fruit.color) {
          case "apple":
            type _t1 = AssertAssignable<{ color: "red" }, typeof fruit>;
            // typings:expect-error
            type _t2 = AssertAssignable<{ color: "yellow" }, typeof fruit>;

            fruit.polish();
            // typings:expect-error
            fruit.peel();
          case "banana":
            type _t3 = AssertAssignable<{ color: "yellow" }, typeof fruit>;
            // typings:expect-error
            type _t4 = AssertAssignable<{ color: "red" }, typeof fruit>;

            fruit.peel();
            // typings:expect-error
            fruit.polish();
        }
      }
    });
  });
  describe("intersections", () => {
    test("basic intersection", () => {
      /** 
       * Intersections allow us to combine type definitions to 
       * create a single type with all the attributes of both types.
       * This is useful when we have some set of properties that are 
       * shared among many different types.
       */
      type Cat = {
        breedName: string;
        coloration: "tabby" | "solid" | "spotted";
      };
      type Dog = { breedName: string; size: "small" | "medium" | "large" };
      type Pet = { name: string; familyName: string };

      type PetCat = Pet & Cat;
      type PetDog = Pet & Dog;

      // Describe a valid PatCat and PetDog below.
      const sukiTheCat: PetCat = {}
      const dixieTheDog: PetDog = {}
    });

    test("Distributive property", () => {
      /** Intersections and unions can be combined to  */
    });
  });
});

type Herb = "Cilantro" | "Basil" | "Green Onions";

type Sauce = "Pico" | "Salsa Roja" | "Salsa Verde";

type Supreme = {
  tomato: boolean;
  sourCream: boolean;
  lettuce: boolean;
};

type Protein =
  "Chicken"|
  "Tempeh"|
  "Fish"|
  "Beef"|
  "Carnitas"

enum Shell {
  CornTortilla,
  FlourTortilla
}
