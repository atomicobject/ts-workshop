import { AssertAssignable } from "../exercises/util";

/* Monster Foodies Food Truck Menu
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
Add AwesomeSauce to anything for $1!
*/

interface Taco {
    type: "taco";
    protein: "chicken" | "jackfruit" | "carnitas";
    extraTaco: boolean; // 🌮
    salsa: boolean; // 💃
  }
  
  
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
  | "lettuce" // 🥗
  | "tomato"; // 🍅

export type RiceType =
  | "brownRice" // 🍘
  | "whiteRice"; // 🍙

export interface Order {
  lineItems: LineItem[];
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

function priceSandwich(sandwich: Sandwich): number {
  const protein = sandwich.protein === "portabelloCap" ? 2 : 0;
  const toppings = Math.max(0, sandwich.toppings.length - 1) * 0.5;
  return 4 + protein + toppings;
}

function priceTaco(taco: Taco): number {
  const protein = taco.protein === "carnitas" ? 2 : 0;
  const salsa = taco.salsa ? 0.5 : 0;
  const secondTaco = !taco.extraTaco ? 0 : protein > 0 ? 4 : 3;
  return 5 + protein + salsa + secondTaco;
}

function priceSushi(sushi: Sushi): number {
  const protein = sushi.protein === "kingSalmon" ? 2 : 0;
  const rice = sushi.riceType === "brownRice" ? 1 : 0;
  return 8 + protein + rice;
}

export function priceItem(item: LineItem) {
  let basePrice: number;
  switch (item.type) {
    case "sandwich":
      basePrice = priceSandwich(item);
      break;
    case "taco":
      basePrice = priceTaco(item);
      break;
    case "sushi":
      basePrice = priceSushi(item);
      break;
    default:
      throw new Error("bad mojo");
  }
  const awesomeSauce = item.awesomeSauce ? 1 : 0;
  return basePrice + awesomeSauce;
}

export function priceOrder(order: Order): number {
  return order.lineItems.reduce((sum, item) => sum + priceItem(item), 0);
}
