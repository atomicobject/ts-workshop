import { AssertAssignable } from "../exercises/util";


it("can replace a thing", () => {
  const foo: { bar: number } = REPLACEME
})

it("can do the same thing multiple ways", () => {
  type Obj = {
    foo: number,
    bar: string
  }
  type _1 = AssertAssignable<Obj, {} & {foo: number, bar: string}>
  type _2 = AssertAssignable<Obj, {foo: number} & {bar:string}>
  type _3 = AssertAssignable<Obj, {bar: string} & {foo: number}>
})

it("can encode a constraint with types", () => {
  type FixThisType = any;

  //describe a type that disallows this value
  // typings: expect-error
  let helloWorld: FixThisType = { hello: "world" };

  let goodnightMoon: FixThisType = { goodnight: "moon" };
})

