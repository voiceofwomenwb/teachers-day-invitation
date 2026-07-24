const loader = document.getElementById("loader");
const main = document.getElementById("main");
const envelope = document.querySelector(".envelope");
const btn = document.getElementById("openBtn");

setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "flex";
}, 3000);

btn.addEventListener("click", () => {
    envelope.classList.add("open");
    btn.style.display = "none";
});