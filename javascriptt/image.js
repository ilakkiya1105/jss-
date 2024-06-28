
let changeImage = () =>{

    let cimg=document.getElementById('imgid');
    cimg.src=".https://images.dwncdn.net/images/t_app-icon-l/p/fc5dcf8c-49a8-4170-8f81-0946216205fc/2981464528/2150_4-77521533-imgingest-4102996789490452134.png";
    cimg.classList.add("image");
}

document.getElementById('btnid').addEventListener("click",changeImage);
