let userCheck = () =>{
    let user = document.getElementById("usn").value;
    let sp =document.getElementById("sp1");

    if(user !=""){
        sp.innerHTML="done";
        sp.style.color="green";
    }

    else{
        sp.textContent="enter your username";
        sp.style.color="red";
    }
}
document.getElementById("usn").addEventListener("keyup",userCheck)
let pass =() =>{

    let passw =document.getElementById("psw").value;
    let spn2 =document.getElementById("sp2")

    if(passw.length > 7){
        spn2.innerHTML="strong password";
        spn2.style.color="green"
    }
    else{
        spn2.innerHTML="weak password";
        spn2.style.color="red";
    }

}

document.getElementById("psw").addEventListener("keyup",pass)

let viewData = () =>{
 let use =document.getElementById("usn").value;
 let ps = document.getElementById("psw").value;

 document.getElementById("tbid").innerHTML="<tr><td>"+use+"</td><td>"+ps+"</td></tr>"

}
document.getElementById("btnid").addEventListener("click",viewData)

