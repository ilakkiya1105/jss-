let checkUser = () =>{
    let userName = document.getElementById('user').value;
    let spn1 = document.getElementById('sp1');
    if(userName!='')
        {
            spn1.innerHTML="<li>okay</li>";
            spn1.style.color="green";
        }
        else
        {
            spn1.textContent="Please enter a name";
            spn1.style.color="red";
        }
}

let checkPassword = () =>{
    let psw = document.getElementById('psw').value;
    let spn2 = document.getElementById('sp2');

    if(psw.length >7)
        {
            spn2.innerHTML="strong password";
            spn2.style.color="green";
        }
        else
        {
            spn2.innerHTML="weak password";
            spn2.style.color="red";
        }
}

document.getElementById('psw').addEventListener('keyup',checkPassword);


let viewData = () =>{
    let userName = document.getElementById('user').value;
    let psw = document.getElementById('psw').value;
    document.getElementById('tblid').innerHTML="<tr><td>"+userName+'</td><td>'+psw+'</td></tr>';
}

document.getElementById('btnid').addEventListener('click',viewData);
