describe("Unions and intersections", () => {
  test("can union different types together", () => {
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

describe("having a hard time demonstrating features without unions", () => {
  test("allows unions", () => {
    let stringOrNumber: string | number = "the string";

    stringOrNumber = 5;
  });
  test("can follow control flow", () => {
    let thing = Math.random() >= 0.5;
    let stringOrNumber: string | number = thing ? "a string" : 5;
    if (thing) {
      stringOrNumber;
    }
  });
});
})