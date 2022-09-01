"use strict";
exports.__esModule = true;
var f = {
    make: "Ford",
    model: "Focus RS",
    doors: 5,
    engName: "EcoBoost HO",
    engCyl: 4,
    engPower: 350
};
var message1;
var message2;
message1 = f.make + " " + f.model + " " + JSON.stringify(f.doors) + " Door";
message2 = f.engName + " " + JSON.stringify(f.engCyl) + "cyl, " + JSON.stringify(f.engPower) + "hp";
console.log(message1);
console.log(message2);
