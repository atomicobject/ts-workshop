import { storiesOf } from "@storybook/react";
import React from "react";
import { expectToLookLike, ReplaceMe } from "../util/story-helpers";
import "./styles.css";
import { ItemSummary, Annotation, Receipt } from "./code";
import {
  EntreeType,
  Protein,
  Topping
} from "../exercise-3/code";
import { StaticExample } from "./example";

storiesOf("Exercise 4.4: The full Receipt", module)
  .add("Intro", () => (
    <div>
      <h1>Create a Receipt Component</h1>
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
      <StaticExample />,

      // Should be produced by:
      () => (
        // <ReplaceMe />
        // with

        <Receipt
          subtotal={16}
          tip={4}
          total={20}
          items={[
            {
              entreeType: "taco",
              mindBlowing: true,
              itemTotal: 11,
              additions: [
                {
                  additionType: "carnitas",
                  annotation: Annotation.Pricey
                },
                {
                  additionType: "salsa"
                },
                {
                  additionType: "extraTaco"
                },
                {
                  additionType: "awesomeSauce",
                  annotation: Annotation.Nuclear
                }
              ]
            },
            {
              entreeType: "sandwich",
              mindBlowing: false,
              itemTotal: 5,
              additions: [
            {
              additionType: "chicken",
            },
            {
              additionType: "cheese",
            },
            {
              additionType: "tomato",
            }
              ]
            }
          ]}
        />
      )
    )
  )
  .add("Your example 1", () => <ReplaceMe />)
  .add("Your example 2", () => <ReplaceMe />);
