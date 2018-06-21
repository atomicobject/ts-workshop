
/*
The Hunger Cycle
------------------

We have a very strict schedule. We always wake up STARVING.

If we eat three snacks, we go from STARVING to HUNGRY to
PECKISH to FULL. Or we can fill up when we're STARVING or
HUNGRY by eating a meal, but we can't eat a meal when we're
PECKISH or FULL. That would be excessive.

Once we're full, we get sleepy and it's time to take a nap.

You can see the whole thing here:

      _________________
     \/                |
  STARVING ---         |
      |       |        |
      |snack  |        |
      \/      |        |
  HUNGRY -----|        |
      |       |        |
      |snack  | meal   | sleep
      \/      |        |
  PECKISH     |        |
     |        |        |
     |snack   |        |
     \/       |        |
   FULL   <----        |
    |__________________|

We're going to model our hunger cycle in TypeScript in two ways.

We want to be able to write two kinds of code when talking about the hunger cycle.

Some code will be specific. Say our plan for some day is to wake up, eat three snacks,
and go to sleep. We always wake up STARVING, so we want to be able to eat three snacks
with minimal ceremony and get right back to sleep. TypeScript can and should know that
it's okay to eat three snacks when you're STARVING.

But sometimes, we might have some special for our plan for the day. Maybe we want to write
a function that will get us to sleep as quickly as possible, regardless of what state we're
starting in. This code needs to deal with any possible state, and TypeScript should help us
navigate the situation without allowing us to eat a meal when we're too full, take a nap
when we're too hungry, etc.

Let's build out a model for our hunger cycle in TypeScript. We're going to do
this using classes and interfaces.
*/

import { AssertAssignable } from "../util";
import { Starving, Hungry, Peckish, Full, HungerState, Transition, quickestRouteToSleep } from "./code";

 /* This value is used in tests to represent something you should do
 * in the exercise.
 */
const REPLACEME: any = null;


/*
Interfaces define a shape of data, and we'll use an interface to define
a generic shape for any possible hunger state, called HungerState. HungerState
is pre-defined in code.ts

Look at the definition of HungerState. See those question marks? Those mean a
property is optional. Let's take a closer look at what that means.

Let's explore what this interface will let us declare.
*/
test("1. Optional properties", () => {
  const stateWithNoTransitions: HungerState = REPLACEME;
  expect(stateWithNoTransitions).not.toHaveProperty('sleep')
  expect(stateWithNoTransitions).not.toHaveProperty('eatMeal')
  expect(stateWithNoTransitions).not.toHaveProperty('eatSnack')

  const stateWithSleepTransition: HungerState = REPLACEME;
  expect('sleep' in stateWithSleepTransition).toBeTruthy()
  expect('eatMeal' in stateWithSleepTransition).toBeFalsy()
  expect('eatSnack' in stateWithSleepTransition).toBeFalsy()

  // add a few more.
});


/*
Let's implement part of our hunger cycle: just hungry and full.

Define the two as objects implementing the generic state interface.

You'll probably find following the transitions to be less convenient than you expect.
Use TypeScript's type narrowing for `if` and ternary conditionals to
solve type errors.
*/
// test("2. I'm protected from using HungerState's in ways that may be invalid", () => {
//   const hungry: HungerState = { }
//   const full: HungerState = { }

//   let state = hungry;
//   REPLACEME
//   expect(state.name).toEqual("full")
//   REPLACEME
//   expect(state.name).toEqual("hungry")
// })


/*
The last test showed how code that deals with the whole HungerState
category is protected from making transitions that are not valid.

This is a valuable property: Since TypeScript knows that a transition
function may not be present, you're protected from inadvertently
making an invalid transition.

But if we know exactly what starting transition we're in, we shouldn't
need to go through the ceremony of checking each transition. TypeScript
should just know.

When we find static typing to be getting in our way in TypeScript, often
that is a symptom that our types are not precise enough for our current purposes.
HungerState is generic across all states, but what if we had a type
for each specific state? As we'll see, this will help us in cases
where we know exactly what we're dealing with.

We're going to solve this by defining four classes which each implement
our HungerState interface. Each of these classes will be defined like

class Starving implements HungerState {
  ...
}

Implement our hunger cycle by defining these four classes,
providing the appropriate transitions. The class skeletons
are provided for you in the code file for this exercise.
*/

