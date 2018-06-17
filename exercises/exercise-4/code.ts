import { AssertAssignable } from "../util";

type Foo = Protein | EntreeType


export enum Protein {
  Chicken = "Chicken", // 🐓
  Tofu = "Tofu",     // 
  Jackfruit = "Jackfruit", // 🍈
  Beef = "Beef", // 🐄
  Tuna = "Tuna", // 🐟
  Turkey = "Turkey", //🦃
  ExtraVeggies = "ExtraVeggies", // 🥗

  // Pricey Proteins
  KobeBeef = "KobeBeef", // 🥩
  Carnitas = "Carnitas", // 🐖
  KingSalmon = "KingSalmon", // 🐟
  PortabelloCap = "PortabelloCap" // 🍄
}

export enum EntreeType {
  Taco = "Taco", // 🌮
  Burrito = "Burrito", // 🌯
  Sushi = "Sushi", // 🍣
  Pasta = "Pasta", // 🍝
  PadThai = "PadThai", //🍲
  Sandwich = "Sandwich", // 🥪
  Pizza = "Pizza" // 🍕
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

enum NoodleStyle {
  Cavatappi = "Cavatappi",
  Macaroni = "Macaroni",
  Spaghetti = "Spaghetti",
  Bowtie = "Bowtie"
}

interface Pasta {
  type: EntreeType.Pasta;
  protein: Protein.Chicken | Protein.ExtraVeggies | Protein.PortabelloCap;
  noodleStyle: NoodleStyle;
}

interface PadThai {
  type: EntreeType.PadThai;
  protein: Protein.Beef | Protein.Chicken | Protein.ExtraVeggies | Protein.Tofu;
}

export enum Topping {
  Cheese = "Cheese", // 🧀
  Spinach = "Spinach", // 🍃
  Peppers = "Peppers", // 🌶
  Mushrooms = "Mushrooms", // 🍄
  Tomato = "Tomato", // 🍅
  Mayo = "Mayo", 
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

type MenuItem = Taco | Burrito | Sushi | Pasta | PadThai | Sandwich;

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
    Protein.KobeBeef,
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
