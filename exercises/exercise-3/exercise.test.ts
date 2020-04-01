import { LineItem, Order, priceOrder } from "./code";
import { AssertAssignable } from "../util";

/** 
 * npm run exercise-3
 * 
 * This exercise also has code associated with it!
 * 
 * Instead of editing the tests to make them pass, open up `exercise-3/code.ts`
 * and change that. You should only need to uncomment the tests as you move through
 * and enrich your implementation in code.ts.
 * 
 **/



test("Ensure that our LineItem type is compatible with PaperLineItem", () => {
  /**
   * We don't want to make the Monster Foodies Truck change their 
   * order slips, so make sure that you use the same properties 
   * as PaperLineItem. This AssertAssignable line will have a 
   * type error if your line item is not structurally compatible 
   * with PaperLineItem.
   */
  type _t1 = AssertAssignable<PaperLineItem, LineItem>;
})

/**************************************************************************/


// test("it allows a valid taco", () => {
//   const taco_1: LineItem = {
//     protein: "chicken",
//     type: "taco",
//     extraTaco: true,
//     salsa: true,
//     awesomeSauce: true
//   };
//   const taco_2: LineItem = {
//     protein: "jackfruit",
//     type: "taco",
//     extraTaco: true,
//     salsa: false,
//     awesomeSauce: false
//   };
//   const taco_3: LineItem = {
//     protein: "carnitas",
//     type: "taco",
//     extraTaco: false,
//     salsa: true,
//     awesomeSauce: false
//   };
// });

/**************************************************************************/

// test("it disallows invalid tacos", () => {
//   // typings:expect-error
//   const badTaco_1: LineItem = {
//     type: "taco",
//     protein: "kingSalmon",
//     extraTaco: false,
//     salsa: true,
//     awesomeSauce: false
//   };

//   // typings:expect-error
//   const badTaco_2: LineItem = {
//     type: "taco",
//     protein: "carnitas",
//     riceType: "brownRice",
//     awesomeSauce: false
//   };
// });

/**************************************************************************/

// test("it allows valid sandwiches", () => {
//   const sandwich_1: LineItem = {
//     type: "sandwich",
//     protein: "chicken",
//     toppings: ["cheese", "lettuce"],
//     awesomeSauce: false
//   };
//   const sandwich_2: LineItem = {
//     type: "sandwich",
//     protein: "portabelloCap",
//     toppings: ["lettuce", "tomato"],
//     awesomeSauce: true
//   };
// });

/**************************************************************************/

// test("it disallows invalid sandwiches", () => {
//   // typings:expect-error
//   const badSandwich_1: LineItem = {
//     type: "sandwich",
//     protein: "portabelloCap",
//     toppings: ["tomato"],
//     extraTaco: false,
//     salsa: true,
//     awesomeSauce: false
//   };
// });

// /*************************************************************************/

// test('it can price a simple sandwich', () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "sandwich",
//         protein: "chicken",
//         awesomeSauce: false,
//         toppings: []
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(4);
// });

// /*************************************************************************/

// test('it can price a sandwich with one free topping and awesomesauce', () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "sandwich",
//         protein: "jackfruit",
//         awesomeSauce: true,
//         toppings: ['cheese'] // free
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(4 + 1);
// });

// /*************************************************************************/

// test('it can price a sandwich with a premium protein', () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "sandwich",
//         protein: "portabelloCap",
//         awesomeSauce: false,
//         toppings: ['cheese'] // free
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(4 + 2);
// });

// /*************************************************************************/

// test('it can price a sandwich with extra toppings', () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "sandwich",
//         protein: "chicken",
//         awesomeSauce: false,
//         toppings: ['cheese', "lettuce", 'tomato']
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(4 + 0.5*2);
// });

// /*************************************************************************/

// test('it can price a simple taco', () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "taco",
//         protein: "chicken",
//         salsa: false,
//         awesomeSauce: false,
//         extraTaco: false
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(5);
// })

// /*************************************************************************/

// test('it can price a taco with an extra taco', () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "taco",
//         protein: "jackfruit",
//         salsa: false,
//         awesomeSauce: false,
//         extraTaco: true
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(5 + 3);
// })

// /*************************************************************************/

// test('it can price a taco with both sauces', () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "taco",
//         protein: "chicken",
//         salsa: true,
//         awesomeSauce: true,
//         extraTaco: false
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(5 + 1 + 0.5);
// })

// /*************************************************************************/

// test('it can price a single taco with carnitas', () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "taco",
//         protein: "carnitas",
//         salsa: false,
//         awesomeSauce: false,
//         extraTaco: false
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(5 + 2);
// })

// /*************************************************************************/

// test('it can price two tacos with carnitas', () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "taco",
//         protein: "carnitas",
//         salsa: false,
//         awesomeSauce: false,
//         extraTaco: true
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(5 + 2 + 4);
// })

// /*************************************************************************/

// test("correctly prices a complicated order", () => {
//   const order: Order = {
//     lineItems: [
//       {
//         type: "sandwich",
//         protein: "chicken",
//         awesomeSauce: false,
//         toppings: ["cheese", "lettuce", "tomato"]
//       },
//       {
//         type: "taco",
//         protein: "carnitas",
//         salsa: true,
//         awesomeSauce: false,
//         extraTaco: true
//       }
//     ]
//   };
//   expect(priceOrder(order)).toEqual(
//     4 + 0.5*(3-1) +   // The sandwich
//     5 + 2 + 4 + 0.5        // The taco
//   );
// });

// /*************************************************************************/
