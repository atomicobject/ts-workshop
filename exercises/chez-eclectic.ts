// Chez Eclectic

export enum AmuseBouche {
  CocktailWeiner = "CocktailWeiner",
  BruschettaBite = "BruschettaBite"
}
export enum Appetizer {
  FriedCauliflower = "FriedCauliflower",
  Potstickers = "Potstickers"
}
export enum Salad {
  Caesar = "Caesar",
  Fattoush = "Fattoush"
}
export enum Entree {
  Lasagna = "Lasagna",
  Curry = "Curry"
}
export enum Dessert {
  IceCream = "IceCream",
  FlourlessChocolateCake = "FlourlessChocolateCake"
}

export interface ClassicDinnerOrder {
  salad: Salad;
  entree: Entree;
}
export interface DinnerWithDessert {
  salad: Salad;
  entree: Entree;
  dessert: Dessert;
}

export interface QuickSnackOrder {
  amuse: AmuseBouche;
  appetizer: Appetizer;
}
export interface WholeEnchiladaOrder {
  amuse: AmuseBouche;
  appetizer: Appetizer;
  salad: Salad;
  entree: Entree;
  dessert: Dessert;
}
