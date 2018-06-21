import React from "react";

import "./styles.css";
import { Protein, Topping, EntreeType } from "../exercise-3/code";

export const StaticExample: React.SFC<{}> = props => (
  <div className="order-summary">
    <h1>Order Summary</h1>

    <div className="line-item">
      <h3 className="item-kind">
        🌮 Taco
      </h3>

      <ul className="addition-list">
        <li>
          <div className="crown-marker">👑</div>
          <div className="addition-label">🐖 Carnitas</div>
        </li>
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">💃 Salsa</div>
        </li>
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🌮 Extra Taco</div>
        </li>
        <li>
          <div className="crown-marker">☢️</div>
          <div className="addition-label awesome-sauce">Awesome Sauce</div>
        </li>
      </ul>

      <div className="item-total">Total: $11</div>

      <div className="awesome-sauce-backdrop">😻</div>
    </div>

    <div className="line-item">
      <h3 className="item-kind">
        🍞 Sandwich
      </h3>

      <ul className="addition-list">
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🐓 Chicken</div>
        </li>
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🥗 Lettuce</div>
        </li>
        <li>
          <div className="crown-marker">&nbsp;</div>
          <div className="addition-label">🍅 Tomato</div>
        </li>
      </ul>

      <div className="item-total">Total: $5</div>
    </div>

    <hr className="divider" />

    <div className="total-section">
      <div className="subtotal-info">Subtotal: $16</div>
      <div className="subtotal-info">Tip: $4</div>

      <div className="grand-total">Total: $20.00</div>
    </div>
  </div>
);
