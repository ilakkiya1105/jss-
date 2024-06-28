let count=0;
let sp =document.getElementById("spid")

let increment = () =>{
 count++;

 sp.innerHTML=count;
}

let decrement =() =>{
    count--;
    sp.innerHTML=count;
}

let reset =() =>{
    count=0;
    sp.innerHTML=count;
}

document.getElementById("inc").addEventListener("click",increment);
document.getElementById("dec").addEventListener("click",decrement);
document.getElementById("res").addEventListener("click",reset);