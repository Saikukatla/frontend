// Loops in JavaScript

for(let i=1; i<=5; i++){
    console.log(i,":Increment");
}
for(let j=5; j>=1; j--){
    console.log(j,":Decrement");
}

// while loop:

let a=6;
while(a<=10){
    console.log(a,":While");
    a++
}

// do while loop:

let e=1;
do{
    console.log(e,":Do While");
    e++
}while(e<=4);

for(let i=1; i<4;i++){
    if(i===3){
        continue; // skip the current iteration when i is 3
    }
}
