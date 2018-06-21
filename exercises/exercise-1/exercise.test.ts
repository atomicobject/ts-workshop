import { AssertAssignable } from "../util";

describe("Exercise 1", () => {
  it("Should work", () => {
    const x: number = 2;
    // typings:expect-error
    const foo: string = 1;
    //-- typings:expect-error
    const bar: string = "1";
  });
});

describe("Primative types", () => {
  test("has type inference", () => {
    /**
     * TypeScript infers the types of variables.
     * Hover over these variable declarations to see them.
     */

    let hello = "hello world";

    let isTypeScriptTime = true;

    let oneAndAHalf = 1.5;

    let arrayOfFruits = ["apple", "orange", "pear"];

    let arrayOfBools = [true, false];
  });

  test("and type annotations", () => {
    /**
     * Rather than letting TS infer the types, we can add
     * type annotations that explicitly describe the variable type.
     */

    let hello: string = "hello world";

    let isTypeScriptTime: boolean = true;

    let oneAndAHalf: number = 1.5;

    let arrayOfFruits: string[] = ["apple", "orange", "pear"];

    let arrayOfBools: boolean[] = [true, false];
  });

  test("types enforce constraints", () => {
    /**
     * Once a variable has a type, the type checker will fail
     * if we try to assign it to a value of a different type.
     */
    let hello: string = "a string";

    // typings:expect-error
    hello = 5;

    /**
     * Type annotations are useful because they allow us to
     * express our intent to TypeScript, so it can catch mistakes.
     */
    // typings:expect-error
    let shouldBeAString: string = true;
  });
});

describe("More types", () => {
  test("function types", () => {
    /**
     * Type annotations get more powerful when we start using 
     * them with functions. Check out the type of declareFavoriteFood.
     */
    function declareFavoriteFood(name: string, food: string) {
      return `${name}'s favorite food is ${food}`;
    }
    type declareFavoriteFoodType = typeof declareFavoriteFood;

    /** TS knows the return type of declareFavoriteFood. */
    let waldosFavorite = declareFavoriteFood("Waldo", "chips");

    /**
     * If we try to pass a value of the wrong type, we'll get an error- 
     * just like we did when assigning a variable to the wrong type.
     */
    // typings:expect-error
    let invalidInput = declareFavoriteFood("Waldo", true);
  });
  test("the 'any' type", () => {
    /** 
     * TS describes types that it can't identify as 'any'. 
     * 
     * In this example, we haven't told TS what the args of this function 
     * should be, so it infers them to be 'any'. Implicit 'any' types
     * aren't allowed for function args, so we get an error:
     */
    // typings:expect-error
    function declareFavoriteFood(name, food) {
      return `${name}'s favorite food is ${food}`;
    }

    /** But it does allow _explicit_ any for function args: */
    function typedDeclareFavoriteFood(name: any, food: any) {
      return `${name}'s favorite food is ${food}`;
    }
    /** 
     * Using 'any' is risky, because it effectively disables 
     * type checking:
     * */
    let thisWillBlowUp = typedDeclareFavoriteFood(1, 2)

    /** We'll come back to 'any' in the next exercise. */
  });

  test("a type alias", () => {
    /**
     * We can declare names for our own types made up of primitives.
     */
    type MySpecialString = string;

    function sayHello(name: string) {
      return `Hello, ${name}!`;
    }
    /** And we can use them where they're compatible with other types */
    let specialName: MySpecialString = "Dixie the Good Dog";
    sayHello(specialName);

    /** 
     * But, notice that declaring a type alias doesn't inherently 
     * change the way the type operates.
     */
    function specialSayHello(name: MySpecialString) {
      return `Hello, ${specialName}, Your Excellence.`;
    }

    let aCommonerName: string = "John";
    specialSayHello(aCommonerName); // No type error
    /** 
     * string and MySpecialString are compatible; we can pass either one 
     * in any place the other is expected.
     */
  });

  test("literal types", () => {
    /** Type aliases get more useful when we move beyond primative types. */
    type ALiteralString = "just this one";

    // typings:expect-error
    let notThatLiteral: ALiteralString = "some other string";
  });

  test("infers different types based on keywords", () => {
    let regularString = "hello";
    
    /** 
     * Check out the type of literalString! It's a string literal, 
     * which means TS knows it can only be this exact value.
     */
    const literalString = "goodnight";

    /** This holds for other types of primatives, too. */
    const literalBool = true;
    const literalNumber = 2;
  });

  test("describes a literal", () => {
    /**
     * Let's try writing our own type. Update FixThisType to allow only a single literal.
     */
    type FixThisType = any;

    let hello: FixThisType = "hello";

    // typings:expect-error
    let world: FixThisType = "world";

    // typings:expect-error
    let goodnight: FixThisType = "goodnight";

    // typings:expect-error
    let moon: FixThisType = "moon";
  });

  test("literals in control flow", () => {
    /**
     * TS understands control flow. Take a look at the type of 'fruit' inside of these blocks.
     */
    function isBanana(fruit: string){
      if (fruit === "banana") {
        return `${fruit} is a banana`
      } else {
        return ` ${fruit} is not a banana`
      }
    } 
  })
});

