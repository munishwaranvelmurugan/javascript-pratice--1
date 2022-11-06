const cargoHold=['oxygen_tanks', 'space_suits', 'parrot', 'instruction_manual'
,' meal_packs', 'slinky', 'security_blanket'];
console.log(cargoHold);
// console.log(a);
cargoHold[5]='space tether';
console.log(cargoHold);
// console.log(b);
cargoHold.pop();
console.log(cargoHold);
// console.log(c);
cargoHold.shift();
console.log(cargoHold);
// console.log(d);
cargoHold.push('20 meters');
cargoHold.unshift(1138);
console.log(cargoHold);
// console.log(e);
let ab=cargoHold.length;
console.log(cargoHold+" & length:"+ab);



