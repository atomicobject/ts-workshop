import { storiesOf, RenderFunction } from "@storybook/react";
import React from "react";
import { action } from "@storybook/addon-actions";
import { StaticExample } from "./example";

import "./styles.css";
import { Protein } from "../exercise-3/code";
import { ComponentDesc, AllComponents, TotalSection } from "./code";

storiesOf("Exercise 4.0 Receipt", module).add("static example", () => (
  <StaticExample />
));
