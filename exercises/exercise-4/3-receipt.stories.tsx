import { storiesOf } from "@storybook/react";
import * as React from "react";
import { expectToLookLike, ReplaceMe } from "../util/story-helpers";
import "./styles.css";
import { ItemSummary, Annotation, Receipt } from "./code";
import { EntreeType, Protein, Topping } from "../exercise-3/code";
import { StaticExample } from "./example";

storiesOf("Exercise 4.3: The full Receipt", module)
  .add("Intro", () => (
    <div>
      <h1>Create a Receipt Component</h1>
      <p>Now let's create our full Receipt example.</p>
    </div>
  ))
  .add(
    "Static example 1",
    expectToLookLike(
      // Something that looks like:
      <StaticExample />,

      // Should be produced by:
      () => (
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
              ]
            },
            {
              entreeType: "sandwich",
              mindBlowing: false,
              itemTotal: 5,
              additions: [
                {
                  additionType: "chicken"
                },
                {
                  additionType: "cheese"
                },
                {
                  additionType: "tomato"
                }
              ]
            }
          ]}
        />
      )
    )
  )
  .add(
    "Your example 1",
    () => (
      <Receipt
        subtotal={200}
        tip={60}
        total={260}
        items={[
          {
            entreeType: "sandwich",
            mindBlowing: true,
            itemTotal: 125,
            additions: [
              {
                additionType: "chicken"
              },
              {
                additionType: "cheese"
              },
              {
                additionType: "carnitas",
                annotation: "pricey"
              },
              {
                additionType: "awesomeSauce",
                annotation: "nuclear"
              }
            ]
          },
          {
            entreeType: "sandwich",
            mindBlowing: true,
            itemTotal: 50,
            additions: [
              {
                additionType: "lettuce"
              },
              {
                additionType: "chicken"
              },
              {
                additionType: "awesomeSauce",
                annotation: "nuclear"
              },
              {
                additionType: "jackfruit"
              },
              {
                additionType: "salsa"
              },
              {
                additionType: "carnitas",
                annotation: "pricey"
              },
              {
                additionType: "sandwich"
              }
            ]
          },
          {
            entreeType: "taco",
            mindBlowing: true,
            itemTotal: 25,
            additions: [
              {
                additionType: "salsa"
              },
              {
                additionType: "awesomeSauce",
                annotation: "nuclear"
              },
              {
                additionType: "carnitas",
                annotation: "pricey"
              },
              {
                additionType: "cheese"
              },
              {
                additionType: "chicken"
              },
              {
                additionType: "lettuce"
              },
              {
                additionType: "tomato"
              },
              {
                additionType: "extraTaco"
              }
            ]
          }
        ]}
      />
    )
  );
