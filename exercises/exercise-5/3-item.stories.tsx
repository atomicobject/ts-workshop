import { storiesOf } from "@storybook/react";
import React from "react";
import { expectToLookLike, ReplaceMe } from "../util/story-helpers";
import "./styles.css";
import { ItemSummary, Annotation } from "./code";
import {
  EntreeType,
  Protein,
  RiceType,
  BeanType,
  Topping
} from "../exercise-4/code";

storiesOf("Exercise 5.3: Item", module)
  .add("Intro", () => (
    <div>
      <h1>Create an Icon Component</h1>
      <p>
        Let's start by creating an Icon component that we can use to render our
        emoji icons.
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
      </div>,

      // Should be produced by:
      () => (
        // <ReplaceMe />
        // with
        <ItemSummary
          basePrice={7}
          entreeType={EntreeType.Taco}
          mindBlowing={true}
          itemTotal={9}
          additions={[
            {
              additionType: Protein.Carnitas,
              additionPrice: 1,
              annotation: Annotation.Pricey
            },
            {
              additionType: BeanType.PintoBeans,
              additionPrice: 0
            },
            {
              additionType: RiceType.BrownRice,
              additionPrice: 0
            },
            {
              additionType: Protein.Beef,
              additionPrice: 1,
              annotation: Annotation.Nuclear
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
      </div>,
      // Should be produced by:
      () => (
        <ReplaceMe />
        // with
        // <ItemSummary
        //   basePrice={6}
        //   entreeType={EntreeType.Taco}
        //   mindBlowing={false}
        //   itemTotal={6}
        //   additions={[
        //     {
        //       additionType: Protein.Chicken,
        //       additionPrice: 0
        //     },
        //     {
        //       additionType: Topping.Peppers,
        //       additionPrice: 0
        //     },
        //     {
        //       additionType: Topping.Mayo,
        //       additionPrice: 0
        //     }
        //   ]}
        // />
      )
    )
  )
  .add("Your example 1", () => <ReplaceMe />)
  .add("Your example 2", () => <ReplaceMe />)
  .add("Your example 3", () => <ReplaceMe />);
