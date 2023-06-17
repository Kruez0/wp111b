function navWide(){
    let nav=document.getElementById('nav')
    nav.style.width='200px';
}
function navShort(){
    let nav=document.getElementById('nav')
    nav.style.width='40px';
}
let main=document.querySelector('#main')

let pages={
    '#aboutus':`
   I am a ...
    `,
    '#Ex1':`
   pen
    `,
    '#Ex2':`apple`,
    '#Ex3':'apple pen',
}

window.onhashchange= function () {
   let hash= window.location.hash
main.innerHTML= pages[hash]
}