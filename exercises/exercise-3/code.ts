import { AssertAssignable } from "../util";

type Foo = Protein | EntreeType;

/* Monster Foodies Food Truck Menu

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

export type Topping =
  | "cheese" // 🧀
  | "lettuce" // 🍃
  | "tomato"; // 🍅

interface Taco {
  type: "taco";
  protein: "chicken" | "jackfruit" | "carnitas";
  extraTaco: boolean; // 🌮
  salsa: boolean; // 💃
}

export type RiceType =
  | "brownRice" // 🍘
  | "whiteRice"; // 🍙

export interface Sushi {
  type: "sushi";
  protein: "kingSalmon" | "tuna";
  riceType: RiceType;
}

export interface Sandwich {
  type: "sandwich";
  protein: "chicken" | "portabelloCap";
  toppings: Topping[];
}

interface Extras {
  awesomeSauce: boolean; // ☢️ and 🤯
}

type MenuItem = Taco | Sushi | Sandwich;
export type LineItem = MenuItem & Extras;

export interface Order {
  lineItems: LineItem[];
}

export function priceMenuItem(item: MenuItem): number {
  let itemPrice;
  if (item.type === "taco") {
    const basePrice = 5;
    const extraTacoPrice = item.extraTaco
      ? hasPriceyProtein(item)
        ? 4
        : 3
      : 0;
    const priceyPrice = hasPriceyProtein(item) ? 2 : 0;
    return basePrice + extraTacoPrice + priceyPrice;
  }

  if (item.type === "sandwich") {
    const basePrice = 4;
    const extraToppingsPrice =
      item.toppings.length > 1 ? (item.toppings.length - 1) * 0.5 : 0;
    const priceyPrice = hasPriceyProtein(item) ? 2 : 0;
    return basePrice + extraToppingsPrice + priceyPrice;
  } else {
    const basePrice = 8;
    const ricePrice = item.riceType === "brownRice" ? 1 : 0;
    const priceyPrice = hasPriceyProtein(item) ? 2 : 0;
    return basePrice + ricePrice + priceyPrice;
  }
}

function priceLineItem(item: LineItem): number {
  const awesomeSaucePrice = item.awesomeSauce ? 1 : 0;
  return priceMenuItem(item) + awesomeSaucePrice;
}

function hasPriceyProtein(item: { protein: Protein }) {
  return ["kingSalmon", "carnitas", "portabelloCap"].includes(item.protein);
}

export function priceOrder(order: Order): number {
  return order.lineItems.reduce((runningTotal, item) => {
    return runningTotal + priceLineItem(item);
  }, 0);
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

type _t1 = AssertAssignable<PaperLineItem, LineItem>
