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
export type LineItem = any;

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

/* Monster's foodie truck takes orders on paper slips, 
   but sometimes people don't read the menu before they
   order. */
type PaperLineItem = {
  type: EntreeType;
  protein: Protein;
  awesomeSauce: boolean;
  extraTaco?: boolean;
  riceType?: RiceType;
  salsa?: boolean;
  toppings?: Topping[];
};

type _t1 = AssertAssignable<PaperLineItem, LineItem>;
