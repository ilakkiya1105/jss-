const myfunc =() =>{
  const username =document.getElementById("usn").value 
 const password=document.getElementById("psw").value 
  
  alert(`hi, ${username}`)

}

document.getElementById("btnid").addEventListener("click",myfunc)
