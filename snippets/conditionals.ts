export type DeepPartial<T> = T extends Array<infer U>
  ? DeepPartialArray<U>
  : T extends object ? DeepPartialObject<T> : T;

export type DeepPartialNoMethods<T> = T extends Array<infer U>
  ? DeepPartialArrayNoMethods<U>
  : T extends object ? DeepPartialObjectNoMethods<T> : T;

export interface DeepPartialArrayNoMethods<T>
  extends Array<DeepPartialNoMethods<T>> {}
export interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}

export type DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };

export type NonFunctionPropertyNames<T> = {
  [P in keyof T]: T[P] extends Function ? never : P
}[keyof T];

export type DeepPartialObjectNoMethods<T> = {
  [P in NonFunctionPropertyNames<T>]?: DeepPartialNoMethods<T[P]>
};

interface Foo {
  x: number;
  bar: {
    y: number;
  }[];
}

type PartialFoo = DeepPartial<Foo>;

type DeepReadonlyObject<T> = {
  readonly [P in NonFunctionPropertyNames<T>]: DeepReadonly<T[P]>
};

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

type DeepReadonly<T> = T extends any[]
  ? DeepReadonlyArray<T[number]>
  : T extends object ? DeepReadonlyObject<T> : T;

type ROFoo = DeepReadonly<Foo>;

const x: ROFoo = null as any;
// typings:expect-error
x.bar[0].y = 1;

type Redact<T, RedactedK extends keyof T> = Pick<
  T,
  Exclude<keyof T, RedactedK>
> &
  { [k in RedactedK]?: never };

type XOnly = Redact<Foo, "bar">;
const xo: XOnly = { x: 1 };
