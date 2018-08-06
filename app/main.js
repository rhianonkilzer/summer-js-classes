import Lion from "./Models/Lion.js";
import Warthog from "./Models/Warthog.js";

let simba = new Lion("Simba")
let pumba = new Warthog("Pumba")

console.log('is pumba alive?', pumba.alive)

simba.eat(pumba)

console.log('is pumba alive?', pumba.alive)


console.log(simba)