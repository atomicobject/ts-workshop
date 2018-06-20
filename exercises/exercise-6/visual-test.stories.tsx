import { storiesOf } from "../../node_modules/@types/storybook__react";
import { orderToReceipt } from "./code";
import { Order, EntreeType, Protein, RiceType } from "../exercise-4/code";
import { Receipt } from "../exercise-5/code";
import React from "react";

storiesOf("orderToReceipt", module)
  .add("Can work end-to-end with our receipt component", () => {
    const order: Order = {
      lineItems: [
        {
          type: EntreeType.Taco,
          extraTaco: true,
          awesomeSauce: true,
          protein: Protein.Carnitas,
          salsa: true
        },
        {
          type: EntreeType.Sushi,
          protein: Protein.KingSalmon,
          riceType: RiceType.BrownRice,
          awesomeSauce: false
        }
      ]
    };
    const receiptProps = orderToReceipt(order);
    return <Receipt {...receiptProps} />;
  })
  .add("Add some more examples", () => (
    <div>Add some more examples of your own</div>
  ));
