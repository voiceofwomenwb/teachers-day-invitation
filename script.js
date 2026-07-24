setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "flex";
}, 3000);

document.getElementById("openBtn").addEventListener("click", () => {
    alert("🌸 Part 2-তে এখান থেকেই খাম খুলবে!");
});