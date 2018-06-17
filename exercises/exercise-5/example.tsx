import React from "react";

import "./styles.css";
import { Protein, Topping, EntreeType } from "../exercise-4/code";
import { Flavor } from "../util";
import { Dollars } from "./code";

export const StaticExample: React.SFC<{}> = props => (
  <div className="order-summary">
    <h1>Order Summary</h1>

    <div className="line-item">
      <h3 className="item-kind">
        🌮 Taco
        <div className="item-price">$7 </div>
      </h3>

      <ul className="addition-list">
        <li>
          <div className="crown-marker">👑</div>
          <div className="addition-label">🐖 Carnitas</div>
          <div className="item-price">+$1 </div>
        </li>
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">Pinto Beans</div>
        </li>
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">Brown rice</div>
        </li>
        <li>
          <div className="crown-marker">☢️</div>
          <div className="addition-label awesome-sauce">Awesome Sauce</div>
          <div className="item-price">+$1 </div>
        </li>
      </ul>

      <div className="item-total">Total: $9</div>

      <div className="awesome-sauce-backdrop">🤯</div>
    </div>

    <div className="line-item">
      <h3 className="item-kind">
        🥪 Sandwich
        <div className="item-price">$6 </div>
      </h3>

      <ul className="addition-list">
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🐓 Chicken</div>
        </li>
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🌶 Peppers</div>
        </li>
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">Mayo</div>
        </li>
      </ul>

      <div className="item-total">Total: $7</div>
    </div>

    <hr className="divider" />

    <div className="total-section">
      <div className="subtotal-info">Subtotal: $24</div>
      <div className="subtotal-info">Tip: $3.60</div>

      <div className="grand-total">Total: $27.60</div>
    </div>
  </div>
);
