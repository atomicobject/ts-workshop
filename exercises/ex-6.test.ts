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
  littlePlate: Salad;
  bigPlate: Entree;
}

let aMemorableMeal: ClassicDinnerOrder = {
  littlePlate: Salad.Caesar,
  bigPlate: Entree.Curry
};
let theBigPlate: Entree = aMemorableMeal.bigPlate;
let anotherBigPlate: Entree = aMemorableMeal['bigPlate'];
let theLittlePlate: Salad = aMemorableMeal.littlePlate;

type DinnerCourse = keyof ClassicDinnerOrder;
type DinnerComponents = ClassicDinnerOrder[DinnerCourse];

const course1: DinnerCourse = "littlePlate";
const course2: DinnerCourse = "bigPlate";

// typings:expect-error
const notACourse: DinnerCourse = "dessert";

const aNiceSalad: DinnerComponents = Salad.Caesar;
const aDeliciousEntree: DinnerComponents = Entree.Lasagna;
// typings:expect-error
const notAllowed: DinnerComponents = Dessert.FlourlessChocolateCake;

type Leftovers = {
  plate1: ClassicDinnerOrder['littlePlate'],
  plate2: ClassicDinnerOrder['littlePlate'],
}

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
      littlePlate: Salad.Caesar,
      bigPlate: Entree.Curry
    };
    expect(whatDidIHaveClassic(aMemorableMeal, "littlePlate")).toEqual(Salad.Caesar);
    expect(whatDidIHaveClassic(aMemorableMeal, "bigPlate")).toEqual(Entree.Curry);
  });
});


function whatDidIHave<T>(meal: T, course: keyof T): T[keyof T] {
  return meal[course]
}


interface QuickSnackOrder {
  amuse: AmuseBouche;
  appetizer: Appetizer;
}

let order: QuickSnackOrder = {
  amuse: AmuseBouche.BruschettaBite,
  appetizer: Appetizer.FriedCauliflower
};

interface WholeEnchiladaOrder {
  amuse: AmuseBouche;
  appetizer: Appetizer;
  salad: Salad;
  entree: Entree;
  dessert: Dessert;
}

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
