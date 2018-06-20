import { Taco, Protein, EntreeType, LineItem, RiceType, Topping } from "./code";

describe("Food Truck", () => {
  describe("LineItem", () => {
    test("it allows a valid taco", () => {
      const taco_1: LineItem = {
        protein: "chicken",
        type: "taco",
        extraTaco: true,
        salsa: true,
        awesomeSauce: true
      }
    
      const taco_2: LineItem = {
        protein: "jackfruit",
        type: "taco",
        extraTaco: true,
        salsa: false,
        awesomeSauce: false
      }
    
      const taco_3: LineItem = {
        protein: "carnitas",
        type: "taco",
        extraTaco: false,
        salsa: true,
        awesomeSauce: false
      }
    })
    test("it disallows invalid tacos", () => {
      // typings:expect-error
      const badTaco_1 : LineItem = {
        type: "taco",
        protein: "kingSalmon",
        extraTaco: false,
        salsa: true,
        awesomeSauce: false
      }

      // typings:expect-error
      const badTaco_2 : LineItem = {
        type: "taco",
        protein: "carnitas",
        riceType: "brownRice",
        awesomeSauce: false
      }
    })
    test("it allows valid sushi", () => {
      const sushi_1: LineItem = {
        type: "sushi",
        protein: "kingSalmon",
        riceType: "brownRice",
        awesomeSauce: false
      }

      const sushi_2: LineItem = {
        type: "sushi",
        protein: "tuna", 
        riceType: "whiteRice",
        awesomeSauce: true
      }
    })
    test("it disallows invalid sushi", () => {
      // typings:expect-error
      const badSushi_1: LineItem = {
        type: "sushi",
        protein: "portabelloCap",
        riceType: "brownRice",
        awesomeSauce: true
      }
    })
    test("it allows valid sandwiches", () => {
      const sandwich_1: LineItem = {
        type: "sandwich",
        protein: "chicken",
        toppings: ["cheese", "lettuce"],
        awesomeSauce: false
      }

      const sandwich_2: LineItem = {
        type: "sandwich",
        protein: "portabelloCap",
        toppings: ["lettuce", "tomato"],
        awesomeSauce: true
      }
    })
    test("it disallows invalid sandwiches", () => {
      const badSandwich_1: LineItem = {
        type: "sandwich",
        protein: "portabelloCap",
        toppings: ["tomato"],
        extraTaco: false,
        salsa: true,
        awesomeSauce: false
      }
    })
  })
});

