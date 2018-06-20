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

    expect(orderToReceipt(argument)).toEqual(expected);
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
          basePrice: 6,
          entreeType: "taco",
          additions: [
            {
              additionType: "chicken",
              additionPrice: 0,
            },
          ],
          itemTotal: 6,
          mindBlowing: false
        }
      ],
      subtotal: 0,
      tip: 0,
      total: 0
    }

    expect(orderToReceipt(argument)).toEqual(expected);
  })
  
  pending("Translates sandwiches")
  pending("Translates burritos")
  pending("Handles awesome sauce, which makes the order mind blowing")
  pending("Marks pricey proteins")
})