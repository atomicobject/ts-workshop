import { AssertAssignable } from "./util";

// Chez Eclectic

enum AmuseBouche {
  CocktailWeiner,
  BruschettaBite
}
enum Appetizer {
  FriedCauliflower,
  Potstickers
}
enum Salad {
  Caesar
}
enum Entree {
  Lasagna,
  Curry
}
enum Dessert {
  IceCream,
  FlourlessChocolateCake
}

interface ClassicDinnerOrder {
  salad: Salad;
  entree: Entree;
}

interface QuickSnackOrder {
  amuse: AmuseBouche;
  appetizer: Appetizer;
}
interface WholeEnchiladaOrder {
  amuse: AmuseBouche;
  appetizer: Appetizer;
  salad: Salad;
  entree: Entree;
  dessert: Dessert;
}

type OrderType = ClassicDinnerOrder | QuickSnackOrder | WholeEnchiladaOrder

let aMemorableMeal: ClassicDinnerOrder = {
  salad: Salad.Caesar,
  entree: Entree.Curry
};
let theentree: Entree = aMemorableMeal.entree;
let anotherentree: Entree = aMemorableMeal['entree'];
let thesalad: Salad = aMemorableMeal.salad;

type DinnerCourse = keyof ClassicDinnerOrder;
type DinnerComponents = ClassicDinnerOrder[DinnerCourse];

const course1: DinnerCourse = "salad";
const course2: DinnerCourse = "entree";

// typings:expect-error
const notACourse: DinnerCourse = "amuse";

const aNiceSalad: DinnerComponents = Salad.Caesar;
const aDeliciousEntree: DinnerComponents = Entree.Lasagna;
// typings:expect-error
const notAllowed: DinnerComponents = AmuseBouche.BruschettaBite;

type Leftovers = {
  plate1: ClassicDinnerOrder['salad'],
  plate2: ClassicDinnerOrder['salad'],
}

it("foo", () => {
  let order1: ClassicDinnerOrder = {
    salad: Salad.Caesar,
    entree: Entree.Curry,
  }
  let order2: ClassicDinnerOrder = {
    salad: Salad.Caesar,
    entree: Entree.Lasagna,
  }

  type TakeAway = {
    order1Item: Salad,
    order2Item: Salad,
  }

  const takeaway: TakeAway = {
    order1Item: order1.salad,
    order2Item: order2.salad,
  }

  type _1 = AssertAssignable<Salad, TakeAway['order1Item']>

})
it("bar", () => {
  type Order1Type = WholeEnchiladaOrder;
  type Order2Type = QuickSnackOrder;

  type CourseToKeep1 = 'appetizer'
  let courseToKeep1: CourseToKeep1 = 'appetizer'
  type _1 = AssertAssignable<keyof Order1Type, CourseToKeep1>

  type CourseToKeep2 = 'appetizer'
  let courseToKeep2: CourseToKeep2 = 'appetizer'
  type _2 = AssertAssignable<keyof Order2Type, CourseToKeep2>

  let order1!: Order1Type;
  let order2!: Order2Type;

  type TakeAway = {
    order1Item: Order1Type[CourseToKeep1],
    order2Item: Order1Type[CourseToKeep1],
  }

  // let takeaway: TakeAway = {
  //   order1Item: order1['appetizer'],
  //   order2Item: order2['appetizer']
  // }
})

/**
 * whatDidIHave answers the question in the name of the function.
 * @param order A dinner someone ate
 * @param course The course they're wondering about
 * @returns Their selection for the course in question
 */
function whatDidIHaveClassic(
  order: ClassicDinnerOrder,
  course: DinnerCourse
): DinnerComponents {
  return order[course];
}

describe("whatDidIHave", () => {
  it("answers important questions", () => {
    let aMemorableMeal: ClassicDinnerOrder = {
      salad: Salad.Caesar,
      entree: Entree.Curry
    };
    expect(whatDidIHaveClassic(aMemorableMeal, "salad")).toEqual(Salad.Caesar);
    expect(whatDidIHaveClassic(aMemorableMeal, "entree")).toEqual(Entree.Curry);
  });
});


function whatDidIHave<T>(meal: T, course: keyof T): T[keyof T] {
  return meal[course]
}



let order: QuickSnackOrder = {
  amuse: AmuseBouche.BruschettaBite,
  appetizer: Appetizer.FriedCauliflower
};


type HalfEatenQuickSnack = {
  amuse: null;
  appetizer: Appetizer;
};

const foo = order["amuse"];
type AmuseFieldType = QuickSnackOrder["amuse"];
type HeisenType = QuickSnackOrder["amuse" | "appetizer"];

type Eaten<Serving extends object, Course extends keyof Serving> = Pick<
  Serving,
  Exclude<keyof Serving, Course>
> &
  { [k in Course]: null };

type EatOnlyOnce<Serving extends object, Course extends keyof Serving> = 
  Serving extends {[k in Course]: null} ? never : 
  Pick<
    Serving,
    Exclude<keyof Serving, Course>
  > &
    { [k in Course]: null };

type e2_1 = EatOnlyOnce<QuickSnackOrder, 'appetizer'>
type e2_2 = EatOnlyOnce<EatOnlyOnce<QuickSnackOrder, 'appetizer'>, 'appetizer'>

let EatAmuse: Eaten<QuickSnackOrder, "amuse"> = {
  amuse: null,
  appetizer: Appetizer.FriedCauliflower
};

type QuickSnackChoices = keyof QuickSnackOrder;
let key: QuickSnackChoices = "amuse";
type AmuseType = QuickSnackOrder[typeof key];

type CleanedPlate<T> = { [k in keyof T]: null };
type _cp = AssertAssignable<
  CleanedPlate<QuickSnackOrder>,
  Eaten<Eaten<QuickSnackOrder, "amuse">, "appetizer">
>;

type CleanedQuickSnack = CleanedPlate<QuickSnackOrder>;
function cleanMyPlate<OrderType>(order: OrderType): CleanedPlate<OrderType> {
  const ret: any = {};
  for (const key of Object.keys(order)) {
    ret[key] = null;
  }
  return ret;
}

const myQuickSnack: QuickSnackOrder = {
  amuse: AmuseBouche.BruschettaBite,
  appetizer: Appetizer.FriedCauliflower
};
let finished = cleanMyPlate(myQuickSnack);
finished.appetizer;
