import { storiesOf, RenderFunction } from "@storybook/react";
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { StaticExample } from "./example";

import "./styles.css";
import { Protein } from "../exercise-3/code";
import { Description, FoodStuffs, TotalSection } from "./code";

/** 
 * npm run exercise-4 and point a browser at http://localhost:6006 
 * 
 * All of the work in this exercise is visual! Use the sidebar to go through
 * step-by-step. Implement React components to help get the visual examples to match
 * 
 * example.tsx contains all the HTML you will need. Refer to that if you have questions about
 * syntax, HTML, or how to style things. All the CSS is implemented - just use the same CSS classes
 * you see here to get the visual effect.
 * 
 * To learn more about how HTML is being embedded in JavaScript, find out more in the React docs:
 *   https://reactjs.org/docs/introducing-jsx.html
*/

storiesOf("Exercise 4.0 Receipt", module).add("static example", () => (
  <div>
    <h1>Example</h1>
    <p>
      This story is a static-mockup of what the receipt should look like when you're done.
    </p>
    
    <p>
      Steal HTML examples liberally frome `example.tsx` as you implement a live,
      data-driven version of this static example.
    </p>

    <StaticExample />
  </div>
));
