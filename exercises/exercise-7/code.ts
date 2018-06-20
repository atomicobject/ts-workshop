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
