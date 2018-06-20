import { AssertAssignable } from "../util";

type Foo = Protein | EntreeType;

/* Monster's Foodie Truck Menu

Add AwesomeSauce to anything for $1!

Taco....................$5
  Protein
    Chicken
    BBQ jackfruit
    Carnitas (+$2)
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
  | "sandwich"; // 🥪

export interface Taco {
  type: "taco";
  protein: "chicken" | "jackfruit" | "carnitas";
  extraTaco: boolean; // 🌮
  salsa: boolean; // 💃
}

export type RiceType = 
| "brownRice"  // 🍘
| "whiteRice"; // 🍙

export interface Sushi {
  type: "sushi";
  protein: "kingSalmon" | "tuna";
  riceType: RiceType;
}

export type Topping =
  | "cheese" // 🧀
  | "lettuce" // 🍃
  | "tomato"; // 🍅

export interface Sandwich {
  type: "sandwich";
  protein: "chicken" | "portabelloCap";
  toppings: Topping[];
}

export type MenuItem = Taco | Sushi | Sandwich;

export interface Extras {
  awesomeSauce: boolean; // ☢️ and 🤯
}

export type LineItem = MenuItem & Extras;

export interface Order {
  lineItems: LineItem[];
}

function priceMenuItem(item: MenuItem): number {
  const basePrice = hasPriceyProtein(item) ? 7 : 5;

  if (item.type === "taco") {
    const extraTacoPrice = item.extraTaco ? 3 : 0;
    const salsaPrice = item.salsa ? 0.5 : 0;
    return basePrice + extraTacoPrice + salsaPrice;
  }

  return basePrice;
}

function priceLineItem(item: LineItem): number {
  const awesomeSaucePrice = item.awesomeSauce ? 1 : 0;
  return priceMenuItem(item) + awesomeSaucePrice;
}

function hasPriceyProtein(item: { protein: Protein }) {
  return ["kingSalmon", "carnitas", "portabelloCap"].includes(item.protein);
}

function priceOrder(order: Order): number {
  return order.lineItems.reduce((runningTotal, item) => {
    return runningTotal + priceLineItem(item);
  }, 0);
}

/* Monster's foodie truck takes orders on paper slips, 
   but sometimes people don't read the menu before they
   order. */
// type PaperOrder = {
//   type?: EntreeType;
//   protein?: Protein;
//   awesomeSauce?: boolean;
//   beanType?: BeanType;
//   extraNapkins?: boolean;
//   extraTaco?: boolean;
//   noodleStyle?: NoodleStyle;
//   riceType?: RiceType;
//   salsa?: boolean;
//   toppings?: Topping[];
// };

// function validateItem(order: PaperOrder): LineItem {}

// function takeOrder(orders: PaperOrder[]): Order {}
