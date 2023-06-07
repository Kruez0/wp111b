//Write a program to enumerate the truth table truthTable(n) for n variables (advanced questions) sequence combination of 0, 1
function truthTable(x){
    const Row=2 ** x;
    const table = Array(Row);
    for(let i=0;i<Row;i++){
    table[i]= Array(x);
    for(let j=0;j<x;j++){
        const z=(i>>j)&1;
        table[i][j]=z;
    }
}
return table;   
}
//change the number below
console.log(truthTable(4));
//change the number above