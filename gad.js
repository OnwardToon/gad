const darkSwitch = document.querySelector(".dark-switch");
const lightSwitch =document.querySelector(".light-switch");
const body = document.querySelector("body");

darkSwitch.addEventListener("click", () => {
    body.classList.add("dark-mode");
    darkSwitch.classList.remove("active");
    lightSwitch.classList.add("active");
})

lightSwitch.addEventListener("click", () => {
    body.classList.remove("dark-mode");
    darkSwitch.classList.add("active");
    lightSwitch.classList.remove("active");
})