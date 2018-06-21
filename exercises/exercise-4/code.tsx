import { Protein, Topping, EntreeType, RiceType } from "../exercise-3/code";
import React from "react";
import { Flavor } from "../util";

export interface ReceiptProps {
  /** Array of line item summaries */
  items: ItemSummaryProps[];
  /** Order subtotal */
  subtotal: number;
  /** Tip amount */
  tip: number;
  /** Order total */
  total: number;
}
export interface ItemSummaryProps {
  /** Entree type – determines emoji/label */
  entreeType: EntreeType;
  /** List of additions - protein, toppings, extras */
  additions: AdditionSummaryProps[];
  /** Backdrop on/off */
  mindBlowing: boolean;
  /** Item total beneath extras */
  itemTotal: number;
}
export interface AdditionSummaryProps {
  /** Special indicator, pricey or nuclear? */
  annotation?: Annotation;
  /** Type of protein/topping/etc. */
  additionType: AllComponents;
}
export enum Annotation {
  /** Gets a crown */
  Pricey = "Pricey",
  /** Nuclear */
  Nuclear = "Nuclear"
}

export type Extras = "extraTaco" | "awesomeSauce" | "salsa";

export type AllComponents = Protein | Topping | EntreeType | RiceType | Extras;
export interface IconProps {
  type: AllComponents;
}


// 
function descFor(type: AllComponents): string {
  switch (type) {
    case "carnitas":
      return "🐖 Carnitas";

    default:
      throw new Error(`Not implemented case ${type}`);
  }
}
export const ComponentDesc: React.SFC<IconProps> = props => {
  return <span>{descFor(props.type)}</span>;
};

type TotalsProps = {
  /* Replace Me */
};
export const TotalSection: React.SFC<TotalsProps> = props => {
  const examplePrice = 3.50;
  return <div>{3.50.toFixed(2)}</div>;
};

export const AdditionSummary: React.SFC<AdditionSummaryProps> = props => (
  <li>An item</li>
);

export const ItemSummary: React.SFC<ItemSummaryProps> = props => (
  <div className="line-item">
    <ul className="addition-list">
      {/* Render an AdditionSummary using each addition as props */}
      {props.additions.map((addition, i) => (
        // Note: key is required by react for arrays of elements
        <AdditionSummary key={i} {...addition} />
      ))}
    </ul>
  </div>
);

export const Receipt: React.SFC<ReceiptProps> = props => (
  <div className="order-summary">
    {props.items.map((item, i) => (
      // Note: key is required by react for arrays of elements
      <ItemSummary key={i} {...item} />
    ))}
  </div>
);
