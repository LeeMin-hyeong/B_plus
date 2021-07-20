"use strict";

const id=document.querySelector("#id"),
    password=document.querySelector("#pw"),
    button=document.querySelector("button");

button.addEventListener("click", login);

function login() {
    const req={
        id: id.value,
        password: password.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).then(res=>console.log(res.json()));
}