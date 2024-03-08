import './assets/style/main.scss';
// import './assets/js/index.js';
import 'animate.css';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

//hamburgerMenu code
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const hamburgerMenu = document.querySelector("#hamburgerMenu");
const closeIcon = document.querySelector(".closeIcon");


hamburgerIcon.addEventListener('click', function () {
    hamburgerMenu.style.display = "block";

    // hamburgerMenu.classList.add("anime")
})

closeIcon.addEventListener('click', function () {
    hamburgerMenu.style.display = "none";
});

// Dynamic button
function createDynamicButton(text, color, width, height, colorText, classes) {

    let button = document.createElement("button");
    button.textContent = text;
    button.style.backgroundColor = color;
    button.style.width = width + "%";
    button.style.height = height + "rem";
    button.className = "btnFixCart" + classes;
    button.style.color = colorText;
    return button;
}

let containers = document.getElementsByClassName("imgCartContainer");

// let black = createDynamicButton("Add To Cart", "black", 90, "2.875", "#FEFEFE");

// container.appendChild(black);

for (let i = 0; i < containers.length; i++) {
    let black = createDynamicButton(
        "اضافه کردن به سبد خرید",
        "black",
        90,
        "2.875",
        "#FEFEFE",
        ""
    );
    containers[i].appendChild(black);
}


let elements = document.getElementsByClassName("discountNew");

for (let i = 0; i < elements.length; i++) {
    let btnNEW = createDynamicButton(
        "جدید",
        "white",
        24,
        "2",
        "black",
        "btnNEW"
    );
    let discount = createDynamicButton(
        "-50%",
        "#38CB89",
        24,
        "2",
        "#FEFEFE",
        "discount"
    );
    elements[i].appendChild(btnNEW);
    elements[i].appendChild(discount);
}





