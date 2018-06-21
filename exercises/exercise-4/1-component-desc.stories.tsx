import { storiesOf } from "@storybook/react";
import React from "react";
import { Protein } from "../exercise-3/code";
import { expectToLookLike } from "../util/story-helpers";
import { ComponentDesc } from "./code";

storiesOf("Exercise 4.1: ComponentDesc", module)
  .add("Intro", () => (
    <div>
      <h1>Create a ComponentDesc component to describe meal constituents</h1>
      <p>
        Let's start by creating an component to describe food components with
        their emoji icon.
      </p>
    </div>
  ))
  .add(
    "Carnitas",
    expectToLookLike("🐖 Carnitas", () => <ComponentDesc type={"carnitas"} />)
  )
  .add(
    "Taco",
    expectToLookLike("🌮 Taco", () => <ComponentDesc type={"taco"} />)
  )
  .add(
    "Sushi",
    expectToLookLike("🍣 Sushi", () => <ComponentDesc type={"sushi"} />)
  )
  .add(
    "Sandwich",
    expectToLookLike("🍞 Sandwich", () => <ComponentDesc type={"sandwich"} />)
  )
  .add(
    "Chicken",
    expectToLookLike("🐓 Chicken", () => <ComponentDesc type={"chicken"} />)
  )
  .add(
    "Jackfruit",
    expectToLookLike("🍈 Jackfruit", () => <ComponentDesc type={"jackfruit"} />)
  )
  .add("Tuna", expectToLookLike("🐟 Tuna", () => <ComponentDesc type={"tuna"} />))

  .add("King Salmon", expectToLookLike("🐟 King Salmon", () => <ComponentDesc type={"kingSalmon"} />))
  .add(
    "Portobello Cap",
    expectToLookLike("🍄 Portobello Cap", () => <ComponentDesc type={"portabelloCap"} />)
  )
 .add("brown rice", expectToLookLike( "🍘 Brown Rice", () => <ComponentDesc type={"brownRice"} />))
 .add("white rice", expectToLookLike("🍙 White Rice", () => <ComponentDesc type={"whiteRice"} />))
 .add("cheese", expectToLookLike("🧀 Cheese", () => <ComponentDesc type={"cheese"} />))
 .add("lettuce", expectToLookLike("🥗 Lettuce", () => <ComponentDesc type={"lettuce"} />))
 .add("tomato", expectToLookLike("🍅 Tomato", () => <ComponentDesc type={"tomato"} />))
  .add(
    "Extra Taco",
    expectToLookLike("🌮 Extra Taco", () => <ComponentDesc type={"extraTaco"} />)
  )
  .add(
    "Salsa",
    expectToLookLike("💃 Salsa", () => <ComponentDesc type={"salsa"} />)
  )
  .add(
    "Awesome sauce",
    expectToLookLike("Awesome Sauce", () => <ComponentDesc type={"awesomeSauce"} />)
  )