import { storiesOf } from "@storybook/react";
import React from "react";
import { Protein } from "../exercise-3/code";
import { expectToLookLike } from "../util/story-helpers";
import { Description } from "./code";

storiesOf("Exercise 4.1: Description", module)
  .add("Intro", () => (
    <div>
      <h1>Create a Description component to describe meal constituents</h1>
      <p>
        Let's start by creating an component to describe food components with
        their emoji icon.
      </p>
    </div>
  ))
  .add(
    "Carnitas",
    expectToLookLike("🐖 Carnitas", () => <Description type={"carnitas"} />)
  )
  .add(
    "Taco",
    expectToLookLike("🌮 Taco", () => <Description type={"taco"} />)
  )
  .add(
    "Sushi",
    expectToLookLike("🍣 Sushi", () => <Description type={"sushi"} />)
  )
  .add(
    "Sandwich",
    expectToLookLike("🍞 Sandwich", () => <Description type={"sandwich"} />)
  )
  .add(
    "Chicken",
    expectToLookLike("🐓 Chicken", () => <Description type={"chicken"} />)
  )
  .add(
    "Jackfruit",
    expectToLookLike("🍈 Jackfruit", () => <Description type={"jackfruit"} />)
  )
  .add("Tuna", expectToLookLike("🐟 Tuna", () => <Description type={"tuna"} />))

  .add("King Salmon", expectToLookLike("🐟 King Salmon", () => <Description type={"kingSalmon"} />))
  .add(
    "Portobello Cap",
    expectToLookLike("🍄 Portobello Cap", () => <Description type={"portabelloCap"} />)
  )
 .add("brown rice", expectToLookLike( "🍘 Brown Rice", () => <Description type={"brownRice"} />))
 .add("white rice", expectToLookLike("🍙 White Rice", () => <Description type={"whiteRice"} />))
 .add("cheese", expectToLookLike("🧀 Cheese", () => <Description type={"cheese"} />))
 .add("lettuce", expectToLookLike("🥗 Lettuce", () => <Description type={"lettuce"} />))
 .add("tomato", expectToLookLike("🍅 Tomato", () => <Description type={"tomato"} />))
  .add(
    "Extra Taco",
    expectToLookLike("🌮 Extra Taco", () => <Description type={"extraTaco"} />)
  )
  .add(
    "Salsa",
    expectToLookLike("💃 Salsa", () => <Description type={"salsa"} />)
  )
  .add(
    "Awesome sauce",
    expectToLookLike("Awesome Sauce", () => <Description type={"awesomeSauce"} />)
  )