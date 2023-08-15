// npm run exercise-0

test("Should work", () => {
  const x: number = 2;
  
  // @ts-expect-error
  const foo: string = 1;
  
  const bar: string = "1";
});
