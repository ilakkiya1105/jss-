let calculator = () =>
    {
let a= parseInt(document.getElementById("in").value);

let b= parseInt(document.getElementById("out").value);

let c=a+b;
document.getElementById("divid").innerHTML=c;

    }

    document.getElementById("ad").addEventListener("click",calculator)

