import { AssertAssignable } from "../util";

type Foo = Protein | EntreeType

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
    Portabello Cap ($2)
  Choose up to 3 toppings, extra toppings +$0.50
    Cheese
    Lettuce
    Tomato
*/


export enum Protein {
  Chicken = "Chicken", // 🐓
  Jackfruit = "Jackfruit", // 🍈
  Tuna = "Tuna", // 🐟

  // Pricey Proteins
  Carnitas = "Carnitas", // 🐖
  KingSalmon = "KingSalmon", // 🐟
  PortabelloCap = "PortabelloCap" // 🍄
}

export enum EntreeType {
  Taco = "Taco", // 🌮
  Sushi = "Sushi", // 🍣
  Sandwich = "Sandwich", // 🥪 
}

interface Taco {
  type: EntreeType.Taco;
  protein:
    | Protein.Chicken
    | Protein.Jackfruit
    | Protein.Carnitas;
  extraTaco: boolean;
  salsa: boolean;
}

export enum RiceType {
  BrownRice = "BrownRice",
  WhiteRice = "WhiteRice"
}

interface Sushi {
  type: EntreeType.Sushi;
  protein: Protein.KingSalmon | Protein.Tuna;
  riceType: RiceType;
}

export enum Topping {
  Cheese = "Cheese", // 🧀
  Lettuce = "Lettuce", // 🍃
  Tomato = "Tomato", // 🍅
}

interface Sandwich {
  type: EntreeType.Sandwich;
  protein:
    | Protein.Chicken
    | Protein.PortabelloCap
  toppings: Topping[];
}

type MenuItem = Taco | Sushi | Sandwich;

interface Extras {
  awesomeSauce: boolean; // 🤯
}

type LineItem = MenuItem & Extras;

export interface Order {
  lineItems: LineItem[];
}


function priceMenuItem(item: MenuItem): number {
  const basePrice = hasPriceyProtein(item) ? 7 : 5;

  if (item.type === EntreeType.Taco) {
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
  return [
    Protein.KingSalmon,
    Protein.Carnitas,
    Protein.PortabelloCap
  ].includes(item.protein);
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
