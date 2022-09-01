import { storiesOf } from "@storybook/react";
import * as React from "react";
import { expectToLookLike, ReplaceMe } from "../util/story-helpers";
import "./styles.css";
import { TotalSection } from "./code";


storiesOf("Exercise 4.1: Totals", module)
  .add("Intro", () => (
    <div>
      <h1>TotalSection</h1>
        <div className="total-section">
          <div className="subtotal-info">Subtotal: $22.47</div>
          <div className="subtotal-info">Tip: $-2.47</div>
          <div className="grand-total">Total: $20.00</div>
        </div>
    </div>
  ))
  .add(
    "Our example",
    expectToLookLike(
      // Something that looks like:
      <div className="total-section">
        <div className="subtotal-info">Subtotal: $24</div>
        <div className="subtotal-info">Tip: $3.60</div>

        <div className="grand-total">Total: $27.60</div>
      </div>,

      // Should be produced by:
      () => 
      <div className="total-section">
        <div className="subtotal-info">Subtotal: $22.47</div>
        <div className="tip-info">Tip: nah bruh -$2.47</div>

        <h3 className="total-info">Total: $20.00</h3>
      </div>
    )
  )
  .add("Your example 1", () => 
    <div className="Receipt">
      <h3 className="Receipt">Receipt</h3>

      <div className="subtotal-info">Subtotal: $22.47</div>
      <div className="tip-info">Tip: yah bruh $22.47</div>

      <h3 className="total-info">Total: $44.94</h3>
    </div>
  )