"use strict";

const id=document.querySelector("#id"),
    name=document.querySelector("#name"),
    stdNo=document.querySelector("#stdNo"),
    password=document.querySelector("#pw"),
    confirmPassword=document.querySelector("#cfpw"),
    button=document.querySelector("#button");

button.addEventListener("click", register);

function register() {
    if(!id.value)
        return alert("please enter your ID.")
    if(password.value!==confirmPassword.value)
        return alert("password does not match.")
    
    const req={
        id: id.value,
        name: name.value,
        stdNo: stdNo.value,
        password: password.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href="/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error("An error occured.");
    });
}