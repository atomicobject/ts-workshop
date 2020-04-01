import { storiesOf } from "@storybook/react";
import * as React from "react";
import { expectToLookLike, ReplaceMe } from "../util/story-helpers";
import "./styles.css";
import { TotalSection } from "./code";


storiesOf("Exercise 4.1: Totals", module)
  .add("Intro", () => (
    <div>
      <h1>TotalSection</h1>
      <p>
        Implement the `TotalSection` component to show Subtotal, Tip, and Total at the bottom of the receipt.
      </p>
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
        <ReplaceMe />
        // with
        // <TotalSection subtotal={24} tip={3.6} total={27.6} />
    )
  )
  .add("Your example 1", () => 
    <ReplaceMe />
      // with your own TotalSection example
  )