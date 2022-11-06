let cargoHold =['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 
'meal packs', 'slinky', 'security blanket'];

console.log(cargoHold);

//a
cargoHold.splice(3,0,'keys');
console.log(cargoHold);
//b
let a=cargoHold.indexOf('instruction manual');
cargoHold.splice(a,1);
console.log(cargoHold);
//c
// 'cat', 'fob', and 'string cheese'.
cargoHold.splice(2,0,'cat','fob','string cheese');
console.log(cargoHold);
