import { AssertAssignable } from "../util";

type Foo = Protein | EntreeType

/* Monster's Foodie Truck Menu

Add AwesomeSauce to anything for $1!

Taco....................$5
  Protein
    Chicken
    Beef
    BBQ jackfruit
    Extra veggies
    Carnitas (+$2)
  Add a second taco for +$3 (+$4 for Carnitas)
Burrito.................$7 
  Protein    
    Chicken
    Beef
    BBQ jackfruit
    Extra veggies
    Carnitas (+$2)
  Beans
    Black Beans
    Pinto Beans
  Rice
    White Rice
    Brown Rice (+$1) 
Sushi ..................$8
  Protein    
    Tuna
    Tofu
    King Salmon (+$2)
  Rice
    White Rice
    Brown Rice (+$1) 
Sandwich................$4
  Protein
    Chicken
    Turkey
    Beef
    Extra Veggies
    Portabello Cap ($2)
  Choose up to 3 toppings, extra toppings +$0.50
    Cheese
    Spinach
    Peppers
    Mushrooms
    Tomato
    Cucumber
*/


export enum Protein {
  Chicken = "Chicken", // 🐓
  Tofu = "Tofu",     // 
  Jackfruit = "Jackfruit", // 🍈
  Beef = "Beef", // 🐄
  Tuna = "Tuna", // 🐟
  Turkey = "Turkey", //🦃
  ExtraVeggies = "ExtraVeggies", // 🥗

  // Pricey Proteins
  Carnitas = "Carnitas", // 🐖
  KingSalmon = "KingSalmon", // 🐟
  PortabelloCap = "PortabelloCap" // 🍄
}

export enum EntreeType {
  Taco = "Taco", // 🌮
  Burrito = "Burrito", // 🌯
  Sushi = "Sushi", // 🍣
  Sandwich = "Sandwich", // 🥪 
}

interface Taco {
  type: EntreeType.Taco;
  protein:
    | Protein.Chicken
    | Protein.Beef
    | Protein.ExtraVeggies
    | Protein.Jackfruit
    | Protein.Carnitas;
  extraTaco: boolean;
  salsa: boolean;
}

interface Burrito {
  type: EntreeType.Burrito;
  protein:
    | Protein.Chicken
    | Protein.Beef
    | Protein.ExtraVeggies
    | Protein.Jackfruit
    | Protein.Carnitas;
  salsa: boolean;
  riceType: RiceType;
  beanType: BeanType;
}

export enum BeanType {
  BlackBeans = "BlackBeans",
  PintoBeans = "PintoBeans"
}

export enum RiceType {
  BrownRice = "BrownRice",
  WhiteRice = "WhiteRice"
}

interface Sushi {
  type: EntreeType.Sushi;
  protein: Protein.KingSalmon | Protein.Tuna | Protein.Tofu;
  riceType: RiceType;
}

export enum Topping {
  Cheese = "Cheese", // 🧀
  Spinach = "Spinach", // 🍃
  Peppers = "Peppers", // 🌶
  Mushrooms = "Mushrooms", // 🍄
  Tomato = "Tomato", // 🍅
  Cucumber = "Cucumber" // 🥒
}

interface Sandwich {
  type: EntreeType.Sandwich;
  protein:
    | Protein.Chicken
    | Protein.Turkey
    | Protein.PortabelloCap
    | Protein.ExtraVeggies
    | Protein.Beef;
  toppings: Topping[];
}

type MenuItem = Taco | Burrito | Sushi | Sandwich;

interface Extras {
  awesomeSauce: boolean; // 🤯
  extraNapkins: boolean;
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
