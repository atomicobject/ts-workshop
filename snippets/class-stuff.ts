
  it("can use public, private, protected modifiers", () => {
    class O {
      public publicThing: Food = 'spaghetti'
      protected protectedThing: Food = 'tacos'
      private privateThing: Food = 'pie'

      method() {
        this.privateThing
      }
    }

    const object = new O();
    object.publicThing
  })
});


it("can define ES6 classes", () => {
  class PickyEater {
  }
  const eater = new PickyEater();``
  expect(eater.eat("apples")).toEqual("yum");
  expect(eater.eat("tacos")).toEqual("yum");
  expect(eater.eat("spaghetti")).toEqual("yum");

  expect(eater.eat("kale")).toEqual("yuck");
  expect(eater.eat("bacon")).toEqual("yuck");
});

////////////////////////////////////////////////////////////////////////////////

// it("can define methods with very precise types", () => {
//   type PreferredFood = // implement me to support just the accepted foods
//   class Allergic {
//     // implement me
//   }
//   const eater = new Allergic();
//   expect(eater.eat("apples")).toEqual("yum");
//   expect(eater.eat("pie")).toEqual("yum");
//   expect(eater.eat("spaghetti")).toEqual("yum");
//   // typings:expect-error
//   eater.eat("kale");
//   // typings:expect-error
//   eater.eat("bacon");
// });

// it("can interpolate literal types", () => {
//   type k = "foo" | "bar";
//   type o = { [K in k]: number };
//   type Answer = {
//     REPLACEME
//   };
//   type _1 = AssertAssignable<o, Answer>;
// });

it("asdf", () => {
  type Fruit = { kind: string };

  class FruitBasket {
    private _contents: Fruit[];
    constructor() {
      this._contents = [];
    }

    add(...fruit: Fruit[]) {
      this._contents.push(...fruit);
      return this;
    }

    toJuice = () => `${this._contents.map(fb => fb.kind).join(" ")} juice`;
  }

  const basket = new FruitBasket();
  basket.add({ kind: "orange" }, { kind: "apple" });
  expect(basket.toJuice()).toEqual("orange apple juice");

  // typings:expect-error
  basket.add("orange");
});
