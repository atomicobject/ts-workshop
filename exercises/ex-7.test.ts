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

type EntreeType = ClassicDinnerOrder | QuickSnackOrder | WholeEnchiladaOrder

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
function cleanMyPlate<EntreeType>(order: EntreeType): CleanedPlate<EntreeType> {
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

type _1 = CleanedPlate<{foo: number}> extends CleanedPlate<infer T> ? T : never;
type _2 = {foo: number, bar: null} extends (CleanedPlate<infer T> & infer U) ? U : never;

type Diff<T extends string|number|symbol, U extends string|number|symbol> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];  
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;  

type _3 = Diff<'foo'|'bar'|'baz', 'bar'>

type X = { foo: number, bar: null }
type NullEntries<T> = {[K in keyof T]: T[K] extends null ? K : never}[keyof T]
type _4 = NullEntries<X>

/*

Tricks:
* mapObject: Map types to map over property entries
* filter: Subscript map type with never types to filter string lists
* if: Conditional types for if statements
* K extends string for a string list
* Type overloading of functions
* Phantom keys on runtime object to have values which carry extra type info.
* Fluent interfaces which change type on each invocation to accumulate info.


*/
