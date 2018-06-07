import { AssertAssignable } from "../util";
import { Starving, Hungry, Peckish, Full, GenericState } from "./code";


/*
  Look at the definition of GenericState. See those question marks?
  Those mean a property is optional. Let's see what that means
*/
test("Optional properties", () => {
  const stateWithNoTransitions: GenericState = {name: "foo"};
  expect(stateWithNoTransitions).not.toHaveProperty('sleep')
  expect(stateWithNoTransitions).not.toHaveProperty('eatMeal')
  expect(stateWithNoTransitions).not.toHaveProperty('eatSnack')

  const stateWithSleepTransition: GenericState = {
    name: "bar",
    sleep: () => stateWithNoTransitions
  };
  expect('sleep' in stateWithSleepTransition).toBeTruthy()
  expect('eatMeal' in stateWithSleepTransition).toBeFalsy()
  expect('eatSnack' in stateWithSleepTransition).toBeFalsy()
});


/*
Let's implement part of our hunger cycle: just hungry and full.

Define the two as objects implementing the generic state interface.

You'll probably find following the transitions to be less convenient than you expect.
Use TypeScript's type narrowing to workaround this problem.
*/
test("", () => {
  const hungry: GenericState = {
    name: "hungry",
    eatMeal: () => full
  }
  const full: GenericState = {
    name: "full",
    sleep: () => hungry
  }

  let state = hungry;

  // REPLACEME

  expect(state.name).toEqual("hungry")
})

test("Implement starving", () => {
  const state = new Starving();
  expect(state.name).toEqual("starving")
  expect(state.eatSnack()).toBeInstanceOf(Hungry)
  expect(state.eatMeal()).toBeInstanceOf(Full)
  expect(state).not.toHaveProperty("sleep")
});

test("Implement Hungry", () => {
  const state = new Hungry();
  expect(state.name).toEqual("hungry")
  expect(state.eatSnack()).toBeInstanceOf(Peckish)
  expect(state.eatMeal()).toBeInstanceOf(Full)
  expect(state).not.toHaveProperty("sleep")
});

test("Implement Peckish", () => {
  const state = new Peckish();
  expect(state.name).toEqual("peckish")
  expect(state.eatSnack()).toBeInstanceOf(Full)
  expect(state).not.toHaveProperty('eatMeal')
  expect(state).not.toHaveProperty("sleep")
});

test("Implement Full", () => {
  const state = new Full();
  expect(state.name).toEqual("full")
  expect(state).not.toHaveProperty("eatSnack")
  expect(state).not.toHaveProperty('eatMeal')
  expect(state.sleep()).toBeInstanceOf(Starving)
});

test(`can define state machines?`, () => {

  const INITIAL_STATE = new Starving();

  const state0 = INITIAL_STATE;
  type _0 = AssertAssignable<Starving, typeof state0>;

  const state1 = state0.eatSnack();
  type _1 = AssertAssignable<Hungry, typeof state1>;

  const state2 = state1.eatSnack();
  type _2 = AssertAssignable<Peckish, typeof state2>;

  const state3 = state2.eatSnack();
  type _3 = AssertAssignable<Full, typeof state3>;

  const state4 = state3.sleep();
  type _4 = AssertAssignable<Starving, typeof state4>;

  let s: GenericState = state0;
  // console.log(s.name)
  for (const _ of Array(5)) {
    if (s.eatSnack && Math.random() < 0.7) {
      // console.log("Eating a snack")
      s = s.eatSnack();
      // console.log(s.name)
    }
    if (s.eatSnack && Math.random() < 0.5) {
      // console.log("Eating a snack")
      s = s.eatSnack();
      // console.log(s.name)
    }
    if (s.eatMeal && Math.random() < 0.5) {
      // console.log("Eating a meal")
      s = s.eatMeal();
      // console.log(s.name)
    }
    if (s.sleep) {
      // console.log("taking a nap")
      s = s.sleep();
      // console.log(s.name)
    }
  }
});
