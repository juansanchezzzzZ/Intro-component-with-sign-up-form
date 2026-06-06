const inputs = document.querySelectorAll(".form-input");
const form = document.querySelector(".user-data-form");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    inputs.forEach((input, index) => {
        const wrapper = input.parentElement;

        // Email
        if (index === 2) {
            if (!emailPattern.test(input.value.trim())) {
                wrapper.classList.add("error");
            } else {
                wrapper.classList.remove("error");
            }
        }
        // others
        else {
            if (input.value.trim() === "") {
                wrapper.classList.add("error");
            } else {
                wrapper.classList.remove("error");
            }
        }
    });
});


const firstName = inputs[0];
const lastName = inputs[1];

[firstName, lastName].forEach(input => {
    input.addEventListener("input", () => {
        input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
    });
});