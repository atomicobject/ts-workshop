import {
  Protein,
  Topping,
  EntreeType,
  BeanType,
  RiceType
} from "../exercise-4/code";
import React from "react";
import { Flavor } from "../util";

export type Dollars = Flavor<number, "dollars">;

export interface ReceiptProps {
  /** Array of line item summaries */
  items: ItemSummaryProps[];
  /** Order subtotal */
  subtotal: Dollars;
  /** Tip amount */
  tip: Dollars;
  /** Order total */
  total: Dollars;
}
export interface ItemSummaryProps {
  /** Entree type – determines emoji/label */
  entreeType: EntreeType;
  /** Base entree price, next to e.g. Taco/Sandwich */
  basePrice: Dollars;
  /** List of additions - protein, toppings, extras */
  additions: AdditionSummaryProps[];
  /** Backdrop on/off */
  mindBlowing: boolean;
  /** Item total beneath extras */
  itemTotal: Dollars;
}
export interface AdditionSummaryProps {
  /** Type of protein/topping/etc. */
  additionType: AllComponents;
  /** Addition cost. 0 for free items. */
  additionPrice: Dollars;
  /** Special indicator, pricey or nuclear? */
  annotation?: Annotation;
}
export enum Annotation {
  /** Gets a crown */
  Pricey = "Pricey",
  /** Nuclear */
  Nuclear = "Nuclear"
}

export type AllComponents =
  | Protein
  | Topping
  | EntreeType
  | BeanType
  | RiceType;
export interface IconProps {
  type: AllComponents;
}

// function iconFor(type: AllComponents): string {
//   switch (type) {
//     case Protein.Carnitas:
//       return "🐖";
//     // implement me
//   }
// }
export const Icon: React.SFC<IconProps> = props => {
  return <span>{/* {iconFor(props.type)} */}</span>;
};

type TotalsProps = {
  /* Replace Me */
};
export const TotalSection: React.SFC<TotalsProps> = props => <div />;

export const AdditionSummary: React.SFC<AdditionSummaryProps> = props => (
  <li>An item</li>
);

export const ItemSummary: React.SFC<ItemSummaryProps> = props => (
  <div>
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
  <div>
    {props.items.map((item, i) => (
      // Note: key is required by react for arrays of elements
      <ItemSummary key={i} {...item} />
    ))}
  </div>
);
