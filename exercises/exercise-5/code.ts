export interface GenericState {
  readonly name: string;
  readonly sleep?: () => GenericState;
  readonly eatSnack?: () => GenericState;
  readonly eatMeal?: () => GenericState;
}

export class Starving implements GenericState {
  name = "starving";
  eatSnack = () => new Hungry();
  eatMeal = () => new Full();
}

export class Hungry implements GenericState {
  name = "hungry";
  eatSnack = () => new Peckish();
  eatMeal = () => new Full();
}

export class Peckish implements GenericState {
  name = "peckish";
  eatSnack = () => new Full();
}

export class Full implements GenericState {
  name = "full";
  sleep = () => new Starving();
}

export type State = Starving | Hungry | Peckish | Full;

// export class Starving implements GenericState {
//   name = "starving";
//   eatSnack = () => new Hungry();
//   eatMeal = () => new Full();
// }

// export class Hungry implements GenericState {
//   name = "hungry";
//   eatSnack = () => new Peckish();
//   eatMeal = () => new Full();
// }

// export class Peckish implements GenericState {
//   name = "peckish";
//   eatSnack = () => new Full();
// }

// export class Full implements GenericState {
//   name = "full";
//   sleep = () => new Starving();
// }

// type State = Starving | Hungry | Peckish | Full;
