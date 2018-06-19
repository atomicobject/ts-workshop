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

      
      function describeNumber(num: number){
        // The type of "value" indicates that it will be one of three literals.
        const value = classify(3);

        if (value === "negative") {
          return `${num} is a negative number`;
        } else if (value === "positive") {
          return `${num} is a positive number`;
        } else {
          type _t1 = AssertAssignable<"zero", typeof value>
        }
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
    test("writing our own unions", () => {
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
    test("discriminated unions", () => {
      /**
       * TS can narrow types as we move through control flow. This gives
       * us a way to prove that we're not going to accidentally pass around 
       * invalid objects.
       */
      type FixThisType = {
        type: "apple" | "banana";
        color: "red" | "yellow";
      };

      function appleOrBanana(fruit: FixThisType): "That is an apple" | "That is a banana" {
        if (fruit.color === "red") {
          type _t1 = AssertAssignable<{ type: "apple" }, typeof fruit>;
          return "That is an apple";
        } else {
          type _t1 = AssertAssignable<{ type: "banana" }, typeof fruit>;
          return "That is a banana";
        }
      }
    });
    describe("intersections", () => {
      test("basic intersection", () => {})
    });
  });
  
    enum Herb {
      Cilantro,
      Basil,
      GreenOnions
    }

    enum Sauce {
      Pico,
      Roja,
      Verde
    }

    interface Item {}

    interface Order {
      item: Item;
      cost: number;
    }

    interface BaseProteinOrder extends Order {
      protein: Protein;
      cost: number;
    }

    interface ChickenOrder extends BaseProteinOrder {
      protein: Protein.Chicken,
      cost: 5
    }

    interface BeefOrder extends BaseProteinOrder {
      protein: Protein.Beef,
      cost: 6
    }

    type ProteinOrder = ChickenOrder;

    enum Protein {
      Chicken,
      Tempeh,
      Fish,
      Beef,
      Carnitas
    }

    enum Shell {
      CornTortilla,
      FlourTortilla
    }

    type TacoOrder = {
      protein: ProteinOrder;
      sauce: Sauce;
      herb: Herb;
      shell: Shell;
    };

    type BurritoOrder = {
      protein: ProteinOrder;
      sauce: Sauce;
      herb: Herb;
      shell: Shell.FlourTortilla;
    };

    // type Order = TacoOrder | BurritoOrder
});
