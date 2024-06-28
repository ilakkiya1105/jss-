let addValue =() =>{
    let a = parseInt(document.getElementById('input1').value);
    let b = parseInt(document.getElementById('input2').value);
    let c = a+b;

    document.getElementById('divid').innerHTML=c;
}

document.getElementById('btnid').addEventListener('click',addValue);