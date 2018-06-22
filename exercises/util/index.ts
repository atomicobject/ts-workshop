export type AssertAssignable<T1, T2 extends T1> = never;

export function isString(candidate: any): candidate is string {
  return typeof candidate === "string";
}

export function isBoolean(candidate: any): candidate is boolean {
  return typeof candidate === "boolean";
}

export function isNumber(candidate: any): candidate is number {
  return typeof candidate === "number";
}


/** Used by Flavor to mark a type in a readable way. */
interface Flavoring<FlavorT> {
  _type?: FlavorT;
}
/** Create a "flavored" version of a type. TypeScript will disallow mixing flavors, but will allow unflavored values of that type to be passed in where a flavored version is expected. This is a less restrictive form of branding. */
export type Flavor<T, FlavorT> = T & Flavoring<FlavorT>;