// test("3a. Implement Starving", () => {
//   const state = new Starving();
//   expect(state.name).toEqual("starving")
//   expect(state.eatSnack()).toBeInstanceOf(Hungry)
//   expect(state.eatMeal()).toBeInstanceOf(Full)
//   expect(state).not.toHaveProperty("sleep")
// });

// test("3b. Implement Hungry", () => {
//   const state = new Hungry();
//   expect(state.name).toEqual("hungry")
//   expect(state.eatSnack()).toBeInstanceOf(Peckish)
//   expect(state.eatMeal()).toBeInstanceOf(Full)
//   expect(state).not.toHaveProperty("sleep")
// });

// test("3c. Implement Peckish", () => {
//   const state = new Peckish();
//   expect(state.name).toEqual("peckish")
//   expect(state.eatSnack()).toBeInstanceOf(Full)
//   expect(state).not.toHaveProperty('eatMeal')
//   expect(state).not.toHaveProperty("sleep")
// });

// test("3d. Implement Full", () => {
//   const state = new Full();
//   expect(state.name).toEqual("full")
//   expect(state).not.toHaveProperty("eatSnack")
//   expect(state).not.toHaveProperty('eatMeal')
//   expect(state.sleep()).toBeInstanceOf(Starving)
// });


/*

Classes in typescript are really a combination of a few different things:

* A constructor function that builds instances – literally the same as EcmaScript.
* A type describing the shape of instances returned by the `new` operator.
* A type for the constructor function itself, for accessing static members.

For a class such as `Starving`, we can use the name in two ways.

As a value, where we're referring to the class constructor function itself. 
As a type, we're referring to the shape of _instances_ of the class.

Let's exercise our new classes by walking through a hunger cycle using our classes directly.

*/
// test("4. Can walk through each state with specific type awareness", () => {
//   const state0 = new Starving;
//   type _0 = AssertAssignable<Starving, typeof state0>;
//   const state1 = state0.eatSnack();
//   type _1 = AssertAssignable<Hungry, typeof state1>;
//   // ... continue //
//   const finalState = REPLACEME;
//   expect(finalState).toBeInstanceOf(Starving)
//   type _endType = AssertAssignable<Starving, typeof finalState>;
// })



/*
We can also use our HungerState interface, as we did earlier.

Advance through an entire day of the hunger cycle when dealing with our state
with the generic interface.

You can resolve type errors by checking for valid state transitions before calling them.
Or, you can add a `!` at the end of any value which might be null/undefined
to tell typescript to assume it's present.

*/
// test(`5. Can advance through the whole state machine generically if transitions are checked for validity`, () => {
//   let state : HungerState = new Starving();

//   // TODO: Advance through an entire day of hunger
//   expect(state).toBeInstanceOf(Starving);
// });


/*
Let's now explore an example where the interface works well.

Define a function quickestRouteToSleep which returns an array
of Transitions from a given state to sleeping. It may assume
the state machine at the top of this file.
*/
// test("6. quickestRouteToSleep", () => {
//     expect(quickestRouteToSleep(new Full)).toEqual([Transition.SLEEP]);
//     expect(quickestRouteToSleep(new Peckish)).toEqual([Transition.SNACK, Transition.SLEEP]);
//     expect(quickestRouteToSleep(new Hungry)).toEqual([Transition.MEAL, Transition.SLEEP]);
//     expect(quickestRouteToSleep(new Starving)).toEqual([Transition.MEAL, Transition.SLEEP]);
// })
