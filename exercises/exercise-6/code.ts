export interface HungerState {
  readonly name: string;
  readonly sleep?: () => HungerState;
  readonly eatSnack?: () => HungerState;
  readonly eatMeal?: () => HungerState;
}

export class Starving implements HungerState {
  name = "starving";
  eatSnack = () => new Hungry();
  eatMeal = () => new Full();
}

export class Hungry implements HungerState {
  name = "hungry";
  eatSnack = () => new Peckish();
  eatMeal = () => new Full();
}

export class Peckish implements HungerState {
  name = "peckish";
  eatSnack = () => new Full();
}

export class Full implements HungerState {
  name = "full";
  sleep = () => new Starving();
}


export enum Transition {
    SNACK = "SNACK",
    MEAL = "MEAL",
    SLEEP = "SLEEP"
}

export function quickestRouteToSleep(state: HungerState): Transition[] {
  let Jane = { state: new Starving() };
  Jane.state.eatSnack().eatMeal
  return [];
}
