import {
  Protein,
  Topping,
  OrderType,
  BeanType,
  RiceType
} from "../exercise-4/code";
import React from "react";
import { Flavor } from "../util";

export type Dollars = Flavor<number, "dollars">;

export enum Annotation {
  Pricey = "Pricey",
  Awesome = "Awesome"
}

export interface AdditionSummaryProps {
  additionType: AllComponents;
  additionPrice: Dollars;
  annotation?: Annotation;
}

export interface ItemSummaryProps {
  entreeType: OrderType;
  basePrice: Dollars;
  additions: AdditionSummaryProps[];
  mindBlowing: boolean;
  itemTotal: Dollars;
}

export interface ReceiptProps {
  items: ItemSummaryProps[];
  subtotal: Dollars;
  tip: Dollars;
  total: Dollars;
}

export type AllComponents = Protein | Topping | OrderType | BeanType | RiceType;
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
        <AdditionSummary key={i} {...addition} />
      ))}
    </ul>
  </div>
);

export const Receipt: React.SFC<ReceiptProps> = props => <div />;
