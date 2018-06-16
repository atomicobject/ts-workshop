import { storiesOf } from "@storybook/react";
import React from "react";
import { action } from "@storybook/addon-actions";
import { StaticExample } from "./example";

import "./styles.css";

storiesOf("Receipt", module)
  .add("static example", () => <StaticExample foo="asdf"/>)
  .add("asdf", () => (
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

      <div className="item-total">Total: $8</div>

      <div className="awesome-sauce-backdrop">🤯</div>
    </div>
  ));
