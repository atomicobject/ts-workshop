import { Protein, Topping, EntreeType, RiceType } from "../exercises/exercise-3/code";
import React from "react";

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

function descFor(type: AllComponents): string {
  switch (type) {
    case "carnitas":
      return "🐖 Carnitas";
    case "awesomeSauce":
      return "☢️ Awesome Sauce";
    case "brownRice":
      return "🍘 Brown Rice";
    case "cheese":
      return "🧀 Cheese";
    case "chicken":
      return "🐓 Chicken";
    case "extraTaco":
      return "🌮 Extra Taco";
    case "jackfruit":
      return "🍈 Jackfruit";
    case "kingSalmon":
      return "🐟 King Salmon";
    case "lettuce":
      return "🥗 Lettuce";
    case "portabelloCap":
      return "🍄 PortaBello Cap";
    case "salsa":
      return "💃 Salsa";
    case "sandwich":
      return "🍞 Sandwich";
    case "sushi":
      return "🍣 Sushi";
    case "taco":
      return "🌮 Taco";
    case "tomato":
      return "🍅 Tomato";
    case "tuna":
      return "🐟 Tuna";
    case "whiteRice":
      return "🍙 White Rice";
  }
}
export const ComponentDesc: React.SFC<IconProps> = props => {
  return <span>{descFor(props.type)}</span>;
};

type TotalsProps = {
  tip: number;
  total: number;
  subtotal: number;
};

export const TotalSection: React.SFC<TotalsProps> = props => (
  <div className="total-section">
    <div className="subtotal-info">{`Subtotal: $${props.subtotal.toFixed(2)}`}</div>
    <div className="subtotal-info">{`Tip: $${props.tip.toFixed(2)}`}</div>

    <div className="grand-total">{`Total: $${props.total.toFixed(2)}`}</div>
  </div>
);

function isPriceyProtein(type: AllComponents) {
  return ["kingSalmon", "portabelloCap", "carnitas"].includes(type);
}

function makeExtraMarker(annotation?: Annotation) {
  if (annotation === "Pricey") {
    return <div className="crown-marker">👑</div>;
  } else if (annotation === "Nuclear") {
    return <div className="crown-marker">☢️</div>;
  } else {
    return <div className="crown-marker">&nbsp;</div>;
  }
}

export const AdditionSummary: React.SFC<AdditionSummaryProps> = props => (
  <li>
    {makeExtraMarker(props.annotation)}
    <div
      className={`addition-label ${
        props.annotation === "Nuclear" ? "awesome-sauce" : ""
      }`}
    >
      <ComponentDesc type={props.additionType} />
    </div>
  </li>
);

export const ItemSummary: React.SFC<ItemSummaryProps> = props => (
  <div className="line-item">
    <h3 className="item-kind">
      <ComponentDesc type={props.entreeType} />
    </h3>
    <ul className="addition-list">
      {/* Render an AdditionSummary using each addition as props */}
      {props.additions.map((addition, i) => (
        // Note: key is required by react for arrays of elements
        <AdditionSummary key={i} {...addition} />
      ))}
    </ul>

    <div className="item-total">{`Total: $${props.itemTotal}`}</div>

    {props.mindBlowing && <div className="awesome-sauce-backdrop">😻</div>}
  </div>
);

export const Receipt: React.SFC<ReceiptProps> = props => (
  <div className="order-summary">
    <h1>Order Summary</h1>
    {props.items.map((item, i) => (
      // Note: key is required by react for arrays of elements
      <ItemSummary key={i} {...item} />
    ))}
    <hr className="divider" />
    <div className="total-section">
      <TotalSection subtotal={props.subtotal} tip={props.tip} total={props.total}/>
    </div>
  </div>
);