describe("Object types", () => {
  test("interfaces describe objects", () => {
    /**
     * TypeScript gets more interesting when we introduce structural typing.
     * We can describe object shapes as types.
     */
    interface FoodItem {
      name: string;
      cost: {
        dollars: number;
        cents: number;
      }
    }

    let muffin: FoodItem = {
      cost: {dollars: 1, cents: 50},
      name: "Muffin"
    };

    /** 
     * This helps us be clear with ourselves and others about what properties
     * an object should have.
     */
    // typings:expect-error
    let notAFoodItem: FoodItem = {
      name: "plate",
    }
  });

  test("structural compatibility", () => {
    /** 
     * Type annotations are just there to help us describe object shapes. 
     * We can use differently named types interchangably, as long as they 
     * are structurally compatible.
    */
    interface DeliItem {
      name: string;
      cost: number;
    }
    interface BakeryItem {
      name: string;
      cost: number;
    }

    let lunchMeat: DeliItem = {
      name: "Sliced Turkey",
      cost: 3
    };

    let croissant: BakeryItem = {
      name: "Croissant",
      cost: 2
    };

    function bakeryPriceStatement(item: BakeryItem) {
      return `That fresh-baked ${item.name} will be $${item.cost}.`;
    }

    function deliPriceStatement(item: DeliItem) {
      return `That juicy ${item.name} will be $${item.cost}.`;
    }

    // We can substitute one type for another anytime they're structurally compatible
    let freshBakedCheese = bakeryPriceStatement(lunchMeat);
    let juicyCroissant = deliPriceStatement(croissant);

    // Or even anonymous types
    let mysteryMeat = deliPriceStatement({ name: "Mystery Meat", cost: 1 });

    enum Flavor {
      Sweet = "sweet",
      Sour = "sour",
      Salty = "salty",
      Bitter = "bitter",
      Savory = "savory"
    }
    interface FlavoredFoodItem {
      name: string;
      cost: number;
      flavorProfile: Flavor;
    }

    let cheezits: FlavoredFoodItem = {
      name: "Box of Cheezits",
      cost: 4,
      flavorProfile: Flavor.Salty
    };

    /** 
     * Flavored food is structurally compatible with regular food because 
     * its properties are a superset of regular food's.
    */
    let freshBakedCheezits = bakeryPriceStatement(cheezits);

    function flavoredFoodPriceStatement(item: FlavoredFoodItem) {
      return `That ${item.flavorProfile} ${item.name} will be ${item.cost}.`;
    }

    // But regular food isn't assignable to a type that expects flavored food
    // typings:expect-error
    let noCroissants = flavoredFoodPriceStatement(croissant);

    // In the future, we'll use AssertAssignable to prove structural compatibility or lack thereof:
    type _t1 = AssertAssignable<BakeryItem, FlavoredFoodItem>;
    // typings:expect-error
    type _t2 = AssertAssignable<FlavoredFoodItem, BakeryItem>;
  });
});
