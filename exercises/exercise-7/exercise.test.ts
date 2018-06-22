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
import { Takeaway, JackOrderType, jackSavedCourse, JackSavedCourseType, assembleTakeaway } from "./code";
import { AssertAssignable } from "../util";

const jillOrder: ClassicDinnerOrder = {
  salad: Salad.Fattoush,
  entree: Entree.Curry
};

/*
Jack and Jill went up the hill to have dinner at Chez Eclectic.

Jack and Jill love midnight snacks, so they've agreed ahead of time
to save their salad courses immediately to take as leftovers so
they have late night munchies.

Define an object type Takeaway with two fields that can hold Jack and Jill's salads for
them to take home after dinner.

And define a function assembleTakeaway that takes their orders and boxes them up.
*/
// it("7.1", () => {
//   const jackOrder: ClassicDinnerOrder = {
//     salad: Salad.Caesar,
//     entree: Entree.Lasagna
//   };

//   type _1 = AssertAssignable<Salad, Takeaway['jack']>
//   type _2 = AssertAssignable<Salad, Takeaway['jill']>

//   expect(assembleTakeaway(jackOrder, jillOrder)).toEqual({
//     jack: Salad.Caesar,
//     jill: Salad.Fattoush
//   })

//   // Comment out this test before moving on.
// });


/*

Jack is having a hard time deciding what he wants. Jill is getting
tired of having to modify assembleTakeaway every time he changes his mind.

The most direct way to do this in TypeScript is to take advantage of structural typing.

Update assembleTakeaway so that it can accept any dinner type which includes a salad.
*/
// test("7.2", () => {
//   let jackOrder: DinnerWithDessert = {
//     salad: Salad.Caesar,
//     entree: Entree.Lasagna,
//     dessert: Dessert.FlourlessChocolateCake
//   };
//   let jillOrder: ClassicDinnerOrder = {
//     salad: Salad.Fattoush,
//     entree: Entree.Curry
//   };

//   expect(assembleTakeaway(jackOrder, jillOrder)).toEqual({
//     jack: Salad.Caesar,
//     jill: Salad.Fattoush
//   })

//   expect(assembleTakeaway({salad: Salad.Caesar}, jillOrder)).toEqual({
//     jack: Salad.Caesar,
//     jill: Salad.Fattoush
//   })

//  // Comment out this test before moving on.
// })

/*
This works well enough, but now Jack wants to switch to a dinner option that doesn't even
_have_ a salad.

Just like when we introduce constants or variables in code so we can name a value
we may wish to change later, we can also create type variables that alias a type.

Start with 3 variables that can be changed to swap jack between any order type
and any course to take home.

Then: Use the clues below to make only two variables which need to be updated.
In this case, it should be impossible to mismatch the name of the saved course and type
type it's associated with.

Hint: Doing this will require declaring `jackSavedCourse` with `const`
so that its type is a string literal and not just `string`.

*/
// test("7.3", () => {
//   // Jack wants the whole enchilada
//   type _1 = AssertAssignable<JackOrderType, WholeEnchiladaOrder>

//   // We should track which course Jack wants to save.
//   expect(jackSavedCourse).toEqual("amuse")

//   // The type associated with jack's saved course must match
//   // the type of the field we've named.
//   type _2 = AssertAssignable<JackSavedCourseType, JackOrderType[typeof jackSavedCourse]>

//   let jack: JackOrderType = {
//     amuse: AmuseBouche.BruschettaBite,
//     appetizer: Appetizer.FriedCauliflower,
//     salad: Salad.Caesar,
//     entree: Entree.Lasagna,
//     dessert: Dessert.FlourlessChocolateCake
//   }

//   expect(assembleTakeaway(jack, jillOrder)).toEqual({
//     jack: AmuseBouche.BruschettaBite,
//     jill: Salad.Fattoush
//   })
  
//   // Why are these assertions here? Puzzling. Maybe they are tricks
//   // that could simplify the implementation?
//   type _x1 = AssertAssignable<"amuse", typeof jackSavedCourse>
//   type _x2 = AssertAssignable<AmuseBouche, JackOrderType["amuse"]>

//  // Comment out this test before moving on.
// })

/*

We've now used type and runtime variables to factor our code so that
change limited to one place. This technique can be useful when applied
at a broad scale to create systems that are statically typed, but where
there is still a single source of truth. More of your code is decoupled
from key decisions you may want to revisit later.

But there's another, more common reason for engaging in this sort of
activity: creating generic functions where the variables are inputs.

Let's convert assembleTakeaway to a generic function taking two type parameters.

The first will be the entree type, the second the string literal type for the saved
course.

*/
// test("7.4 - generic assembleTakeaway", () => {
//   // This generic function could be called with explicit type arguments to assemble takeaway with
//   // an arbitrary Jack order/course.
//   const saladTakeaway = genericAssembleTakeaway<{salad: Salad}, 'salad'>('salad', {salad: Salad.Caesar}, jillOrder)
//   expect(saladTakeaway).toEqual({
//     jack: Salad.Caesar,
//     jill: Salad.Fattoush
//   })

//   // But usually it would be called without explicit type arguments, and they are inferred from the
//   // types of the values passed in.
//   const amuseTakeaway = genericAssembleTakeaway('amuse', {amuse: AmuseBouche.CocktailWeiner}, jillOrder)
//   expect(amuseTakeaway).toEqual({
//     jack: AmuseBouche.CocktailWeiner,
//     jill: Salad.Fattoush
//   })

//   // Typescript should understand what type of food Jack is taking home.
//   type _1 = AssertAssignable<Salad, typeof saladTakeaway["jack"]>
//   type _2 = AssertAssignable<AmuseBouche, typeof amuseTakeaway["jack"]>

//   // Don't allow invalid keys
//   // typings:expect-error
//   genericAssembleTakeaway('dessert', {amuse: AmuseBouche.CocktailWeiner}, jillOrder)
// })