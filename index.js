const btnEl = document.querySelector("button");
const pEl = document.querySelector("p");
const inputEl = document.querySelector("input");

btnEl.addEventListener('click', () => {
    pEl.textContent = "The first step to being good at something is sucking really hard";
});

inputEl.addEventListener('keyup', () => {
    console.log(inputEl.value);
    // note to self: .value property DOES NOT work on input tags
    // use .textContent for everything except text fields, radio buttons, other input type elements
    pEl.textContent = inputEl.value;
});