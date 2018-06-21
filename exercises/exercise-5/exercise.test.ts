import { Order, EntreeType, Protein } from "../exercise-3/code";
import { orderToReceipt } from "./code";
import { ReceiptProps } from "../exercise-4/code";

describe("orderToReceipt", () => {
  it("Converts an empty order to a valid receipt", () => {
    const argument: Order = {
      lineItems: []
    }

    const expected: ReceiptProps = {
      items: [],
      subtotal: 0,
      tip: 0,
      total: 0
    }

    expect(orderToReceipt(argument, 0)).toEqual(expected);
  })

  it("Converts an empty order to a valid receipt", () => {
    const argument: Order = {
      lineItems: [
        {
          type: "taco",
          protein: "chicken",
          salsa: true,
          extraTaco: true,
          awesomeSauce: false,
        }
      ]
    }

    const expected: ReceiptProps = {
      items: [
        {
          entreeType: "taco",
          additions: [
            {
              additionType: "chicken",
            },
          ],
          itemTotal: 7.50,
          mindBlowing: false
        }
      ],
      subtotal: 7.5,
      tip: 5,
      total: 12.5
    }

    expect(orderToReceipt(argument, 5)).toEqual(expected);
  })
  
  // it("Translates sandwiches", () => {
  //   const argument: Order = {
  //     lineItems: [
  //       {
  //         type: "sandwich",
  //         protein: "portabelloCap",
  //         toppings: ["cheese", "lettuce"],
  //         awesomeSauce: true,
  //       }
  //     ]
  //   }

  //   const expected: ReceiptProps = {
  //     items: [
  //       {
  //         entreeType: "sandwich",
  //         additions: [
  //           {
  //             additionType: "portabelloCap",
  //             annotation: "Pricey"
  //           },
  //         ],
  //         itemTotal: 7.50,
  //         mindBlowing: false
  //       }
  //     ],
  //     subtotal: 0,
  //     tip: 5,
  //     total: 0
  //   }

  //   expect(orderToReceipt(argument, 3)).toEqual(expected);

  // })

  pending("Translates sushi")
  pending("Handles awesome sauce, which makes the order mind blowing")
  pending("Marks pricey proteins")
})