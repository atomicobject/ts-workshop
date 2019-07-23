type Food = "snack" | "meal";

type BellyState = StarvingState | HungryState | PeckishState | FullState;

function makeStarving(state: BellyState): StarvingState {
    
    if (state.name == "STARVING" || state.name == "HUNGRY") {
        return state.eatMeal().sleep();
    } else if (state.name == "PECKISH") {
        return state.eatSnack().sleep();
    } else {
        return state.sleep();
    }
}

function makeFull(state: BellyState): FullState {

}

type StarvingState = {
    name: "STARVING"
    eatSnack: () => HungryState
    eatMeal: () => FullState
}

type HungryState = {
    name: "HUNGRY"
    eatSnack: () => PeckishState
    eatMeal: () => FullState
}

type PeckishState = {
    name: "PECKISH"
    eatSnack: () => FullState
}

type FullState = {
    name: "FULL",
    sleep: () => StarvingState
}