import { AssertAssignable } from "../util";
describe("function types", () => {
  test("type annotations for functions", () => {
    interface Item {
      name: string;
      price: number;
    }
    function getPrice(item: Item): number {
      return item.price;
    }

    type _typeCheck = AssertAssignable<typeof getPrice, (item: Item) => number>;

    //typings:expect-error
    type _typeCheck2 = AssertAssignable<
      typeof getPrice,
      (item: Item) => string | number
    >;
    type _typeCheck3 = AssertAssignable<
      (item: Item) => string | number,
      typeof getPrice
    >;

    let getPriceLambda = (item: Item): number => item.price;

    type _typeCheck4 = AssertAssignable<typeof getPrice, typeof getPriceLambda>;
  });
  enum Protein {
    Chicken,
    Beef,
    Tofu,
    Tempeh,
    Fish,
    Pork,
    MysteryMeat
  }
  enum Side {
    Rice,
    Veggies,
    Fries
  }

  interface Meal {
    protein: Protein;
    side: Side;
  }
  test("build a function", () => {
    type MealMaker = (protein: Protein) => Meal;

    let bestPairing: MealMaker = REPLACEME;
    let wildCard: MealMaker = REPLACEME;
    let alwaysRice: MealMaker = REPLACEME;

    // I want to demo that types can be structurally compatible here without being the same?
  });
  test("pass functions around", () =>{})
  test("generic functions", () => {
    // What if we want to ensure that we return a meal with the same input protein?
    // Edit _only_ the type signature of greasySpoonMeal to prove that the chef isn't 
    // replacing proteins with mystery meat.
    function greasySpoonMeal(protein: Protein) {
      return { protein, side: Side.Fries };
    };

    let hopefullyChicken = greasySpoonMeal(Protein.Chicken)
    type _t1 = AssertAssignable<Protein.Chicken, typeof hopefullyChicken.protein>

    // interface GenerifiedMeal<T extends Protein> extends Meal {
    //   protein: T;
    // }
    // type SaneMealMaker<T extends Protein> = (protein: T) => GenerifiedMeal<T>;
  });
});
