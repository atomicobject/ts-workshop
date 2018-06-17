import { storiesOf } from "@storybook/react";
import React from "react";
import { expectToLookLike, ReplaceMe } from "../util/story-helpers";
import "./styles.css";


storiesOf("Exercise 5.2: Totals", module)
  .add("Intro", () => (
    <div>
      <h1>Create a component for showing </h1>
      <p>
        Let's start by creating an Icon component that we can use to render our
        emoji icons.
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
  .add("Your example 1", () => <ReplaceMe />)
  .add("Your example 2", () => <ReplaceMe />)
  .add("Your example 3", () => <ReplaceMe />);