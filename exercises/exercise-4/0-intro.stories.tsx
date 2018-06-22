import { storiesOf, RenderFunction } from "@storybook/react";
import React from "react";
import { action } from "@storybook/addon-actions";
import { StaticExample } from "./example";

import "./styles.css";
import { Protein } from "../exercise-3/code";
import { Description, FoodStuffs, TotalSection } from "./code";

/*

  `npm run exercise-4` and point a browser at http://localhost:6006

*/

storiesOf("Exercise 4.0 Receipt", module).add("static example", () => (
  <StaticExample />
));
