let count = 0;
let span1 = document.getElementById('sp');
let increment = () =>{
    count++;
    span1.innerHTML=count;
    span1.className="p";
}
let decrement = () =>{
    count--;
    span1.innerHTML=count;
    span1.className="text-danger";
}
let reset = () =>{
    count=0;
    span1.innerHTML=count;
    span1.className="text-warning";
}
document.getElementById('inc').addEventListener('click',increment);
document.getElementById('dec').addEventListener('click',decrement);
document.getElementById('reset').addEventListener('click',reset);