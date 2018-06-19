import { storiesOf } from "@storybook/react";
import React from "react";
import { Protein } from "../exercise-4/code";
import { expectToLookLike } from "../util/story-helpers";
import { Icon } from "./code";

storiesOf("Exercise 4.1: Icon", module)
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
    "Carnitas",
    expectToLookLike("🐖", () => <Icon type={Protein.Carnitas} />)
  )
  .add(
    "Chicken",
    expectToLookLike("🐓", () => <Icon type={Protein.Chicken} />)
  )
  .add("Tofu", expectToLookLike("", () => <Icon type={Protein.Tofu} />))
  .add(
    "Jackfruit",
    expectToLookLike("🍈", () => <Icon type={Protein.Jackfruit} />)
  )
  .add("Beef", expectToLookLike("🐄", () => <Icon type={Protein.Beef} />))
  .add("Tuna", expectToLookLike("🐟", () => <Icon type={Protein.Tuna} />))
  .add("Turkey", expectToLookLike("🦃", () => <Icon type={Protein.Turkey} />))
  .add(
    "ExtraVeggies",
    expectToLookLike("🥗", () => <Icon type={Protein.ExtraVeggies} />)
  );
