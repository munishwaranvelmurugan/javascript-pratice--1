//a
let element1 = ['hydrogen', 'H', 1.008] ;
 let element2 = ['helium', 'He', 4.003] ;
  let element26 = ['iron', 'Fe', 55.85];

//b
  let table=[element1];
  
  table.push(element2);table.push(element26);
  console.log(table);


console.log();


//c
console.log();
console.log(table[1]);
console.log(table[1][1]);


//d
console.log();
console.log('molecule weight');
for(var i=0;i<3;i++)
{
    console.log(table[i][2]);
}


