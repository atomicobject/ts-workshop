import { AssertAssignable } from "./util";

type Food = 'apples' | 'spaghetti' | 'tacos' | 'pie'

describe("interfaces/object types", () => {
  // it("can make fields optional", () => {
  //   type Example = { optionalField?: string }

  //   /** What is the type of an optional field? */
  //   type _1 = AssertAssignable<REPLACEME, Example['optionalField']>

  //   type Burger = {
  //     REPLACEME
  //   }

  //   const validBurger1 : Burger= {
  //     patties: 2
  //   }
  //   const validBurger2 : Burger= {
  //     patties: 1,
  //     ketchup: true
  //   }
  //   const validBurger3 : Burger= {
  //     patties: 1,
  //     ketchup: true,
  //     pickles: 2
  //   }

  //   // typings:expect-error
  //   const notABurger1 : Burger= {
  //     ketchup: true,
  //     pickles: 7,
  //   }
  //   // typings:expect-error
  //   const notABurger2 : Burger= {
  //     ketchup: true,
  //     pickles: 7,
  //   }

  // });


  /*--------------------------------------------------------------------------------*/


  // it("Can specify function-like things", () => {
  //   type BiteEstimator = {
  //     (s: Food): number;
  //   };

  //   /** Make a value that's a valid BiteEstimator */
  //   const countBites: BiteEstimator = REPLACEME;

  //   /** Replace the REPLACEME type here with a function signature that's compatible with our BiteEstimator */
  //   type _1 = AssertAssignable<REPLACEME, BiteEstimator>
  // });



  /*--------------------------------------------------------------------------------*/

  // it("can describe object constructor (new-able) functions", () => {
  //   class Meal {}
  //   const lunch = new Meal();
  //   const mealMaker = () => lunch

  //   /*  */
  //   type Chef = {
  //     new (): Meal
  //   };

  //   /* What can be our chef? What things work? What don't and why? */
  //   const chef: Chef = REPLACEME;

  //   /* The chef can prepare a new bite to eat */
  //   const somethingToEat = new chef();

  //   /* But only when asked nicely with `new`. */
  //   // typings:expect-error
  //   expect(() => chef()).toThrow();
  // });


  it(`can define state machines?`, () => {
    interface GenericState {
      name: string
      sleep?: ()=> GenericState
      eatSnack?:()=> GenericState
      eatMeal?:()=> GenericState
    }

    class Starving implements GenericState {
      name = "starving"
      eatSnack = () => new Hungry
      eatMeal = () => new Full
    }

    class Hungry implements GenericState {
      name = "hungry"
      eatSnack = () => new Peckish
      eatMeal = () => new Full
    }

    class Peckish implements GenericState {
      name = "peckish"
      eatSnack = () => new Full
    }

    class Full implements GenericState {
      name = "full"
      sleep = () => new Starving
    }

    type State = Starving | Hungry | Peckish | Full

    const INITIAL_STATE = new Starving;

    const state0 = INITIAL_STATE;
    type _0 = AssertAssignable<Starving, typeof state0>

    const state1 = state0.eatSnack()
    type _1 = AssertAssignable<Hungry, typeof state1>

    const state2 = state1.eatSnack()
    type _2 = AssertAssignable<Peckish, typeof state2>

    const state3 = state2.eatSnack()
    type _3 = AssertAssignable<Full, typeof state3>

    const state4 = state3.sleep()
    type _4 = AssertAssignable<Starving, typeof state4>

    let s: GenericState = state0;
    // console.log(s.name)
    for(const x of Array(5)) {
      if (s.eatSnack && Math.random() < 0.7) {
        // console.log("Eating a snack")
        s = s.eatSnack()
        // console.log(s.name)
      }
      if (s.eatSnack && Math.random() < 0.5) {
        // console.log("Eating a snack")
        s = s.eatSnack()
        // console.log(s.name)
      }
      if (s.eatMeal && Math.random() < 0.5) {
        // console.log("Eating a meal")
        s = s.eatMeal()
        // console.log(s.name)
      }
      if (s.sleep) {
        // console.log("taking a nap")
        s = s.sleep()
        // console.log(s.name)
      }
    }
  })
})