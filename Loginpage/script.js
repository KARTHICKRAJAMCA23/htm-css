let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.style.left = "50%";
    formSection.style.transform = "translateX(-50%)";
});

login.addEventListener("click", () => {
    slider.style.left = "10px";
    formSection.style.transform = "translateX(0)";
});