const loader = document.getElementById("loader");
const main = document.getElementById("main");
const envelope = document.querySelector(".envelope");
const btn = document.getElementById("openBtn");
const seal = document.getElementById("seal");
const instruction = document.getElementById("instruction");

setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "flex";
}, 3000);

// Step 1
btn.addEventListener("click", () => {

    btn.style.display = "none";

    instruction.style.display = "block";

    seal.classList.add("glow");

});

// Step 2
seal.addEventListener("click", () => {

    seal.classList.remove("glow");

    seal.style.transform = "translateX(-50%) scale(0.92)";

    setTimeout(() => {

    seal.style.transform = "translateX(-50%) scale(1)";
    seal.classList.add("break");

    setTimeout(() => {

    envelope.classList.add("open");

    setTimeout(() => {
        envelope.classList.add("show-card");
    }, 700);

}, 700);

}, 200);

});