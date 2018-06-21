import { AssertAssignable } from "../util";

type Foo = Protein | EntreeType;

/* Monster Foodies Food Truck Menu

Add AwesomeSauce to anything for $1!

Taco....................$5
  Protein
    Chicken
    BBQ jackfruit
    Carnitas (+$2)
    Salsa (+$0.50)
  Add a second taco for +$3 (+$4 for Carnitas)
Sushi ..................$8
  Protein    
    Tuna
    King Salmon (+$2)
  Rice
    White Rice
    Brown Rice (+$1) 
Sandwich................$4
  Protein
    Chicken
    BBQ Jackfruit
    Portabello Cap (+$2)
  Optional 1 topping, extra toppings +$0.50
    Cheese
    Lettuce
    Tomato
*/

export type Protein =
  | "chicken" // 🐓
  | "jackfruit" // 🍈
  | "tuna" // 🐟

  // Pricey Proteins
  | "carnitas" // 🐖
  | "kingSalmon" // 🐟
  | "portabelloCap"; // 🍄

export type EntreeType =
  | "taco" // 🌮
  | "sushi" // 🍣
  | "sandwich"; // 🍞

export type Topping =
  | "cheese" // 🧀
  | "lettuce" // 🍃
  | "tomato"; // 🍅

export type RiceType =
  | "brownRice" // 🍘
  | "whiteRice"; // 🍙

export type LineItem = any;

export interface Order {
  lineItems: LineItem[];
}

export function priceOrder(order: Order): number {}

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
