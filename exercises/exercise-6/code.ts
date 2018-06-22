export interface HungerState {
  readonly name: string;
  readonly sleep?: () => HungerState;
  readonly eatSnack?: () => HungerState;
  readonly eatMeal?: () => HungerState;
}

export class Starving implements HungerState {
  readonly name = "starving";
}

export class Hungry implements HungerState {
  readonly name = "hungry";
}

export class Peckish implements HungerState {
  readonly name = "peckish";
}

export class Full implements HungerState {
  readonly name = "full";
}

export enum Transition {
    SNACK = "SNACK",
    MEAL = "MEAL",
    SLEEP = "SLEEP"
}

export function quickestRouteToSleep(state: HungerState): Transition[] {
  return [];
}
