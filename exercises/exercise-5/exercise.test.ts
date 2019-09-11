import { Order, EntreeType, Protein } from "../exercise-3/code";
import { orderToReceipt } from "./code";
import { ReceiptProps } from "../exercise-4/code";

// npm run exercise-6a

describe("orderToReceipt", () => {
  it("Converts an empty order to a valid receipt", () => {
    const argument: Order = {
      lineItems: []
    };

    const expected: ReceiptProps = {
      items: [],
      subtotal: 0,
      tip: 0,
      total: 0
    };

    expect(orderToReceipt(argument, 0)).toEqual(expected);
  });

  it("Translates tacos", () => {
    const argument: Order = {
      lineItems: [
        {
          type: "taco",
          protein: "chicken",
          salsa: true,
          extraTaco: true,
          awesomeSauce: false
        }
      ]
    };

    const expected: ReceiptProps = {
      items: [
        {
          entreeType: "taco",
          additions: [
            {
              additionType: "chicken"
            },
            {
              additionType: "salsa"
            },
            {
              additionType: "extraTaco"
            }
          ],
          itemTotal: 8.5,
          mindBlowing: false
        }
      ],
      subtotal: 8.5,
      tip: 5,
      total: 13.5
    };

    expect(orderToReceipt(argument, 5)).toEqual(expected);
  });

  it("Translates sandwiches", () => {
    const argument: Order = {
      lineItems: [
        {
          type: "sandwich",
          protein: "portabelloCap",
          toppings: ["cheese", "lettuce"],
          awesomeSauce: true
        }
      ]
    };

    const expected: ReceiptProps = {
      items: [
        {
          entreeType: "sandwich",
          additions: [
            {
              additionType: "portabelloCap",
              annotation: "pricey"
            },
            {
              additionType: "cheese"
            },
            {
              additionType: "lettuce"
            },
            {
              additionType: "awesomeSauce",
              annotation: "nuclear"
            }
          ],
          itemTotal: 7.5,
          mindBlowing: true
        }
      ],
      subtotal: 7.5,
      tip: 3,
      total: 10.5
    };

    expect(orderToReceipt(argument, 3)).toEqual(expected);
  });
});
