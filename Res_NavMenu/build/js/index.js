
//
// let btn = document.querySelector(".btn");
// let menu = document.querySelector(".menu");
//     btn.addEventListener("click", () => {
//         menu.classList.toggle("show");
//     });



let menu = document.querySelector(".toggle span");
let ul = document.querySelector("ul");

    menu.addEventListener("click", function () {
        ul.classList.toggle("active");
    });