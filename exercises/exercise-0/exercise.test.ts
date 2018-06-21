test("Should work", () => {
  const x: number = 2;
  // typings:expect-error
  const foo: string = 1;
  //-- typings:expect-error
  const bar: string = "1";
});
