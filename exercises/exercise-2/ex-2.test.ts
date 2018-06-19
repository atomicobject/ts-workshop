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

      // The type of "value" indicates that it would be one of three literals.
      const value = classify(3);
    });

    test("manually creating union types", () => {
      /** We can also describe union types ourselves, and we can union together any valid types. */
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
    test("unions can be between types of any shape", () => {
      type AnObjectOrAString =
        | {
            type: "animal" | "mineral" | "vegetable";
            name: string;
          }
        | "otherworldly";

      let fido: AnObjectOrAString = { type: "animal", name: "Fido" };
      let nebula: AnObjectOrAString = "otherworldly";
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
    test("unions and control flow", () => {
      /** 
       * TS can narrow types as we move through control flow. This gives 
       * us a way to prove that we're not going to end up in a fail state.
       */
      type FixThisType = "apple" | "banana";

      function appleOrBanana(fruit: FixThisType): "APPLE!" | "BANANA!" {
        if (fruit === "apple") {
          return "APPLE!";
        } else if (fruit === "banana") {
          return "BANANA!";
        } else {
          return fruit;
        }
      }
    });
    test("discriminated unions", () => {
      
    });
  });
});
