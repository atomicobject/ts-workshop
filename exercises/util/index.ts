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
