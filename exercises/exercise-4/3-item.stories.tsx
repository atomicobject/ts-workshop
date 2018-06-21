import { storiesOf } from "@storybook/react";
import React from "react";
import { expectToLookLike, ReplaceMe } from "../util/story-helpers";
import "./styles.css";
import { ItemSummary, Annotation } from "./code";
import { EntreeType, Protein, RiceType, Topping } from "../exercise-3/code";

storiesOf("Exercise 4.3: Item", module)
  .add("Intro", () => (
    <div>
      <h1>ItemSummary component</h1>
      <p>
        Now for rendering individual line items in our receipt.
      </p>
    </div>
  ))
  .add(
    "Static example 1",
    expectToLookLike(
      // Something that looks like:
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
    </div>,

      // Should be produced by:
      () => (
        <ItemSummary
          entreeType={"taco"}
          mindBlowing={true}
          itemTotal={11}
          additions={[
            {
              additionType: "carnitas",
              annotation: "pricey"
            },
            {
              additionType: "salsa"
            },
            {
              additionType: "extraTaco"
            },
            {
              additionType: "awesomeSauce",
              annotation: "nuclear"
            }
          ]}
        />
      )
    )
  )
  .add(
    "Static example 2",
    expectToLookLike(
      // Something that looks like:
      <div className="line-item">
        <h3 className="item-kind">🍞 Sandwich</h3>

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
      </div>,
      // Should be produced by:
      () => (
        <ItemSummary
          entreeType={"sandwich"}
          mindBlowing={false}
          itemTotal={5}
          additions={[
            {
              additionType: "chicken",
            },
            {
              additionType: "cheese",
            },
            {
              additionType: "tomato",
            }
          ]}
        />
      )
    )
  )
  .add("Your example 1", () => 
    <ReplaceMe />
    // with your own ItemSummary example
  )
