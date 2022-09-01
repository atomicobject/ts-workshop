import { NoSubstitutionTemplateLiteral } from "typescript";
import { AssertAssignable } from "../util";


type car = {
    make: string;
    model: string;
    doors: number;
}

type engine = {
    engName: string;
    engCyl: number;
    engPower: Number;
}

type fullCar = car & engine;

let f: fullCar = {
    make: "Ford",
    model: "Focus RS",
    doors: 5,
    engName: "EcoBoost HO",
    engCyl: 4,
    engPower: 350
}

let message1: string;
let message2: string;

message1 = f.make + " " + f.model + " " + JSON.stringify(f.doors) + " Door";
message2 = f.engName + " " + JSON.stringify(f.engCyl) + "cyl, " + JSON.stringify(f.engPower) + "hp";

console.log(message1);
console.log(message2);
