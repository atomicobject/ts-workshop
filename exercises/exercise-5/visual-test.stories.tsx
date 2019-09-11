import { storiesOf } from "@storybook/react";
import { orderToReceipt } from "./code";
import { Order, EntreeType, Protein } from "../exercise-3/code";
import { Receipt } from "../exercise-4/code";
import React from "react";

// npm run exercise-6b

storiesOf("orderToReceipt", module)
  .add("Can work end-to-end with our receipt component", () => {
    const order: Order = {
      lineItems: [
        {
          type: "taco",
          extraTaco: true,
          awesomeSauce: true,
          protein: "carnitas",
          salsa: true
        },
        {
          type: "sandwich",
          protein: "chicken",
          awesomeSauce: false,
          toppings: ["cheese", "lettuce", "tomato"]
        }
      ]
    };
    const receiptProps = orderToReceipt(order, 5);
    // Render receipt with all of the props returned by orderToReceipt
    return <Receipt {...receiptProps} />;
  })
  .add("Add some more examples", () => (
    <div>Add some more examples of your own</div>
  ));
