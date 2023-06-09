function count(words) {
    let cmap={}
    for(let word of words){
        if(c==null)
            cmap[word]=1
        else
            cmap[word]=cmap[word]+1
    }
    return cmap
}

let list = ["a","dog","Chase","a","Cat"]
let cmap = count(list)
console.log(cmap)