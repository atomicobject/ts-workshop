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
  // export type JackOrderType = DinnerWithDessert
  // export const jackSavedCourse = 'salad';
  // export type JackSavedCourseType =  Salad;

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
  // export type JackOrderType = WholeEnchiladaOrder;
  // export const jackSavedCourse = "amuse";
  // export type JackSavedCourseType = JackOrderType[typeof jackSavedCourse];

  // export type Takeaway = {
  //   jack: JackSavedCourseType;
  //   jill: Salad;
  // };

  // export function assembleTakeaway(
  //   jackOrder: JackOrderType,
  //   jillOrder: ClassicDinnerOrder
  // ): Takeaway {
  //   return {
  //     jack: jackOrder[jackSavedCourse],
  //     jill: jillOrder.salad
  //   };
  // }
// }

// namespace Four {
  // export type JackOrderType = WholeEnchiladaOrder;
  // export const jackSavedCourse = "amuse";
  // export type JackSavedCourseType = JackOrderType[typeof jackSavedCourse];
  // let jillOrder: ClassicDinnerOrder = {
  //   salad: Salad.Fattoush,
  //   entree: Entree.Curry
  // };

  // export type Takeaway<JackSavedCourseType> = {
  //   jack: JackSavedCourseType;
  //   jill: Salad;
  // };

  // export function genericAssembleTakeaway<JackOrderType, JackSavedCourseKey extends keyof JackOrderType>(
  //   jackSavedCourse: JackSavedCourseKey,
  //   jackOrder: JackOrderType,
  //   jillOrder: ClassicDinnerOrder
  // ): Takeaway<JackOrderType[JackSavedCourseKey]> {
  //   return {
  //     jack: jackOrder[jackSavedCourse],
  //     jill: jillOrder.salad
  //   };
  // }
// }