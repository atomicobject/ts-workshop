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

// namespace Zero {
  // These three variables will be used in 6.3
  export type JackOrderType = never;
  export const jackSavedCourse = null;
  export type JackSavedCourseType = never

  export type Takeaway = {
  };

  export function assembleTakeaway(
    jackOrder: ClassicDinnerOrder,
    jillOrder: ClassicDinnerOrder
  ) {
    return {};
  }
// }

// namespace One {
//   export type JackOrderType = never;
//   export const jackSavedCourse = null;
//   export type JackSavedCourseType = never
//   export type Takeaway = {
//     jack: Salad;
//     jill: Salad;
//   };

//   export function assembleTakeaway(
//     jackOrder: ClassicDinnerOrder,
//     jillOrder: ClassicDinnerOrder
//   ) {
//     return {
//       jack: jackOrder.salad,
//       jill: jillOrder.salad
//     };
//   }
// }

/*****************/
// namespace Two {
  // export type JackOrderType = never;
  // export const jackSavedCourse = null;
  // export type JackSavedCourseType = never

  // export type Takeaway = {
  //   jack: Salad;
  //   jill: Salad;
  // };

  // export function assembleTakeaway(
  //   jackOrder: {salad: Salad},
  //   jillOrder: ClassicDinnerOrder
  // ): Takeaway {
  //   return {
  //     jack: jackOrder.salad,
  //     jill: jillOrder.salad
  //   };
  // }
// }


// namespace Three {
//   export type JackOrderType = WholeEnchiladaOrder;
//   export const jackSavedCourse = "amuse";
//   export type JackSavedCourseType = JackOrderType[typeof jackSavedCourse];
// ;
//   let jillOrder: ClassicDinnerOrder = {
//     salad: Salad.Fattoush,
//     entree: Entree.Curry
//   };

//   export type Takeaway = {
//     jack: JackSavedCourseType;
//     jill: Salad;
//   };

//   export function assembleTakeaway(
//     jackOrder: JackOrderType,
//     jillOrder: ClassicDinnerOrder
//   ): Takeaway {
//     return {
//       jack: jackOrder[jackSavedCourse],
//       jill: jillOrder.salad
//     };
//   }
// }
