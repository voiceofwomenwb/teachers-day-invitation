const loader = document.getElementById("loader");
const main = document.getElementById("main");
const envelope = document.querySelector(".envelope");
const btn = document.getElementById("openBtn");
const seal = document.getElementById("seal");
const instruction = document.getElementById("instruction");

setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "flex";
}, 5000);

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
        document.getElementById("card").classList.add("show");
const music = document.getElementById("bgMusic");
music.volume = 0.35;
music.play().catch(() => {});
setTimeout(() => {

const flowers = document.getElementById("flowers");

setInterval(() => {

const flower = document.createElement("div");

flower.className = "flower";
flower.innerHTML = "🌸";

flower.style.left = Math.random() * 100 + "vw";
flower.style.fontSize = (18 + Math.random() * 18) + "px";

flowers.appendChild(flower);

setTimeout(() => {
    flower.remove();
}, 7000);

}, 400);

}, 1000);
    }, 1500);

}, 1500);

}, 200);

});