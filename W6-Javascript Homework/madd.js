//Write a function for adding matrices madd(a,b) and test

function madd(a,b){
    let c=[[],[]];
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].length;j++){
            c[i][j]=a[i][j]+b[i][j];
        }
    }
    return c;
}
let x=[[1,1,1],[1,1,1]]
let y=[[1,1,1],[1,1,1]]
console.log(madd(x,y));