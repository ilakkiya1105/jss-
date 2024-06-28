let count =0;
let spp =document.getElementById("spa")
let increment =() =>{
    count++;

spp.innerHTML=count;

}


let decrement =() =>{
    count--;
    
spp.innerHTML=count;

}

let reset =() =>{
    count=0;
    
spp.innerHTML=count;

}

document.getElementById("inc").addEventListener("click",increment)
document.getElementById("dec").addEventListener("click",decrement)
document.getElementById("res").addEventListener("click",reset)