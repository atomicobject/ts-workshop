import { Protein, Topping, EntreeType } from "../exercise-3/code";
import * as React from "react";
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
  additionType: FoodStuffs;
}

export type Annotation = "pricey" | "nuclear";

export type Extras = "extraTaco" | "awesomeSauce" | "salsa";

export type FoodStuffs = Protein | Topping | EntreeType | Extras;
export interface IconProps {
  type: FoodStuffs;
}


function descFor(type: FoodStuffs): JSX.Element {
  switch (type) {
    case "carnitas":
      return (
        <li>
          <div className="crown-marker">👑</div>
          <div className="addition-label">🐖 Carnitas</div>
        </li>
      );
    case "awesomeSauce":
      return (
        <li>
          <div className="crown-marker">☢️</div>
          <div className="addition-label awesome-sauce">Awesome Sauce</div>
        </li>
      );
    case "cheese":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🧀 Cheese</div>
        </li>
      );
    case "chicken":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🐓 Chicken</div>
        </li>
      );
    case "extraTaco":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🌮 Extra Taco</div>
        </li>
      );
    case "jackfruit":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🍈 Jackfruit</div>
        </li>
      );
    case "lettuce":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🥗 Lettuce</div>
        </li>
      );
    case "portabelloCap":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🍄 PortaBello Cap</div>
        </li>
      );
    case "salsa":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">💃 Salsa</div>
        </li>
      );
    case "sandwich":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🍞 Sandwich</div>
        </li>
      );
    case "taco":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🌮 Taco</div>
        </li>
      );
    case "tomato":
      return (
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🍅 Tomato</div>
        </li>
      );

    default:
      return (
        <li>
          <div className="crown-marker">‼️</div>
          <div className="addition-label">Invalid Addition</div>
        </li>
      );
  }
}

//Generates title
//Really didn't need to be implemented in this use case, but
//-it adds the extra functionality of if a theoretical customer
//-only wanted to buy one of these, addtion or not, individually
function getTitle(type: FoodStuffs): String {
  switch(type){
    case "carnitas":
      return "🐖 Carnitas";
    case "awesomeSauce":
      return "☢️ Awesome Sauce";
    case "cheese":
      return "🧀 Cheese";
    case "chicken":
      return "🐓 Chicken";
    case "extraTaco":
      return "🌮 Extra Taco";
    case "jackfruit":
      return "🍈 Jackfruit";
    case "lettuce":
      return "🥗 Lettuce";
    case "portabelloCap":
      return "🍄 PortaBello Cap";
    case "salsa":
      return "💃 Salsa";
    case "sandwich":
      return "🍞 Sandwich";
    case "taco":
      return "🌮 Taco";
    case "tomato":
      return "🍅 Tomato";
    default:
      return "‼️ Invalid Item";
  }
}
export const Description: React.SFC<IconProps> = props => {
  return <span>{descFor(props.type)}</span>;
};

type TotalsProps = {
  /* Replace Me */
};
export const TotalSection: React.SFC<TotalsProps> = props => {
  // TODO: Implement me for real. Feel free to copy HTML structure from StaticExample
  const examplePrice = 3.50;

  return <div>{3.50.toFixed(2)}</div>;
};

export const AdditionSummary: React.SFC<AdditionSummaryProps> = props => (
  //Calls descFor to get the appropriate addition description
  <li>{descFor(props.additionType)}</li>
);

export const ItemSummary: React.SFC<ItemSummaryProps> = props => (
  <div className="line-item">
    <h3>{getTitle(props.entreeType)}</h3> {/*Gets item title*/}
    <ul className="addition-list">
      {/* Render an AdditionSummary using each addition as props */}
      {props.additions.map((addition, i) => (
        //-Below this is a loop. It will go through all elements of size i (which appears to be defined/counted automatically)
        //--and do whatever is in the function/constant defined in the beginning (ex in this case, AdditionSummary, which is defined above).
        // Note: key is required by react for arrays of elements
        <AdditionSummary key={i} {...addition} />
      ))}
    </ul>
    <div className="item-total">Total: ${props.itemTotal.toFixed(2)}</div>

    {props.mindBlowing && <div className="awesome-sauce-backdrop">😻</div>}
  </div>
);

export const Receipt: React.SFC<ReceiptProps> = props => (
  <div className="order-summary">
    <h1>Order Summary</h1>
    {props.items.map((item, i) => (
      // Note: key is required by react for arrays of elements
      <ItemSummary key={i} {...item} />
    ))
    }

    <hr className="divider" />

    <div  className="total-section">
      <div className="subtotal-info">Subtotal: ${props.subtotal.toFixed(2)}</div>
      <div className="subtotal-info">Tip: ${props.tip.toFixed(2)}</div>

      <div className="grand-total">Total: ${props.total.toFixed(2)}</div>
    </div>
  </div>
);
