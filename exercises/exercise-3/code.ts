import { AssertAssignable } from "../util";

/* Monster Foodies Food Truck Menu
Taco....................$5
  Protein
    Chicken
    BBQ jackfruit
    Carnitas (+$2)
    Salsa (+$0.50)
  Add a second taco for +$3 (+$4 for Carnitas)
Sandwich................$4
  Protein
    Chicken
    BBQ Jackfruit
    Portabello Cap (+$2)
  Optional 1 topping, extra toppings +$0.50
    Cheese
    Lettuce
    Tomato
Add AwesomeSauce to anything for $1!
*/

export type Protein =
  | "chicken" // 🐓
  | "jackfruit" // 🍈

  // Pricey Proteins
  | "carnitas" // 🐖
  | "portabelloCap"; // 🍄

export type EntreeType =
  | "taco" // 🌮
  | "sandwich"; // 🍞

export type Topping =
  | "cheese" // 🧀
  | "lettuce" // 🥗
  | "tomato"; // 🍅

/*
 * ======================================================
 * TODO: Update LineItem to represent an order from the
 * Monster Foodies Truck.
 * ======================================================*/
export type LineItem = {};

export interface Order {
  lineItems: LineItem[];
}

/*
 * ======================================================
 * TODO: Implement priceOrder.
 * ======================================================*/
export function priceOrder(order: Order): number {
  return 1;
}

/** The Monster Foodies truck takes orders on paper slips. 
  * PaperLineItem represents the structure of an order 
  * from the paper slips. Make sure your LineItem type 
  * matches up with the paper slips by confirming that 
  * it is structurally compatible with PaperLineItem.
  */
type PaperLineItem = {
  type: EntreeType;
  protein: Protein;
  awesomeSauce: boolean;
  extraTaco?: boolean;
  salsa?: boolean;
  toppings?: Topping[];
};

/**
 * This AssertAssignable line will have a type error if your
 * line item is not structurally compatible with PaperLineItem.
 */
type _t1 = AssertAssignable<PaperLineItem, LineItem>;
