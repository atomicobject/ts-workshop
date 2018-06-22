import {
  QuickSnackOrder,
  WholeEnchiladaOrder,
  ClassicDinnerOrder,
  Salad,
  Entree,
  DinnerWithDessert,
  Dessert,
  AmuseBouche,
  Appetizer
} from "../chez-eclectic";

// Chez Eclectic menu is defined with enums. 
// These are basically a shortcut for unions of string literals.
// Each is both a type and an object which can be used to access 
// individual value.
// 
// Values can be accessed like:
// const aSalad: Salad = Salad.Caesar;
// 
// Each member can also be used as a type, like with literals:
// const caesarOnly: Salad.Caesar = Salad.Caesar;
//
// See: https://www.typescriptlang.org/docs/handbook/enums.html



// These three variables will be used in 6.3.
// They are here so imports are ready to go.
export type JackOrderType = never;
export const jackSavedCourse = null;
export type JackSavedCourseType = never;

export type Takeaway = {};

export function assembleTakeaway(
  jackOrder: ClassicDinnerOrder,
  jillOrder: ClassicDinnerOrder
) {
  return {};
}
