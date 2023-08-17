test("Generic types", () => {
  /**
   * When you're writing TypeScript, you can think of there being two sub-languages,
   * each located in a different part of the code. When we talk about complex types,
   * we'll focus on just one of them. Let's call it TypeLand.
   **/

  //[------ this is all TypeLand...---------]
  type Person = { name: string; age: number; favoriteFood: string };

  //         and this is too.
  //            [------]
  const donovan: Person = {
    name: "Donovan",
    age: 12,
    favoriteFood: "cheezits",
  };

  /**
   * When you're in TypeLand, most of the time, you're just composing together
   * properties and primitives to get a certain set of constraints. You're basically
   * making a whole bunch of assignments.
   *
   * But there's a whole programming language embedded in the type system!
   *
   * When you're in TypeLand, you don't have to know the exact value of your types
   * at all times. You can create a "type variable" using the angle bracket notation:
   **/
   //     Right here, we'll declare a type variable ResponseDetail.
   //     Conventionally folks often use a single character, like T, U, V,
   //     but we'll use a real variable name for clarity.
   //     |
   //     |                                         And here, we use the type variable in the
   //     |                                         same place we'd use a regular type. It'll 
   //     |                                         be in scope until we leave TypeLand.
   //     |                                         |
   //     V                                         V
  type Ok<ResponseDetail> = { outcome: "ok"; value: ResponseDetail };

  type CheezitRequestSuccess = Ok<{
    receivedCheezits: true;
    cheezitQty: number;
  }>;

  /**
   * There are lots of use cases for using generic types as utilities. For example,
   * most of the TypeScript utility types are actually generics:
   **/
  type SimplePerson = Pick<Person, "name" | "age">;

  /**
   * However, where generics really shine is in function signatures.
   *
   * Let's say you've got a shuffle function. Its implementation is so awesome
   * that it can shuffle any kind of thing.
   *
   * ...so what type should its arg be? It just needs to be an array of things,
   * right? You don't need to know anything else about it for your shuffle implementation.
   **/
  function sweetShuffle(arr: any[]) {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  const beans = ["cannellini", "garbanzo", "lima", "kidney"];
  const shuffledBeans = sweetShuffle(beans);

  const nums = [1, 2, 3, 4, 5];
  const shuffledNums = sweetShuffle(nums);

  /**
   * ...but now your return types are super illegal poison. You _could_
   * make a bunch of overloads of bestShuffle. But that bites. DRY and all that.
   * 
   * How _else_ can you get rid of those anys, then?
   *
   * You could limit your input types a little...
   **/
  function okShuffle(arr: (number | string)[]) {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
  const okShuffledBeans = okShuffle(beans);
  const okShuffledNums = okShuffle(nums);
  
  /**
   * But the problem is that you, the programmer, _know_ that the beans are strings
   * and the nums are numbers. The type system knows it too, until you stuff them into
   * the proverbial sausage grinder of okShuffle, whose return type loosens a `string` 
   * to a `string | number`.
   * 
   * Your types have leaked some important knowledge that 
   * you once held out onto the floor, where it can never be regained.
   *
   * So, let's tell TypeScript that the return type of our shuffle can be inferred from
   * its arguments:
   **/

  //                   Declaration (in scope till the end of the function)
  //                   |
  //                   |                   Usage
  //                   |                   |
  //                   V                   V
  function bestShuffle<ShuffledThing>(arr: ShuffledThing[]) {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
  const beautifullyShuffledBeans = bestShuffle(beans);
  const beautifullyShuffledNums = bestShuffle(nums);

  /**
   * So generic functions are super powerful for protecting your delicate types as they
   * pass through utility functions. You can see lots of examples of this in a library 
   * like lodash. 
   * 
   * Now what if you actually did only want your shuffle to handle strings and numbers?
   **/
   function limitedShuffle<T extends string | number>(arr: T[]) {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
  const simplyShuffledBeans = limitedShuffle(beans);
  const simplyShuffledNums = limitedShuffle(nums);

  // @ts-expect-error
  const unshuffledPeople = limitedShuffle([{name: "Charlie"}, {name: "Miranda"}])
});
