class Matrix{
    constructor(m){
        this.m=m
    }
    add(b){
        let a = []
        for (let i=0; i<this.m.length; i++) {
            a[i]=[]
          for( let j=0;j<this.m[i].length;j++){
            a[i][j]=this.m[i][j] + b.m[i][j]
          }
        }
        return new Matrix(a)
    }
    /*var t = [];

    for (var i = 0; i < this.m.length; i++) {
        t[i] = [];
        for (var j = 0; j < this.m[i].length; j++) {
            t[i][j] = this.m[i][j] + b.m[i][j];
        }
    }
    return new Matrix(t)*/
    mul(b){
        let c=[]
        for (let i = 0; i < this.m.length; i++) {
            c[i] = []
            for (let j = 0; j < b.m[0].length; j++) {
              let total = 0
              for (let k = 0; k < this.m[i].length; k++) {
                total += this.m[i][k] * b.m[k][j]
              }
              c[i][j] = total
            }  
        }
        return new Matrix(c);
    }
}
const one = new Matrix([[1,2],[3,4]])
const two =new Matrix([[1,1],[1,1]])
console.log('Addition = ', one.add(two))
console.log('Multiply = ',one.mul(two))
